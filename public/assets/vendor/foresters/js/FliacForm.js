import { DataStreamProxy } from '/assets/vendor/foresters/js/DataStreamProxy.js';

export class FliacForm {

    constructor(illInputForm) {
        this.initialize(illInputForm);
    }

    initialize(illInputForm) {
        this.setProductType();
        this.showHideSections(this.selected_product_type);
        this.disableEnableControls();

        document.querySelector('.illustration-form').addEventListener('submit', evt => {
            evt.preventDefault();
        });

        const formSections = illInputForm.querySelectorAll('form > section');

        // allInputs.forEach(input_item => {
        //   input_item.addEventListener('change', evt => {
        //     const val = evt.target.value

        //     const dataStream = new DataStreamProxy(illInputForm)
        //     dataStream.update()
        //   })
        // })
        formSections.forEach(input_item => {
            input_item.addEventListener('change', evt => {
                const val = evt.target.value;

                const dataStream = new DataStreamProxy(illInputForm);
                dataStream.update();
            });
        });

        const calculateEvent = new CustomEvent('calculate', {
            bubbles: true,
            detail: {
                text: () => 'test'
            }
        });

        const allCheckboxes = illInputForm.querySelectorAll('input[type=checkbox]');

        allCheckboxes.forEach(checkbox_input => {
            checkbox_input.addEventListener('click', evt => {
                evt.target.dispatchEvent(calculateEvent);
            });
        });

        illInputForm.querySelectorAll('.annual-premium').forEach(formDiv => {
            formDiv.addEventListener('calculate', e => console.log(e.detail.text()));
        });

        illInputForm.querySelector('.select-product').addEventListener('change', evt => {
            let prod_prefix = this.getPrefix(evt.target.value);

            if (this.changedProduct(prod_prefix)) {
                this.showHideSections(prod_prefix);
                this.setProductType(prod_prefix);
            }
        });

        const defaultData = new DataStreamProxy(illInputForm);
        defaultData.update();

        // illInputForm.querySelector('.loan-checkbox').addEventListener('change', evt => {

        //     evt.target.checked
        // })
        // illInputForm.querySelectorAll('.dollar-amount').forEach(dollarInput => {
        //     dollarInput.addEventListener('keypress', dollarIn => {
        //         let dollar_input = dollarIn.target.value

        //         // if (isNaN(dollar_input)) {
        //         //     dollar_input = 0
        //         // }

        //         dollarIn.target.value = new Intl.NumberFormat('en-US', {
        //             minimumFractionDigits: 2,
        //             maximumFractionDigits: 2
        //         }).format(dollar_input)

        //     })
        // })
    }

    showHideSections(prod_prefix) {
        switch (prod_prefix) {
            case 'ISP3':
                this.show('.isp3-info');
                this.hide('.iswl-info');
                break;
            case 'ISWL':
                this.show('.iswl-info');
                this.hide('.isp3-info');
                break;
        }
    }

    disableEnableControls() {
        switch (this.selected_product_type) {
            case 'ISP3-CHOICE-15':
                break;
            case 'ISP3-CHOICE-WHILE-LIFE':
                break;
            case 'ISP3-CHOICE-WHILE-LIFE-EXPRESS':
                break;
            case 'ISWL-2-3.50':
                break;
            default:
        }
    }

    hide(hide_class) {
        document.querySelectorAll(hide_class).forEach(ele => {
            ele.classList.add('ff-hidden');
            // ele.querySelectorAll('input').forEach(input => {
            //     input.disabled = true
            // })
        });
    }

    show(show_class) {
        document.querySelectorAll(show_class).forEach(ele => {
            ele.classList.remove('ff-hidden');
            // ele.querySelectorAll('input').forEach(input => {
            //     input.disabled = false
            // })
        });
    }

    changedProduct(prod_prefix) {
        return prod_prefix !== this.selected_product_type;
    }

    setProductType(prod_prefix = null) {
        if (!prod_prefix) {
            let product = document.querySelector('.select-product').value;
            prod_prefix = this.getPrefix(product) || 'ISP3';
        }

        this.selected_product_type = prod_prefix;
    }

    getPrefix(full_product_code = '') {
        return full_product_code.substring(0, 4);
    }

}
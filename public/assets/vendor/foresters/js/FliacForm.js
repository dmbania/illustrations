import { DataStreamProxy } from '/assets/vendor/foresters/js/DataStreamProxy.js';

export class FliacForm {

    constructor(illInputForm) {
        this.setProductType();
        this.show('.isp3-info');
        this.hide('.iswl-info');
        this.initialize(illInputForm);
    }

    initialize(illInputForm) {
        // const allInputs = illInputForm.querySelectorAll('input[type=text], input[type=number], input[type=radio], select')
        const theForm = illInputForm.querySelectorAll('form > section');

        // allInputs.forEach(input_item => {
        //   input_item.addEventListener('change', evt => {
        //     const val = evt.target.value

        //     const dataStream = new DataStreamProxy(illInputForm)
        //     dataStream.update()
        //   })
        // })
        theForm.forEach(input_item => {
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

                this.setProductType(prod_prefix);
            }
        });

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

    hide(hide_class) {
        document.querySelectorAll(hide_class).forEach(ele => {
            ele.classList.add('ff-hidden');
        });
    }

    show(show_class) {
        document.querySelectorAll(show_class).forEach(ele => {
            ele.classList.remove('ff-hidden');
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
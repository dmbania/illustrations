import { FormCollector } from '/assets/vendor/foresters/js/FormCollector.js';
import { DataStreamProxy } from '/assets/vendor/foresters/js/DataStreamProxy.js';

export class FliacForm {
  constructor(illInputForm) {
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
      detail: { text: () => 'test' }
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
      let prod_prefix = evt.target.value.substring(0, 4);

      switch (prod_prefix) {
        case 'ISP3':
          console.log('show ISP3');
          console.log('hide ISWL');
          break;
        case 'ISWL':
          console.log('show ISWL');
          console.log('hide ISP3');
          break;
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
}
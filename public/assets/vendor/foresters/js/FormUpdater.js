export class FormUpdater {
  constructor(form, data) {
    for (const field in data) {

      const updating_field = form.querySelector('[name=' + field + ']') || null;

      if (!updating_field) continue;

      switch (updating_field.tagName) {
        case 'INPUT':
          // updating_field.value = data[field] + ' (updated)'

          this.updateInput(updating_field);
          break;
        case 'SELECT':

          break;

        default:
          console.error('Unknown tag type detected');
      }

      // console.log(updating_field.tagName)
    }
  }

  updateInput(input_field) {
    switch (input_field.getAttribute('type')) {
      case 'text':
        this.updateText(input_field);
        break;
      case 'number':
        this.updateNumber(input_field);
        break;
      case 'radio':
        this.updateRadio(input_field);
        break;
      case 'checkbox':
        this.updateCheckbox(input_field);
        break;
    }

    // console.log(input_field.getAttribute('type'))
  }

  updateText(input_field) {
    // this.doSomething()
  }

  updateNumber(input_field) {
    // this.doSomething()
  }

  updateRadio(input_field) {
    // this.doSomething()
  }

  updateCheckbox(input_field) {
    // this.doSomething()
  }

  updateDropDown(input_field) {
    // this.doSomething()
  }
}
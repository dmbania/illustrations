export class FormUpdater {
    constructor(form) {
        this.form = form
    }

    update(data) {
        for (const field in data) {
            const updating_field = this.form.querySelector('[name=' + field + ']') || null

            if (!updating_field) continue;

            switch (updating_field.tagName) {
                case 'INPUT':
                    this.updateInput(updating_field, data[field])
                    break

                case 'SELECT':
                    this.updateDropDown(updating_field, data[field])
                    break

                default:
                    console.error('Unknown tag type detected')
            }
        }
    }

    updateInput(input_field, input_value) {
        switch (input_field.getAttribute('type')) {
            case 'text':
                this.updateText(input_field, input_value)
                break
            case 'number':
                this.updateNumber(input_field, input_value)
                break
            case 'radio':
                this.updateRadio(input_field, input_value)
                break
            case 'checkbox':
                this.updateCheckbox(input_field, input_value)
                break
        }
    }

    updateText(input_field, input_value) {
        input_field.value = input_value
    }

    updateNumber(input_field, input_value) {
        // this.doSomething()
    }

    updateRadio(input_field, input_value) {
        // this.doSomething()
    }

    updateCheckbox(input_field, input_value) {
        // this.doSomething()
    }

    updateDropDown(input_field, input_value) {
        input_field.value = input_value
    }


}

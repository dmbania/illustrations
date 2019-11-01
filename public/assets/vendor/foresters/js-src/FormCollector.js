export class FormCollector {
  constructor (form) {
    this.formJSON = ''
    this.serializeFormJSON(form)
  }

  serializeFormJSON (form) {
    const formArray = {}
    const formData = new FormData(form)
    for (var pair of formData.entries()) {
      if (formArray[pair[0]]) {
        if (!formArray[pair[0]].push) {
          formArray[pair[0]] = [formArray[pair[0]]]
        }
        formArray[pair[0]].push(pair[1] || '')
      } else {
        formArray[pair[0]] = pair[1] || ''
      }
    }

    this.formJSON = JSON.stringify(formArray)
  };

  getJSON () {
    return this.formJSON
  }
}

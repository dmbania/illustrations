import { FormCollector } from '/assets/vendor/foresters/js/FormCollector.js'
import { DataStreamProxy } from '/assets/vendor/foresters/js/DataStreamProxy.js'

export class RunIllustrationButton {
  constructor (runButton, illInputForm) {
    runButton.addEventListener('click', (evt) => {
      const formData = new FormData(illInputForm)
      const dataProxy = new DataStreamProxy(formData)

      dataProxy.generatePdf()
      evt.preventDefault()
    })
  }
}

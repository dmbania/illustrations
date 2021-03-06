import { FormUpdater } from '/assets/vendor/foresters/js/FormUpdater.js';
import { SummaryUpdater } from '/assets/vendor/foresters/js/SummaryUpdater.js';

export class DataStreamProxy {
  constructor(form) {
    this.form = form;
    this.formData = new FormData(form);
    this.returnData = {};
  }

  update() {
    fetch('/services/illustration/update', {
      method: 'POST',
      body: this.formData
    }).then(response => response.json()).then(result => {
      let formUpdater = new FormUpdater(this.form);
      formUpdater.update(result['payload']);
      new SummaryUpdater(result['payload']['summary']);
    }).catch(err => console.error(err.toString()));
  }

  validate() {}

  getData(data) {
    this.returnData = data;
  }

  generatePdf() {
    this.update();
    fetch('/services/fliac/pdf', {
      method: 'POST',
      body: this.formData
    });
  }
}
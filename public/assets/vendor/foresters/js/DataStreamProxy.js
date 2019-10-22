'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataStreamProxy = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FormUpdater = require('/assets/vendor/foresters/js/FormUpdater.js');

var _SummaryUpdater = require('/assets/vendor/foresters/js/SummaryUpdater.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataStreamProxy = exports.DataStreamProxy = function () {
  function DataStreamProxy(form) {
    _classCallCheck(this, DataStreamProxy);

    this.form = form;
    this.formData = new FormData(form);
    this.returnData = {};
  }

  _createClass(DataStreamProxy, [{
    key: 'update',
    value: function update() {
      var _this = this;

      fetch('/services/illustration/update', {
        method: 'POST',
        body: this.formData
      }).then(function (response) {
        return response.json();
      }).then(function (result) {
        new _FormUpdater.FormUpdater(_this.form, result['payload']);
        new _SummaryUpdater.SummaryUpdater(result['payload']['summary']);
      }).catch(function (err) {
        return console.error(err.toString());
      });
    }
  }, {
    key: 'validate',
    value: function validate() {}
  }, {
    key: 'getData',
    value: function getData(data) {
      this.returnData = data;
    }
  }, {
    key: 'generatePdf',
    value: function generatePdf() {
      this.update();
      fetch('/services/fliac/pdf', {
        method: 'POST',
        body: this.formData
      });
    }
  }]);

  return DataStreamProxy;
}();
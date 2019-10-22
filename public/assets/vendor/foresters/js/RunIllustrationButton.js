'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RunIllustrationButton = undefined;

var _DataStreamProxy = require('/assets/vendor/foresters/js/DataStreamProxy.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RunIllustrationButton = exports.RunIllustrationButton = function RunIllustrationButton(runButton, illInputForm) {
  _classCallCheck(this, RunIllustrationButton);

  runButton.addEventListener('click', function (evt) {
    var formData = new FormData(illInputForm);
    var dataProxy = new _DataStreamProxy.DataStreamProxy(formData);

    dataProxy.generatePdf();
    evt.preventDefault();
  });
};
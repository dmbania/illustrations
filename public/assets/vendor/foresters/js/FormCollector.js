'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormCollector = exports.FormCollector = function () {
  function FormCollector(form) {
    _classCallCheck(this, FormCollector);

    this.formJSON = '';
    this.serializeFormJSON(form);
    console.log(this.formJSON);
  }

  _createClass(FormCollector, [{
    key: 'serializeFormJSON',
    value: function serializeFormJSON(form) {
      var formArray = {};
      var formData = new FormData(form);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = formData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pair = _step.value;

          if (formArray[pair[0]]) {
            if (!formArray[pair[0]].push) {
              formArray[pair[0]] = [formArray[pair[0]]];
            }
            formArray[pair[0]].push(pair[1] || '');
          } else {
            formArray[pair[0]] = pair[1] || '';
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.formJSON = JSON.stringify(formArray);
    }
  }, {
    key: 'getJSON',
    value: function getJSON() {
      return this.formJSON;
    }
  }]);

  return FormCollector;
}();
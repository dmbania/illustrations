'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormUpdater = exports.FormUpdater = function () {
  function FormUpdater(form, data) {
    _classCallCheck(this, FormUpdater);

    for (var field in data) {

      var updating_field = form.querySelector('[name=' + field + ']') || null;

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

  _createClass(FormUpdater, [{
    key: 'updateInput',
    value: function updateInput(input_field) {
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
  }, {
    key: 'updateText',
    value: function updateText(input_field) {
      // this.doSomething()
    }
  }, {
    key: 'updateNumber',
    value: function updateNumber(input_field) {
      // this.doSomething()
    }
  }, {
    key: 'updateRadio',
    value: function updateRadio(input_field) {
      // this.doSomething()
    }
  }, {
    key: 'updateCheckbox',
    value: function updateCheckbox(input_field) {
      // this.doSomething()
    }
  }, {
    key: 'updateDropDown',
    value: function updateDropDown(input_field) {
      // this.doSomething()
    }
  }]);

  return FormUpdater;
}();
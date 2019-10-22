'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FliacForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DataStreamProxy = require('/assets/vendor/foresters/js/DataStreamProxy.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FliacForm = exports.FliacForm = function () {
    function FliacForm(illInputForm) {
        _classCallCheck(this, FliacForm);

        this.initialize(illInputForm);
    }

    _createClass(FliacForm, [{
        key: 'initialize',
        value: function initialize(illInputForm) {
            var _this = this;

            this.setProductType();
            this.showHideSections(this.selected_product_type);
            this.disableEnableControls();

            document.querySelector('.illustration-form').addEventListener('submit', function (evt) {
                evt.preventDefault();
            });

            var formSections = illInputForm.querySelectorAll('form > section');

            // allInputs.forEach(input_item => {
            //   input_item.addEventListener('change', evt => {
            //     const val = evt.target.value

            //     const dataStream = new DataStreamProxy(illInputForm)
            //     dataStream.update()
            //   })
            // })
            formSections.forEach(function (input_item) {
                input_item.addEventListener('change', function (evt) {
                    var val = evt.target.value;

                    var dataStream = new _DataStreamProxy.DataStreamProxy(illInputForm);
                    dataStream.update();
                });
            });

            var calculateEvent = new CustomEvent('calculate', {
                bubbles: true,
                detail: {
                    text: function text() {
                        return 'test';
                    }
                }
            });

            var allCheckboxes = illInputForm.querySelectorAll('input[type=checkbox]');

            allCheckboxes.forEach(function (checkbox_input) {
                checkbox_input.addEventListener('click', function (evt) {
                    evt.target.dispatchEvent(calculateEvent);
                });
            });

            illInputForm.querySelectorAll('.annual-premium').forEach(function (formDiv) {
                formDiv.addEventListener('calculate', function (e) {
                    return console.log(e.detail.text());
                });
            });

            illInputForm.querySelector('.select-product').addEventListener('change', function (evt) {
                var prod_prefix = _this.getPrefix(evt.target.value);

                if (_this.changedProduct(prod_prefix)) {
                    _this.showHideSections(prod_prefix);
                    _this.setProductType(prod_prefix);
                }
            });

            var defaultData = new _DataStreamProxy.DataStreamProxy(illInputForm);
            defaultData.update();

            // illInputForm.querySelector('.loan-checkbox').addEventListener('change', evt => {

            //     evt.target.checked
            // })
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
    }, {
        key: 'showHideSections',
        value: function showHideSections(prod_prefix) {
            switch (prod_prefix) {
                case 'ISP3':
                    this.show('.isp3-info');
                    this.hide('.iswl-info');
                    break;
                case 'ISWL':
                    this.show('.iswl-info');
                    this.hide('.isp3-info');
                    break;
            }
        }
    }, {
        key: 'disableEnableControls',
        value: function disableEnableControls() {
            switch (this.selected_product_type) {
                case 'ISP3-CHOICE-15':
                    break;
                case 'ISP3-CHOICE-WHILE-LIFE':
                    break;
                case 'ISP3-CHOICE-WHILE-LIFE-EXPRESS':
                    break;
                case 'ISWL-2-3.50':
                    break;
                default:
            }
        }
    }, {
        key: 'hide',
        value: function hide(hide_class) {
            document.querySelectorAll(hide_class).forEach(function (ele) {
                ele.classList.add('ff-hidden');
                // ele.querySelectorAll('input').forEach(input => {
                //     input.disabled = true
                // })
            });
        }
    }, {
        key: 'show',
        value: function show(show_class) {
            document.querySelectorAll(show_class).forEach(function (ele) {
                ele.classList.remove('ff-hidden');
                // ele.querySelectorAll('input').forEach(input => {
                //     input.disabled = false
                // })
            });
        }
    }, {
        key: 'changedProduct',
        value: function changedProduct(prod_prefix) {
            return prod_prefix !== this.selected_product_type;
        }
    }, {
        key: 'setProductType',
        value: function setProductType() {
            var prod_prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (!prod_prefix) {
                var product = document.querySelector('.select-product').value;
                prod_prefix = this.getPrefix(product) || 'ISP3';
            }

            this.selected_product_type = prod_prefix;
        }
    }, {
        key: 'getPrefix',
        value: function getPrefix() {
            var full_product_code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            return full_product_code.substring(0, 4);
        }
    }]);

    return FliacForm;
}();
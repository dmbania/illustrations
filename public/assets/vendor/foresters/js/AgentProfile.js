"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AgentProfile = exports.AgentProfile = function () {
    function AgentProfile(APM, profileForm) {
        _classCallCheck(this, AgentProfile);

        this.APM = APM;
        this.profileForm = profileForm;
        this.profileData = [];

        this.initForm();
    }

    _createClass(AgentProfile, [{
        key: "initForm",
        value: function initForm() {
            var _this = this;

            this.profileForm.addEventListener('submit', function (evt) {

                var formData = new FormData(_this.profileForm);

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = formData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var pair = _step.value;

                        _this.profileData[pair[0]] = pair[1];
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

                var profile_UID = _this.APM.saveAgent(_this.profileData);

                _this.setUID(profile_UID);

                evt.preventDefault();
            });
        }
    }, {
        key: "setUID",
        value: function setUID(uid) {
            var formUID = document.querySelector("[name='agent-uid']");
            formUID.value = uid;
        }
    }]);

    return AgentProfile;
}();
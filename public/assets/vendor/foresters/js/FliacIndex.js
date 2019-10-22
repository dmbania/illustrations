'use strict';

var _FliacForm = require('/assets/vendor/foresters/js/FliacForm.js');

var _RunIllustrationButton = require('/assets/vendor/foresters/js/RunIllustrationButton.js');

var fliac_form = document.querySelector('.illustration-form');
var IllustrationForm = new _FliacForm.FliacForm(fliac_form);

var run_button = document.querySelector('.run-illustration-button');
var RunButton = new _RunIllustrationButton.RunIllustrationButton(run_button, fliac_form);
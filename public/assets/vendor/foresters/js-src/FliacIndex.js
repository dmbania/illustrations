import { FliacForm } from '/assets/vendor/foresters/js/FliacForm.js'
import { RunIllustrationButton } from '/assets/vendor/foresters/js/RunIllustrationButton.js'

const fliac_form = document.querySelector('.illustration-form')
const IllustrationForm = new FliacForm(fliac_form)

const run_button = document.querySelector('.run-illustration-button')
const RunButton = new RunIllustrationButton(run_button, fliac_form)

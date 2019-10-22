import { AgentProfileManager } from '/assets/vendor/foresters/js/AgentProfileManager.js'

const agentStorage = window.localStorage;
const APM = new AgentProfileManager(agentStorage)
const profile_form = document.querySelector('.agent-profile-form')

const agentProfile = new AgentProfile(APM, profile_form)

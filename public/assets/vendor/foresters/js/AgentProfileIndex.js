import { AgentProfileForm } from '/assets/vendor/foresters/js/AgentProfileForm.js';
import { AgentProfileManager } from '/assets/vendor/foresters/js/AgentProfileManager.js';

const agentStorage = window.localStorage;
const APM = new AgentProfileManager(agentStorage);

let url = new URL(window.location);
let pathnames = url.pathname.split('/');

const agent = APM.getAgent(pathnames.pop());
const profile_form = document.querySelector('.agent-profile-form');

new AgentProfileForm(agent, profile_form, APM);
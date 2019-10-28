import { AgentProfileForm } from '/assets/vendor/foresters/js/AgentProfileForm.js';
import { AgentProfileManager } from '/assets/vendor/foresters/js/AgentProfileManager.js';

const agentStorage = window.localStorage;
const APM = new AgentProfileManager(agentStorage);

let url = new URL(window.location);
let pathnames = url.pathname.replace('/agent/profile', '').split('/');
let agent_id = pathnames.length ? pathnames.pop() : '';

const agent = APM.getAgent(agent_id);
const profile_form = document.querySelector('.agent-profile-form');

new AgentProfileForm(agent, profile_form, APM);
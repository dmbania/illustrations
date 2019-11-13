import { AgentProfileManager } from '/assets/vendor/foresters/js/AgentProfileManager.js';
import { SelectedAgent } from '/assets/vendor/foresters/js/SelectedAgent.js';

const agentStorage = window.localStorage;
const APM = new AgentProfileManager(agentStorage);
const agentDisplay = document.querySelector('.selected-agent-display');

const sa = new SelectedAgent(APM, agentDisplay);
sa.display();
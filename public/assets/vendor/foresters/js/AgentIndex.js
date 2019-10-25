import { AgentProfileManager } from '/assets/vendor/foresters/js/AgentProfileManager.js';
import { AgentProfileTable } from '/assets/vendor/foresters/js/AgentProfileTable.js';

const agentStorage = window.localStorage;
const APM = new AgentProfileManager(agentStorage);
// APM.showAgents()

const agents = APM.getAgents();
const agentTable = new AgentProfileTable(agents, document.querySelector('.agent-table'));
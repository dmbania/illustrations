import { AgentProfileManager } from '/assets/vendor/foresters/js/AgentProfileManager.js';
import { AgentProfileTable } from '/assets/vendor/foresters/js/AgentProfileTable.js';

const agentStorage = window.localStorage;
const APM = new AgentProfileManager(agentStorage);
const agents = APM.getAgents();
const agentTable = new AgentProfileTable(agents, document.querySelector('.agent-table'));

// APM.clear()
// APM.showAgents()
// APM.addAgent({
//     "agent-name" : "Agent One",
//     "agent-uid" : "",
//     "agent-title" : "Agent Smith",
//     "agent-company" : "Foresters Financial",
//     "agent-address-1" : "#3445 High Street",
//     "agent-address-2" : "",
//     "agent-city" : "Newark",
//     "agent-zip" : "07928",
//     "agent-state" : "NJ",
//     "agent-website" : "http://www.example.com"
// })

const add_button = document.querySelector('.add-agent-button').addEventListener('click', evt => {
    window.location.href = '/agent/profile';
    evt.preventDefault();
});
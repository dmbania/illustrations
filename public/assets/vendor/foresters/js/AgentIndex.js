import { AgentProfileManager } from '/assets/vendor/foresters/js/AgentProfileManager.js';

const agentStorage = window.localStorage;
const APM = new AgentProfileManager(agentStorage);
const profile_form = document.querySelector('.agent-profile-form');

// APM.showAgents()

const agents = APM.getAgents();

console.log(agents);

// let agent2 = {
//     "agent-name" : "agent One",
//     "agent-title" : "Agent Suprem",
//     "agent-company" : "Foresters Financial",
//     "agent-state" : "NJ",
//     "agent-website" : ""
// }

// APM.saveAgent({
//     "agent-name" : "agent One",
//     "agent-title" : "Agent Suprem",
//     "agent-company" : "Foresters Financial",
//     "agent-state" : "NJ",
//     "agent-website" : ""
// });

// APM.saveAgent({
//     "agent-name" : "agent Three",
//     "agent-title" : "Agent Supreme",
//     "agent-company" : "Foresters Financial",
//     "agent-state" : "NJ",
//     "agent-website" : ""
// });

// APM.showAgents()

// APM.saveAgent({
//     "agent-name" : "Agent One",
//     "agent-title" : "Agent Supreme",
//     "agent-company" : "Foresters Financial",
//     "agent-state" : "NJ",
//     "agent-website" : ""
// });

// APM.saveAgent({
//     "agent-name" : "Agent Four",
//     "agent-title" : "Agent Lackey",
//     "agent-company" : "Foresters Financial",
//     "agent-state" : "NY",
//     "agent-website" : ""
// });

// APM.showAgents()

// APM.clear()
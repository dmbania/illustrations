import { AgentProfileManager } from '/assets/vendor/foresters/js/AgentProfileManager.js';

const agentStorage = window.localStorage;
const APM = new AgentProfileManager(agentStorage);

let newAgent = {
    name: 'David Bania',
    company: 'Company'
};

APM.addAgent(newAgent);
APM.clear();

APM.showAgents();
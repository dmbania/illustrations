import { AgentProfileManager } from '/assets/vendor/foresters/js/AgentProfileManager.js';
import { AgentProfileTable } from '/assets/vendor/foresters/js/AgentProfileTable.js';
import { SelectedAgent } from '/assets/vendor/foresters/js/SelectedAgent.js';

const agentStorage = window.localStorage;
const APM = new AgentProfileManager(agentStorage);
const agentsMap = APM.getAgents();
const agentTable = new AgentProfileTable(agentsMap, document.querySelector('.agent-table'));

const add_button = document.querySelector('.add-agent-button').addEventListener('click', evt => {
    window.location.href = '/agent/profile';
    evt.preventDefault();
});

// const RemoveAgentData = new Promise(
//     (resolve, reject) => {

//         try {

//         } catch (e) {

//         }

//         if (isMomHappy) {
//             const phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };

//             resolve(phone);

//         } else {
//             const reason = new Error('mom is not happy');
//             reject(reason);
//         }
//     }
// );


document.querySelector('.agent-table').addEventListener('click', evt => {
    if (evt.target.classList.contains("delete-agent")) {
        let agentId = evt.target.getAttribute("data-agent-uid");

        APM.removeAgent(agentId, evt => evt.target.parentNode.parentNode.remove());

        evt.preventDefault();
    }

    if (evt.target.classList.contains("select-agent")) {
        let agentId = evt.target.getAttribute("data-agent-uid");
        let selectedAgent = APM.setSelectedAgent(agentId);
        const agentDisplay = document.querySelector('.selected-agent-display');

        const sa = new SelectedAgent(APM, agentDisplay);
        sa.display();

        evt.preventDefault();
    }
});
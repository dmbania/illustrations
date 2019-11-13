export class SelectedAgent {
    constructor(APM, displayField) {
        this.APM = APM;
        this.displayField = displayField;
    }

    display() {
        let selectedAgent = this.APM.getSelectedAgent();

        let agentDisplay = `
            <br><a href="/agents" class="ffx-no-underline">Select an Agent</a>
        `;

        if (selectedAgent) {
            agentDisplay = `
                <br>
                <span class="selected-agent-label">Selected Agent:</span> <span class="selected-agent"><a href="/agent/profile/${selectedAgent['agent-uid']}">${selectedAgent['agent-name']}</a></span>
                | <a href="/agents/" class="ffx-no-underline">Change</a>

            `;
        }

        this.displayField.innerHTML = agentDisplay;
    }
}
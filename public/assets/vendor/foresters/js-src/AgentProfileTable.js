export class AgentProfileTable {
    constructor(agents, table) {
        this.agents = agents || null
        this.table = table || null

        this.getTableParts()
        this.showHideNoAgents()
        this.buildTable()
    }

    getTableParts() {
        this.noAgentMessage = this.table.querySelector('.no-agents')
        this.tableBody = this.table.querySelector('tbody')
    }

    showHideNoAgents() {
        if (this.agents.size > 0) {
            this.noAgentMessage.classList.add('ff-hidden')
        }
    }

    buildTable() {
        for (const [agentId, agent] of this.agents) {
            let oneAgent = this.agents[agentId]
            let newRow = document.createElement('tr')
            let agentInformation = `
                <td><a href="/agent/profile/${agentId}">${agent['agent-name']}</a></td>
                <td>${agent['agent-company'] || ''}</td>
                <td>${agent['agent-city'] || ''}</td>
                <td>${agent['agent-state'] || ''}</td>
            `
            newRow.innerHTML = agentInformation

            this.tableBody.appendChild(newRow)
        }
    }
}

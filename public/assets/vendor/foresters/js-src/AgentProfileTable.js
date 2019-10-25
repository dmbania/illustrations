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
        if (this.agents !== null) {
            this.noAgentMessage.classList.add('ff-hidden')
        }
    }

    buildTable() {
        Object.keys(this.agents).forEach(agentId => {
            let oneAgent = this.agents[agentId]
            let newRow = document.createElement('tr')
            let agentInformation = `
                <td><a href="/agent/profile/${agentId}">${oneAgent['agent-name']}</a></td>
                <td>${oneAgent['agent-company']}</td>
                <td>${oneAgent['agent-state']}</td>
            `
            newRow.innerHTML = agentInformation

            this.tableBody.appendChild(newRow)
        })
    }
}

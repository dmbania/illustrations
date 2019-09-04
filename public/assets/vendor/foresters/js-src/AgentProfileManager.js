export class AgentProfileManager {
    constructor(agentStorage) {
        this.agentStorage = agentStorage
        this.readAllAgents()
    }

    readAllAgents() {
        try {
            this.agents = JSON.parse(this.agentStorage.getItem('agents')) || []
        } catch (err) {
            console.error(err)
        }

    }

    showAgents() {
        console.log(this.agents)
    }

    addAgent(agent) {
        this.agents.push(agent)

        try {
            this.agentStorage.setItem('agents', JSON.stringify(this.agents))
        } catch (err) {
            console.error(err)
        }
    }

    clear() {
        this.agentStorage.clear()
        this.readAllAgents()
    }
}

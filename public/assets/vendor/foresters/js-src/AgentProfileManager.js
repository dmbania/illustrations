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

        console.log(agent['agent-uid'])

        let UID = Symbol()

        // this.agents.push(agent)
        this.agents[UID] + agent

        try {
            this.agentStorage.setItem('agents', JSON.stringify(this.agents))
        } catch (err) {
            console.error(err)
        }

        return UID
    }

    saveAgent(agent) {
        return this.addAgent(agent)
    }

    clear() {
        this.agentStorage.clear()
        this.readAllAgents()
    }
}

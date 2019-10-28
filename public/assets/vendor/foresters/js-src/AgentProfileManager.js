export class AgentProfileManager {
    constructor(agentStorage) {
        this.agentStorage = agentStorage
        this.readAllAgents()
    }

    readAllAgents() {
        try {
            this.agents = JSON.parse(this.agentStorage.getItem('agents')) || {}
        } catch (err) {
            console.error(err)
        }
    }

    getAgents() {
        return this.agents
    }

    getAgent(agentId) {
        if (Object.keys(this.agents).includes(agentId)) {
            return this.agents[agentId]
        }

        return undefined
    }

    showAgents() {
        console.log(this.agents)
    }

    addAgent(agent) {
        agent = this.addAgentId(agent)
        this.agents[agent['agent-uid']] = agent

        try {
            this.agentStorage.setItem('agents', JSON.stringify(this.agents))
        } catch (err) {
            console.error(err)
        }

        return agent['agent-uid']
    }

    addAgentId(agent) {
        agent['agent-uid'] = agent['agent-name'].toUpperCase().replace(/ /g, '-')
        return agent
    }

    saveAgent(agent) {
        return this.addAgent(agent)
    }

    clear() {
        this.agentStorage.clear()
        this.readAllAgents()
    }
}

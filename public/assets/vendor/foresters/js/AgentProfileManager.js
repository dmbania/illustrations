export class AgentProfileManager {
    constructor(agentStorage) {
        this.agentStorage = agentStorage;
        this.agentsMap = new Map();
        this.readAllAgents();
        this.getSelectedAgent();
    }

    readAllAgents() {
        let agentsObj = [];

        try {
            let agentsFromJson = JSON.parse(this.agentStorage.getItem('agents'));

            if (agentsFromJson) {
                agentsObj = agentsFromJson['agents'] || [];
            }

            for (var i = agentsObj.length - 1; i >= 0; i--) {
                this.agentsMap.set(agentsObj[i]["agent-uid"], agentsObj[i]);
            }
        } catch (err) {
            console.error(err);
        }
    }

    getAgents() {
        return this.agentsMap;
    }

    getAgent(agentId) {
        if (this.agentsMap.has(agentId)) {
            return this.agentsMap.get(agentId);
        }

        return {};
    }

    setSelectedAgent(agentId) {

        let selectedAgent = this.getAgent(agentId);

        try {
            this.agentStorage.setItem('selected-agent', JSON.stringify(selectedAgent));

            return selectedAgent;
        } catch (err) {
            console.error(err);
        }
    }

    getSelectedAgent() {
        let selectedAgent = null;

        try {
            selectedAgent = JSON.parse(this.agentStorage.getItem('selected-agent'));
        } catch (err) {
            console.error(err);
        }

        return selectedAgent;
    }

    showAgents() {
        console.log(this.agentsMap);
    }

    addAgent(agent) {
        let agentStore = {
            "agents": []
        };

        agent = this.addAgentId(agent);
        this.agentsMap.set(agent['agent-uid'], agent);

        try {
            this.saveAgents();
        } catch (err) {
            console.error(err);
        }

        return agent['agent-uid'];
    }

    saveAgents() {
        this.agentStorage.setItem('agents', JSON.stringify(this.mapToJson()));
    }

    mapToJson() {
        const json = {
            "agents": []
        };

        if (this.agentsMap.size) {
            for (const [agentId, agent] of this.agentsMap) {
                json.agents.push(agent);
            }
        }

        return json;
    }

    addAgentId(agent) {
        if (agent['agent-uid'].length == 0) {
            agent['agent-uid'] = `${agent['agent-name'].toUpperCase().replace(/ /g, '-')}-${new Date().getTime()}`;
        }

        return agent;
    }

    saveAgent(agent) {
        return this.addAgent(agent);
    }

    removeAgent(agentId, callback) {
        this.agentsMap.delete(agentId);
        this.saveAgents();
        callback();
    }

    clear() {
        this.agentStorage.clear();
        this.readAllAgents();
    }
}
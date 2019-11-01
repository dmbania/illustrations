export class AgentProfileManager {
    constructor(agentStorage) {
        this.agentStorage = agentStorage;
        this.agentsMap = new Map();
        this.readAllAgents();
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
            this.agentStorage.setItem('agents', JSON.stringify(this.mapToJson()));
        } catch (err) {
            console.error(err);
        }

        return agent['agent-uid'];
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

    clear() {
        this.agentStorage.clear();
        this.readAllAgents();
    }
}
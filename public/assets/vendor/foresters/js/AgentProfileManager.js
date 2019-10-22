'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AgentProfileManager = exports.AgentProfileManager = function () {
    function AgentProfileManager(agentStorage) {
        _classCallCheck(this, AgentProfileManager);

        this.agentStorage = agentStorage;
        this.readAllAgents();
    }

    _createClass(AgentProfileManager, [{
        key: 'readAllAgents',
        value: function readAllAgents() {
            try {
                this.agents = JSON.parse(this.agentStorage.getItem('agents')) || [];
            } catch (err) {
                console.error(err);
            }
        }
    }, {
        key: 'showAgents',
        value: function showAgents() {
            console.log(this.agents);
        }
    }, {
        key: 'addAgent',
        value: function addAgent(agent) {

            console.log(agent['agent-uid']);

            var UID = Symbol();

            // this.agents.push(agent)
            this.agents[UID] + agent;

            try {
                this.agentStorage.setItem('agents', JSON.stringify(this.agents));
            } catch (err) {
                console.error(err);
            }

            return UID;
        }
    }, {
        key: 'saveAgent',
        value: function saveAgent(agent) {
            return this.addAgent(agent);
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.agentStorage.clear();
            this.readAllAgents();
        }
    }]);

    return AgentProfileManager;
}();
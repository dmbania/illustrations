'use strict';

var _AgentProfile = require('/assets/vendor/foresters/js/AgentProfile.js');

var _AgentProfileManager = require('/assets/vendor/foresters/js/AgentProfileManager.js');

var agentStorage = window.localStorage;
var APM = new _AgentProfileManager.AgentProfileManager(agentStorage);
var profile_form = document.querySelector('.agent-profile-form');

APM.showAgents();

var agentProfile = new _AgentProfile.AgentProfile(APM, profile_form);
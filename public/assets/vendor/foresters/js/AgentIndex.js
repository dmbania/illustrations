'use strict';

var _AgentProfileManager = require('/assets/vendor/foresters/js/AgentProfileManager.js');

var agentStorage = window.localStorage;
var APM = new _AgentProfileManager.AgentProfileManager(agentStorage);
var profile_form = document.querySelector('.agent-profile-form');

var agentProfile = new AgentProfile(APM, profile_form);
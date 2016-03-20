var http        = require('https');
var AlexaSkill  = require('./AlexaSkill');

var APP_ID      = undefined; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]"
var deviceId    = undefined; //replace with "/6c00362363450003473433131"
var accessToken = undefined; //replace with Particle access token

var hostUrl     = "api.particle.io";
var deviceUrl   = "/v1/devices";

// Particle is a child of AlexaSkill
var Particle = function() {
  AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Particle.prototype = Object.create(AlexaSkill.prototype);
Particle.prototype.constructor = Particle;

  // Handle Events
Particle.prototype.eventHandlers.onSessionStarted = function(sessionStartedRequest, session) {
  console.log("Particle onSessionStarted requestId: " + sessionStartedRequest.requestId + "sessionId: " + session.sessionId);
};

Particle.prototype.eventHandlers.onLaunch = function(launchRequest, session, response) {
  console.log("Particle onLaunch requestId: " + launchRequest.requestId + "sessionId: " + session.sessionId);
  var welcomeMessage = "Welcome to Particle. You can ask me what is the voltage or max voltage. You can also tell me to turn on or off the light.";
  response.ask(welcomeMessage);
};

Particle.prototype.eventHandlers.onSessionEnded = function(sessionEndedRequest, session) {
  console.log("Particle onSessionEnded requestId: " + sessionEndedRequest.requestId + "sessionId: " + session.sessionId);
};

  // Handle Intents
Particle.prototype.intentHandlers = {
  GetVoltageIntent: function(intent, session, response) {
    var voltagePath = hostUrl + deviceUrl + "/voltage";

    console.log("Path: " + voltagePath);

  },

  GetMaximumVoltageIntent: function(intent, session, response) {
  },

  ToggleLightIntent: function(intent, session, response) {
  },

  "AMAZON.HelpIntent": function(intent, session, response) {
    response.ask("You can ask me what is the voltage or max voltage. You can also tell me to turn on or off the light");
  }
};

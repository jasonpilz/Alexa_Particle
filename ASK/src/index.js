var https       = require('https');
var AlexaSkill  = require('./AlexaSkill');

// var APP_ID      = undefined; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]"
// var deviceId    = undefined; //replace with "/6c00362363450003473433131"
// var accessToken = undefined; //replace with "4837487asdfadsfkasdfq88808adsf098080casegveuoiow748"

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
  console.log("Particle onSessionStarted requestId: " + sessionStartedRequest.requestId +
              "sessionId: " + session.sessionId);
};

Particle.prototype.eventHandlers.onLaunch = function(launchRequest, session, response) {
  console.log("Particle onLaunch requestId: " + launchRequest.requestId +
              "sessionId: " + session.sessionId);
  var welcomeMessage = "Welcome to Particle. You can ask me what is the voltage or max voltage" +
                       "You can also tell me to turn on or off the light.";
  response.ask(welcomeMessage);
};

Particle.prototype.eventHandlers.onSessionEnded = function(sessionEndedRequest, session) {
  console.log("Particle onSessionEnded requestId: " + sessionEndedRequest.requestId +
              "sessionId: " + session.sessionId);
};

  // Handle Intents
Particle.prototype.intentHandlers = {
  GetVoltageIntent: function(intent, session, response) {
    var voltagePath = deviceUrl + deviceId + "/voltage";

    callParticleApi(voltagePath, "GET", "", function(apiResponse) {
      var parsedResponse = JSON.parse(apiResponse);
      console.log("Voltage: " + parsedResponse.result);
      response.tellWithCard("Voltage is " + parsedResponse.result + " volts",
                            "Voltage",
                            parsedResponse.result + " Volts");
    });
  },

  GetMaximumVoltageIntent: function(intent, session, response) {
    var maxVoltagePath = deviceUrl + deviceId + "/maxvoltage";

    callParticleApi(maxVoltagePath, "GET", "", function(apiResponse) {
      var parsedResponse = JSON.parse(apiResponse);
      console.log("Max Voltage: " + parsedResponse.result);
      response.tellWithCard("Maximum voltage is " + parsedResponse.result + " volts",
                            "Maximum Voltage",
                            parsedResponse.result + " Volts");
    });
  },

  ToggleLightIntent: function(intent, session, response) {
    var onOffSlot = intent.slots.OnOff;
    var toggleLightPath = deviceUrl + deviceId + "/relay1";

    if (onOffSlot && onOffSlot.value) {
      var toggleCommand = "off";
      if (onOffSlot.value == "on") { toggleCommand = "on"; }

      callParticleApi(toggleLightPath, "POST", toggleCommand, function(apiResponse) {
        var parsedResponse = JSON.parse(apiResponse);
        var speechOutput = "";
        if (parsedResponse.return_value == 0) {
          speechOutput = "OK, turned off the light";
        } else if (parsedResponse.return_value == 1) {
          speechOutput = "OK, turned on the light";
        } else if (parsedResponse.return_value == -1) {
          speechOutput = "An error has occurred. Blame the developer";
        }
        response.tellWithCard(speechOutput,
                              "Light",
                              toggleCommand);
      });
    } else {
      handleNoSlotDialogRequest(intent, session, response);
    }
  },

  "AMAZON.HelpIntent": function(intent, session, response) {
    response.ask("You can ask me what is the voltage or max voltage" +
                 "You can also tell me to turn on or off the light");
  }
};

function handleNoSlotDialogRequest(intent, session, response) {
  // TODO - no slots were given, remind user how to call function
}

function callParticleApi(path, method, args, callback) {
  var options = {
    hostname: hostUrl,
    port: 443,
    path: path,
    method: method,
    headers: {
      "Authorization": "Bearer " + accessToken,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };

  var req = https.request(options, function(res) {
    console.log("statusCode: " + res.statusCode);
    console.log("headers: " + res.headers);

    var body = "";
    res.setEncoding('utf8');

    res.on('data', function(chunk) {
      body += chunk;
    });

    res.on('end', function() {
      callback(body);
    });
  });

  // write arguments to request body
  if (method == "POST") {
    req.write("args=" + args);
  }
  req.end();

  req.on('error', function(e) {
    console.error(e);
  });
}

// Create the handler that responds to the Alexa Request
exports.handler = function (event, context) {
    // Create an instance of the Particle skill.
    var particleSkill = new Particle();
    particleSkill.execute(event, context);
};

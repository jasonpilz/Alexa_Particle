# Alexa Particle [Code Complete, README WIP]

## Overview
An example of integrating control of a [Particle Photon](https://docs.particle.io/datasheets/photon-datasheet/) using voice through an Alexa Skill (Amazon Echo) built with [ASK](https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit).

There are 2 main parts to this project:

1. [Photon Firmware](https://github.com/jasonpilz/alexa_particle/blob/master/firmware/voltage%2Bled.ino) - Written in C and uploaded to the photon using Particle Dev or
Particle Build.

2. [Alexa Skill](https://github.com/jasonpilz/alexa_particle/tree/master/ASK/src) - Written in Node.js (version 0.10.4) and hosted as a function on [AWS Lambda](https://aws.amazon.com/lambda/).

## Interaction Model

Interaction with Alexa can be made with the [following commands](https://github.com/jasonpilz/alexa_particle/blob/master/ASK/speechAssets/SampleUtterances.txt):

**Help**
>"Alexa, ask particle for help"

**Get a Voltage reading**
>"Alexa, ask particle what is the voltage?"

**Get the Maximum Input Voltage**
>"Alexa, ask particle what is the maximum voltage?"

**Control a Light**
>"Alexa, tell particle to turn on the light"

>"Alexa, tell particle to turn off the light"

## Setup
#### AWS Lambda Setup



#### Alexa Skill Setup

1. Go to the [Amazon Developer Console](https://developer.amazon.com/edw/home.html#/), click 'Get Started' under Alexa Skills Kit, then click 'Add a New Skill'.<br>
2. Fill in `Particle` as 'Name', and `particle` as 'Invocation Name', this is the word you will say to activate the particle function, and the following spoken arguments will determine which command is triggered.<br>
3. Select the Lambda ARN for the skill Endpoint and paste the ARN copied from above. Click Next.
4. Copy the Intent Schema from the included [IntentSchema.json.](https://github.com/jasonpilz/alexa_particle/blob/master/ASK/speechAssets/IntentSchema.json)
5. Copy the Sample Utterances from the included [SampleUtterances.txt.](https://github.com/jasonpilz/alexa_particle/blob/master/ASK/speechAssets/SampleUtterances.txt) Click Next.
6. [optional] go back to the skill Information tab and copy the appId. Paste the appId into the `index.js` file for the variable `APP_ID`,
   then update the lambda source zip file with this change and upload to lambda again, this step makes sure the lambda function only serves request from authorized source.
7. You are now able to start testing your sample skill! You should be able to go to the [Echo webpage](http://echo.amazon.com/#skills) and see your skill enabled.
8. In order to test it, try to say some of the Sample Utterances from the Examples section below.
9. Your skill is now saved and once you are finished testing you can continue to publish your skill.

## Hardware

![Fritzing](./images/2-channel-relay.png)


## Amazon Resource Links
* [Getting Started](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/getting-started-guide)

* [Create a New Lambda Function](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-lambda-function)

* [Define the Voice Interface](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/defining-the-voice-interface)

# Alexa_Particle

## Overview
An example of integrating control of a particle photon using voice through an Alexa Skill (Amazon Echo) built with ASK.

There are 2 main parts to this project:

1) Photon Firmware
* Written in C and uploaded to the photon using Particle Dev or
Particle Build.

2) Alexa Skill
* Written in Node.js and hosted as a function on AWS Lambda.

## Interaction Model

Interaction with Alexa can be made with the following commands:

**Help**
>"Alexa, ask particle for help"

**Get a Voltage reading**
>"Alexa, ask particle what is the voltage?"

**Get the Maximum Input Voltage**
>"Alexa, ask particle what is the maximum voltage?"

**Control a Light**
>"Alexa, tell particle to turn on the light"

>"Alexa, tell particle to turn off the light"

## Hardware

## Setup
#### AWS Lambda Function Setup

##### [Getting Started](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/getting-started-guide)

##### [Create a New Lambda Function](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-lambda-function)

##### [Define the Voice Interface](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/defining-the-voice-interface)

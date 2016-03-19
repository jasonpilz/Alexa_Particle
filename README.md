# Alexa_Particle

### AWS Lambda Function Setup

#### [Create a New Lambda Function](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-lambda-function)

If you do not already have an account on AWS, go to Amazon Web Services and create an account.
Log in to the AWS Management Console and navigate to AWS Lambda.
Click the region drop-down in the upper-right corner of the console and select US East (N. Virginia). Currently, this is the only supported region for Lambda functions used with the Alexa Skills Kit.
If you have no Lambda functions yet, click Get Started Now. Otherwise, click Create a Lambda Function.
Select the alexa-skills-kit-color-expert blueprint.
The alexa-skills-kit-color-expert blueprint creates a new Lambda function with Node.js code that implements a simple Alexa skill.
The alexa-skills-kit-color-expert-python blueprint creates a new Lambda function with Python code that implements a simple Alexa skill.
Make sure that Alexa Skills Kit is selected for the Event source type and click Next.
Enter a Name and Description for the function.
Set the Role to a basic execution role. This defines the AWS resources the function can access.
On the Review page, make sure that the Event source is Alexa.
Click Create function to save your new function.
When you are ready to add your own code, edit the function and select the Code tab. From here, you can do any of the following:

Write your code directly in the code editor in the Lambda console (Node.js or Python).
Write your code offline and copy and paste it into the Lambda console editor (Node.js or Python).
Write your code offline and upload it to the Lambda function in a zip file (Node.js, Python, or Java)

#### [Define the Voice Interface](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/defining-the-voice-interface)

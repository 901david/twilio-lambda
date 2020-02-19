# twilio-lambda

## About

Twilio-Lambda is a result of toying with Twilio API and trying to come up with something useful to use in everyday coding life. What I decided to build was a very generic lambda function which could be used in the cloud to alert developers when something serious has occurred with a service and immediate attention is needed therefore an sms text would be a nice way to immediately alert someone there is an issue. This is where the project started. After I developed this, I thought it might be really nice to have some data around what kind of messages are being sent, and even potentially run some analytics to determine if I am receiving too many alarms etc.

## Technical Stack

I tried to use a wide range of tech stack and cloud technologies for this project. I am using serverless architecture for the API portion, using a public API Gateway to front two lambda functions. This is secured by an API key for access. The Lambda functions are written in Node and use the twilio-node npm package to interact with the Twilio API. Since we are dealing with sensitive account information, I am also anonymizing sensitive data as well. As for the Web portion, I took advantage of React with Typescript, Styled Components, and Ag-Grid for my table. I decided to deploy the web portion in a Docker container on Heroku. The container also contains an express webserver that acts as an intermediary between the API Gateway and the web application.

- React
- Typescript
- Ag-Grid
- Docker
- Heroku
- API Gateway
- Lambda
- Jenkins

## Deployment

I used Jenkins to orchestrate all deployment for this project. I wrote individual Jenkins jobs for deploying the Lambda functions, and a deployment pipeline for the docker container on Heroku.

## Future Development

This was more a fun experimenting with the API project, but I do think there are some really cool things you could do with this project. Like imagine when you get alerted via sms you could respond with different responses that would cause a particular action to occur on the resource that triggered the alert. There are lots of really interesting paths you can go down.

## Usage

If you wish to use the app yourself, you can download the [Docker image]()

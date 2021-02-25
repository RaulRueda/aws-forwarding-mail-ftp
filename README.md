# AWS Forwarding Mail 📧 to FTP 💾

## The Repository

A unique lambda function to handle all receive email trigger and send the attachments to a FTP server.

## Environments Availables

- [x] DEV
- [x] PROD

## Tech briefing

- Node ^12.x

## Environment Variables Local

Optional: Edit or create .vscode/settings.json in Visual Studio Code and add all the variables listed:

```json
{
  "terminal.integrated.env.windows": {
    "ENVIRONMENT": "",
    "FTP_USER": "",
    "FTP_PASS": "",
    "FTP_HOST": "",
    "FTP_PORT": ""
  }
}
```

#### Install Serverless

Open up a terminal and type `npm install -g serverless` to install Serverless Globally.

```shell
npm install -g serverless
```

## Config your credentials

Edit or use the script on package.json to set your owen credentials

```shell
npm run set-credentials
```

## Instructions

In terminal type:

```shell
npm install
```

### Serverless deploy

In terminal type `npm run deploy:dev`, for example:

```shell
npm run deploy-dev
```

"use strict";
//Models
const aws = require("./models/aws");
const ftp = require("./models/ftp");
const mailparser = require("./models/mailparser");

//Controllers
const email = require("./controllers/email");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const s3Object = event.Records[0].s3.object;

  console.log("Message S3 Key : ", s3Object.key);

  const s3_data = await aws.s3(s3Object.key);

  if (!s3_data) {
    console.log("ERROR [index.js] aws.s3() : Trying to retrieve the S3 bucket.");
  }

  let email_parsed = await mailparser.parse(s3_data.Body);

  if (!email_parsed) {
    console.log("ERROR [index.js] mailparser.parse() : Something happend reading the object(mail) from S3.");
  }

  let validateEmail = await email.validate(email_parsed);

  if (validateEmail) {
    console.log("ERROR [index.js] email.validate() : This email didn't pass our email rules.");
  }

  const attachments = Array.isArray(email_parsed.attachments) ? email_parsed.attachments : [];

  if (attachments.length < 1) {
    console.log("ERROR [index.js] Attachments : Mail doesn't have attachments.");
  }

  try {
    for (let i = 0; i < attachments.length; i++) {
      console.log("Sending attachmment : ", attachments[i].filename);

      let result = await ftp.sendFile(attachments[i].content, attachments[i].filename);

      if (!result) {
        //Log or notify a problem
        console.log(`ERROR [index.js] handler() : Trying to send attachment (${attachments[i].filename}) to FTP Server.`);
      }
    }
  } catch (err) {
    console.log("ERROR [index.js] try : " + err);
  }
};

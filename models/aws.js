//Libraries
const aws = require("aws-sdk");

//Configuration
const config = require("../config");

const s3 = async (key) => {
  const s3 = new aws.S3();

  const params = {
    Bucket: config.aws.s3.name,
    Key: key,
  };

  return await s3.getObject(params).promise((err, data) => {
    if (err) {
      console.log(`ERROR [aws.js] s3(${key}) : ${err}`);

      return null;
    }

    return data;
  });
};

module.exports = {
  s3,
};

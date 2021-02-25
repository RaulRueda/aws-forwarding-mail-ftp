const config = () => {
  return {
    environment: process.env.ENVIRONMENT || "dev",
    ftp: {
      path: "data/",
      auth: {
        host: process.env.FTP_HOST,
        user: process.env.FTP_USER,
        password: process.env.FTP_PASS,
        port: process.env.FTP_PORT,
      },
    },
    aws: {
      s3: {
        name: "aws-forwarding-s3",
      },
    },
    email: {
      from: ["youremail@company.com", "youremail_2@company.com"],
      subject: ["A Subject Example", "Another Subject Example"],
    },
  };
};

module.exports = config();

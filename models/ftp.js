//Libraries
const Client = require("ssh2-sftp-client");

//Config
const config = require("../config");

const sendFile = async (file, file_name) => {
  const client = new Client();

  return await client
    .connect(config.ftp.auth)
    .then(() => {
      return client.put(file, config.ftp.path + file_name);
    })
    .then(() => {
      client.end();

      return true;
    })
    .catch((err) => {
      console.log("ERROR [ftp.js] sendFile() : ", err.message);

      return false;
    });
};

module.exports = {
  sendFile,
};

const simpleParser = require("mailparser").simpleParser;

const parse = async (body) => {
  return await simpleParser(body).catch((err) => {
    console.log("ERROR [mailparser.js] parse() : ", err);

    return null;
  });
};

module.exports = {
  parse,
};

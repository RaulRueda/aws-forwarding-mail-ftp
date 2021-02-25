//Configuration
const config = require("../config");

const validate = async (email) => {
  logEmailData(email);

  let email_from = extractEmailFrom(email.from.text);

  if (!config.email.from.includes(email_from)) return false;
  if (!config.email.subject.includes(email.subject)) return false;

  return true;
};

function extractEmailFrom(email) {
  if (email) {
    let index_start = email.lastIndexOf("<") > -1 ? email.lastIndexOf("<") + 1 : 0;
    let index_end = email.lastIndexOf(">") > -1 ? email.lastIndexOf(">") : email.length;

    return email.substring(index_start, index_end);
  } else {
    return null;
  }
}

function logEmailData(email) {
  console.log("From:", email.from.text);
  console.log("Date:", email.date);
  console.log("Subject:", email.subject);
  console.log("Body:", email.text);
}

module.exports = {
  validate,
};

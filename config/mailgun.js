const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || '7f804cc2844a53801391370ca25d6e69-203ef6d0-c318ff03',
    public_key: process.env.MAILGUN_PUBLIC_KEY || 'pubkey-95224cf482f06e83203fbac2495a9798'
  });

module.exports = {

    sendMail: function sendMail(postData, callback) {
        mg.messages.create('mail.keyedin.app', {
            from: "KeyedIn <no-reply@keyedin.app>",
            to: [postData.to],
            subject: postData.subject,
            text: postData.text,
          })
          .then(msg => {
            console.log(msg)
            return callback(null, msg)
          }) // logs response data
          .catch(err => {
              console.log(err)
              return callback(err, null)
            }); // logs any error
    }

}
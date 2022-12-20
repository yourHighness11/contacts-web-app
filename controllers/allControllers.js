const Contact = require("../models/Contact");
const Message = require("../models/Message");
const twilio = require("twilio");
const { logger, logEvents } = require("../middleware/logger");
const mongoose = require("mongoose");

const accountSid = process.env.ACCOUNDSID; // Your Account SID from www.twilio.com/console
const authToken = process.env.AUTHTOKEN; // Your Auth Token from www.twilio.com/console
//twilio client
const client = new twilio(accountSid, authToken);

//home page
const getHome = (req, res) => {
  Promise.all([Contact.find({}), Message.find({})])
    .then((totalResult) => {
      const [results, messageResults] = totalResult;
      res.render("home", { results, messageResults });
    })
    .catch((err) => {
      console.log(err);
    });
};

//contact info page
const getId = (req, res) => {
  const urlId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(urlId)) return false;

  Contact.findById(urlId, function (err, results) {
    if (err) {
      console.log(err);
    } else {
      res.render("contactInfo", { results });
    }
  });
};

//for adding name and phone of user
const postAdd = (req, res) => {
  const phone = "+" + req.body.countryCode + req.body.userphone;
  const userContact = new Contact({
    fname: req.body.firstname,
    lname: req.body.lastname,
    phone: phone,
  });
  userContact.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
};

//for sending otp
const postId = (req, res) => {
  const urlId = req.params.id;

  //this line solves the objectId cast error
  if (!mongoose.Types.ObjectId.isValid(urlId)) return false;
  Contact.findById(urlId, function (err, results) {
    if (err) {
      console.log(err);
    } else {
      const userinput = req.body.userinput;
      const twilio_no = process.env.TWILIO_NO;
      //message details
      client.messages
        .create({
          body: userinput,
          to: results.phone, // You will recieve the OTP on this number
          from: twilio_no, // Change this to your twilio number
        })
        .then((message) => {
          const sentDate = message.dateCreated;
          const updatedDate = sentDate.toString();

          const userMessage = new Message({
            user: results.fname + " " + results.lname,
            time: updatedDate.slice(0, 24),
            otp: userinput.slice(16),
          });
          userMessage.save(function (err) {
            if (err) {
              console.log(err);
            } else {
              res.redirect("/");
            }
          });
        })
        .catch((err) => {
          logEvents(
            `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
            "twilioErrLog.log"
          );
          res.redirect("/");
        });
    }
  });
};

module.exports = { getHome, postAdd, postId, getId };

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

// allow us to easily process POST requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/guest-tracking', async (req, res) => {
  console.log(req.body);
  //res.send('Greetings, you added a new User!🎉👋');
  res.json({
    text: 'Created a new User! Greetings `user` !🎉👋✔️'
  });
});

app.post('/purchase', async (req, res) => {
  console.log(req.body);
  //res.send('Ok, we created an order for you. 🎉👍');
  res.json({
    text: 'Thanks for your purchase request! 🎉👍'
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Slack bot server has started on port ${PORT}`);
});

//Example will be 
// [guest email]
// [channel]

//Total Inputs in Form
// [guest email]
// [company/organization]
// [business justification]
// [workspace]
// [channel name(s)]
// [end date]
// [urgency]
// [guest name]
// [created by]
// [guest exists already?]
// [account creation date]
// [requester]
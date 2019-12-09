const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// allow us to easily process POST requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/guest-tracking', async (req, res) => {
  //console.log(req);
  console.log(req.body);
  res.send('Greetings, you added a new User!🎉👋');
});

app.post('/purchase', async (req, res) => {
  //console.log(req);
  console.log(req.body);
  res.send('Ok, we created an order for you. 🎉👍');
});

const PORT = 9647;
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

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// // allow us to easily process POST requests
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.post('/purchase', async (req, res) => {
//   //console.log(req);
//   console.log(req.body);
//   res.send('OK, request sent!');
// });

// const PORT = 9647;
// app.listen(PORT, () => {
//   console.log(`Slack bot server has started on port ${PORT}`);
// });
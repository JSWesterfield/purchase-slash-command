// created to grab sendDM function from requiring to grab the information from slack and 
// send a DM to a user with their UserID
const {sendDM} = require('./modules/slack');

sendDM('WRKHK320K', 'This is a test message for sendDM functionality. Oh Boy!'); //lync_Tester3 userId

// node purchase-slash-command.js
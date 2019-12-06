const express = require("express");

const app = express();
app.post("/purchase", async (req, res) => {
  console.log(req);
});

const PORT = 9647;
app.listen(PORT, () => {
  console.log(`Slack bot server has started on port ${PORT}`);
});

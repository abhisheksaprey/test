
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.type("text/plain").send("Are you good with me? do you understand this emojis :) ");
})

app.listen(process.env.PORT || 3000);


const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.type("text/plain").send("Hey! Chanchal? You love me?");
});

app.listen(process.env.PORT || 3000);

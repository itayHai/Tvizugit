const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8000;

app.get("/", (req, res) => res.send("Hello World!!"));

mongoose.connect("mongodb+srv://Tvizugit:4RmpQFkU4XX9PLgH@cluster0-2kbif.mongodb.net/Tvizugit?retryWrites=true&w=majority")
  .then(
    app.listen(port, () => console.log(`Server is running on port ${port}`))
  ).catch(err => console.log(err));

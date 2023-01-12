/***************************** */
const express = require("express");
const router = require("./routes/course");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());

mongoose
  .connect(
 "mongodb+srv://Dharmendra:dkyadav123@cluster0.kq9bu.mongodb.net/Courses",

    { useNewurlParser: true }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", router);

app.listen(process.env.PORT || 5000, function () {
  console.log("Example app listening on port:-" + (process.env.PORT || 5000));
});

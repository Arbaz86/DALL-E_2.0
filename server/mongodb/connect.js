const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => {
      console.log("> MongoDB successfully connected!");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = connectDB;

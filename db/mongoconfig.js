const mongoose = require("mongoose");
require('dotenv').config()

mongoose.connect(`mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true`);

mongoose.connection.on("open", () => {
  console.log("Database ok!");
});

mongoose.connection.on("error", () => {
  console.log("Database error");
});

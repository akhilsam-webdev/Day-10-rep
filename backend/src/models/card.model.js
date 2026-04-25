const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: String,
  address: String,
  bloodGroup: String,
  number: String,
});

const cardModel = mongoose.model("cards",cardSchema)

module.exports = cardModel
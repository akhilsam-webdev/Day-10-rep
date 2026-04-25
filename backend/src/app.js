const express = require("express");
const cardModel = require("./models/card.model");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("./public"));

app.post("/api/card", async (req, res) => {
  const { name, address, bloodGroup, number } = req.body;

  const card = await cardModel.create({
    name,
    address,
    bloodGroup,
    number,
  });

  res.status(201).json({
    msg: "created new card",
    card,
  });
});

app.get("/api/card", async (req, res) => {
  const cards = await cardModel.find();

  res.status(200).json({
    msg: "fetched all cards",
    cards,
  });
});

app.delete("/api/card/:id", async (req, res) => {
  const { id } = req.params;
  const deleteCard = await cardModel.findByIdAndDelete(id);
  res.status(200).json({
    msg: "deleted card suff",
    deleteCard,
  });
});
console.log(__dirname);
app.use("*name", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));
});

module.exports = app;

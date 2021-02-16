const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5virz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>{console.log("Succesfully connected to mongoDB")});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT, () => {console.log(`Server running on port ${process.env.PORT}`);
});

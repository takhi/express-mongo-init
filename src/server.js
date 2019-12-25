const express = require("express");

const dbConnect = require("./dbConnect");
const todoRoute = require("./routes/todoRoute");

const PORT = process.env.PORT || 9010;

dbConnect();

const app = express();

app.use(express.json());
app.use("/v1/api", todoRoute());

app.listen(PORT, function(){ console.log(`Server running on port ${PORT}`) });


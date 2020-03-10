const express = require("express");
const cors = require("cors");

const dbConnect = require("./dbConnect");
const todoRoute = require("./routes/todoRoute");
const pingRoute = require("./routes/pingRoute");

const PORT = process.env.PORT || 9000;

dbConnect();

const app = express();

app.use(cors({ maxAge: 86400 }));
app.use(express.json());
app.use("/v1/api", todoRoute());
app.use("/v1", pingRoute())

app.listen(PORT, function(){ console.log(`Server running on port ${PORT}`) });


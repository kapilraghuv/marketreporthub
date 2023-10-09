const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const port = 8001;

app.use(express.json());
app.use(cors());

app.use(router);

app.use("/uploads", express.static("./uploads"));
//app.get("/", (req, res) => {
//    res.send("Server start");
//});

app.listen(port, () => {
    console.log("server start");
})
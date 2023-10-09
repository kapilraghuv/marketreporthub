const mysql = require("mysql2");

const conn = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "marketreporthub",
    
    
});

conn.connect((err) => {
    if (err) throw err;
    console.log("Datbase done");
})

module.exports =  conn;    
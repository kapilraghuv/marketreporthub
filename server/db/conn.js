const mysql = require("mysql2");

const conn = mysql.createConnection({
    user: "root",
    host:process.env.NODE_APP_DATABASE_HOST,
    password: "",
    database: "marketreporthub",
    
    
});

conn.connect((err) => {
    if (err) throw err;
    console.log("Datbase done");
})

module.exports =  conn;    
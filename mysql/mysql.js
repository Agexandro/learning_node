var mysql = require("mysql");
var conn = require("./conn");

var con = mysql.createConnection(
    conn.conn()
);

con.connect((err) => {
    if (err) throw err;
    console.log("Connected");
});

var values = [["Alex", 24], ["Noe", 34]];
con.query("insert into test(name,age) values ?", [values], (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows);
})

con.query("select*from test", (err, data, fields) => {
    console.log(fields);
    console.log(data);
})
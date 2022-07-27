const mysql = require('mysql')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 8080;
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const pool = mysql.createPool({
    host: process.env.databasehost,
    user: process.env.userDB,
    port: process.env.portDB,
    password: process.env.passwordDB,
    database: process.env.sqlDB
})

app.get("/test", (req, res) => {
    pool.query(`SELECT * FROM products`, (err, results) => {
        if (err) {
            console.log(err)
        } else (res.send(results))
    })
})

app.get("/low", (req, res) => {
    pool.query(`SELECT * FROM products Order by price ASC`, (err, results) => {
        if (err) {
            console.log(err)
        } else (res.send(results))
    })
})

app.get("/high", (req, res) => {
    pool.query(`SELECT * FROM products Order by price DESC`, (err, results) => {
        if (err) {
            console.log(err)
        } else (res.send(results))
    })
})
app.listen(port, () => {
    console.log("running on port 8080")
}) 
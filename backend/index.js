const express = require('express');
const mysql = require("mysql");
const path = require("path");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


// Replace bodyParser with express.urlencoded
// app.use(express.urlencoded({ extended: true }))
app.use(express.json());



app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
);

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employee_details_form',
});


app.get("/", (req, res) => {
    res.json("Test works");
});

app.post('/test', (req, res) => {
    const submittedData = req.body;
    res.json({ message: 'Data received successfully', data: submittedData });
});

app.post('/submit', (req, res) => {
    const { employee_name, employee_id, department, dob, gender, designation, salary } = req.body;

    console.log("Submitted data:", { employee_name, employee_id, department, dob, gender, designation, salary });

    const sql = "INSERT INTO employee_details (employee_name, employee_id, department, dob, gender, designation, salary) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [employee_name, employee_id, department, dob, gender, designation, salary];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error storing form data in the database:", err);
            res.status(500).send("Error storing form data in the database");
        } else {
            const alertScript = "<script>alert('Form submitted');</script>";

            console.log("Form data stored in the database");

            res.status(200).send("Form data stored successfully");
        }
    });
});

app.listen(3001, () => {
    console.log("server started @ port 3001");

    db.connect((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('DB Connected');
        }
    })
})

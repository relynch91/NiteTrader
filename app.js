const app = express();
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const express = require("express");
const mongoose = require('mongoose');
const passport = require('passport');
const stocks = require("./routes/api/stocks");
const users = require("./routes/api/users");

// app.get("/", (req, res) => res.send("Hello World"));

mongoose
.connect(db, {
    useNewUrlParser: true
})
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.use(passport.initialize());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/stocks", stocks);

const port = process.env.PORT || 5000;

    
app.listen(port, () => console.log(`Server is running on port ${port}`));
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const stocks = require("./routes/api/stocks");
const users = require("./routes/api/users");
const path = require('path');


// app.get("/", (req, res) => res.send("Hello World"));
// jason's comment

mongoose
.connect(db, {
    useNewUrlParser: true
}).then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

app.use(passport.initialize());

require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/stocks", stocks);

const port = process.env.PORT || 5000;

    
app.listen(port, () => console.log(`Server is running on port ${port}`));
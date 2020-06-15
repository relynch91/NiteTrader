const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const endPointStocks = require("./routes/api/stock_api/quoteendpointstock");
const users = require("./routes/api/users");
const transactions = require("./routes/api/transactions");
const path = require('path');
const intraDayAPI = require('./routes/api/stock_api/intradayapi');

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
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use("/api/users", users);
app.use("/api/stock_api/quoteendpointstock", endPointStocks);
app.use("/api/transactions", transactions);
app.use("/api/stock_api/intradayapi", intraDayAPI);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
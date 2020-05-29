const express = require("express");
const router = express.Router();
const IntraDayAPI = require('../../../models/stock_api_requests/IntraDayAPI');

router.get("/test", (req, res) => res.json({
    msg: "This is the IntraDayAPI AlphAdvantage Stock route"
}));

module.exports = router;
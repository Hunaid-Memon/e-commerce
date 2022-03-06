const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');


router.get("/", (req, res) => {
    res.status(200).json({ msg: "Products APIs" });
});

module.exports = router;
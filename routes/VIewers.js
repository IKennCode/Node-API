const express = require('express');
const router = express.Router();

router.get('/Viewers', (req, res) => {
    res.send("List of Viewers")
});

module.exports = router


const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.send('this is the test data');
});

module.exports = router;

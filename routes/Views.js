const express = require('express');
const router = express.Router();

//#Router get for response(res)
// router.get('/Viewers', (req, res) => {
//     res.json({
//         "name" : "Kenneth",
//         "gender" : "Male",
//         "age" : "23"
//     })
// });


//#Router get for request(req)
router.get('/Viewers', (req, res) => {
    res.send(req.query)
});



router.post('/Insert', (req, res) => {
    res.json({
        "message" : "Success!",
        
    })
});




module.exports = router;


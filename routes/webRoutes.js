var express = require("express"),
    router = express.Router();

router.get('/', function(req, res) {
    //res.send("Hello Express Server");
    res.send("<h1>Home Page</h1>");
});
router.get('/about/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);
    res.send("<h1>About Us Page</h1>");
});

module.exports = router;
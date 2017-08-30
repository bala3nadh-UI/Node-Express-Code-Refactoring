var express = require("express"),
    router = express.Router();

var users = [{ id: 1, name: "Bala3nadh" }];
router.get("/user", function(req, res) {
    res.send(users);
});
router.post("/user", function(req, res) {
    // console.log(req);
    var obj = req.body;
    console.log(obj);
    users.push(obj);
    res.send("created");
});

module.exports = router;
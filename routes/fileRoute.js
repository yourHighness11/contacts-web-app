const express = require("express");
const router = express.Router();
const allControllers = require("../controllers/allControllers");

router.route("/")
.get(allControllers.getHome)
.post(allControllers.postAdd);

router.route("/:id")
    .get(allControllers.getId)
    .post(allControllers.postId);


module.exports = router;
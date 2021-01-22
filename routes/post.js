const express = require("express");
const validator = require('../validator/index')
const postController = require("../controllers/post");

const router = express.Router();

router.get("/", postController.getPosts);
router.post("/post",validator.createPostValidator, postController.creatPost);

module.exports = router;

const express = require("express");
const { createPostValidator } = require("../validator/index");
const { getPosts, creatPost } = require("../controllers/post");

const router = express.Router();

router.get("/",getPosts);
router.post("/post",createPostValidator,creatPost);

module.exports = router;

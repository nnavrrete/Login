const express = require('express');
const router = express.Router();
const { getUser, createUser, DeleteUserS, UpdateUser  } = require("../controllers/user")

router.get('/', getUser )
router.post()

module.exports = router;
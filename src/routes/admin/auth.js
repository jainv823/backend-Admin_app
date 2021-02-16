const express = require("express");
const { findUser, register } = require("../../controller/admin/auth");
const { validateRegisterRequest, isRequestValidated } = require("../../validate/auth");
const router = express.Router();

router.get("/admin", findUser);
router.post("/admin/register",validateRegisterRequest,isRequestValidated,register);

module.exports = router;

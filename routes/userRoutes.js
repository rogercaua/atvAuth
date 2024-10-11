const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware")
const router = express.Router();

router.post("/register", userController.register);

router.post("/login", userController.login);

//listar usuarios
router.get("/", authMiddleware, userController.listarUsuarios);

module.exports = router;

const express = require("express");
const avisoController = require("../controllers/avisoController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/avisouser", authMiddleware, avisoController.listarAvisosUsuario);

router.post("/create", authMiddleware, avisoController.criarAviso);
//listar todos os avisos sem filtro
router.get("/", avisoController.getAllAvisos);

module.exports = router;

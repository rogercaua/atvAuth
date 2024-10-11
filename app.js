const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");
const avisoRoutes = require("./routes/avisoRoutes");

const app = express();

DB = "mongodb+srv://rogercauarcb:1500@users.wq3oh.mongodb.net/atividadeAuth";

mongoose.connect(DB)
.then(() => console.log("Conectado ao Banco de Dados"))
.catch(err => console.log("Erro ao Conectar ao Banco de dados", err));

app.use(express.json());
app.use("/api", userRoutes)
app.use("/api", avisoRoutes)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server está rodando na porta ${PORT}`);
});
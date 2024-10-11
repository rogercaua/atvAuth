const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  nome: { type: String, required: true },
  senha: { type: String, required: true },
});

UserSchema.pre("save", async function(next) {
  if (this.isModified("senha")) {
    this.senha = await bcrypt.hash(this.senha, 10);
  }

  next();
});

module.exports = mongoose.model("User", UserSchema);

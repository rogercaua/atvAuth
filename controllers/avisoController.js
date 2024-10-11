const Aviso = require('../models/Aviso');
const User = require('../models/User');

exports.listarAvisosUsuario = async (req, res) => {
  try {
    const avisos = await Aviso.find({ autor: req.user.id })
      .populate('autor', 'nome email')
      .sort({ createdAt: -1 });

    if (avisos.length === 0) {
      return res.status(404).json({ message: 'Nenhum aviso encontrado para este usuário.' });
    }

    res.status(200).json(avisos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.criarAviso = async (req, res) => {
  const { nome, descricao } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const novoAviso = new Aviso({
      nome,
      descricao,
      autor: req.user.id
    });

    await novoAviso.save();

    res.status(201).json(novoAviso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getAllAvisos = async (req, res) => {
  try {
    const avisos = await Aviso.find()
      .populate('autor', 'nome email')
      .sort({ createdAt: -1 });

    if (avisos.length === 0) {
      return res.status(404).json({ message: 'Nenhum aviso encontrado.' });
    }

    res.status(200).json(avisos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

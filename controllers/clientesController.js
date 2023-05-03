const Cliente = require("../models/cliente");

exports.getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {}
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findByPk(id);
    res.json(cliente)
  } catch (error) {
    res.json({success:true, error:error.message})
  }
};

exports.addClient = async (req, res) => {
  const { cliente, email } = req.body;
  try {
    await Cliente.create({ cliente, email });
    res.json({ success: true });
  } catch (error) {
    res.json({ success: true, error: error.message });
  }
};

const router = require("express").Router();
const productos = require("./productos.routes");
const clientes = require("./clientes.routes");


router.use("/productos", productos);
router.use("/clientes", clientes);

router.get("/", (req, res) => {
    res.json("Hola mundo estoy en api ");
  });

module.exports = router;

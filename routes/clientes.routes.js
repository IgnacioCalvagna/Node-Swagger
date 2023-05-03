const router = require("express").Router();
const clientesController = require("../controllers/clientesController");


router.get("/", clientesController.getClientes);
router.get("/:id",clientesController.getById)
router.post("/", clientesController.addClient);


module.exports = router;

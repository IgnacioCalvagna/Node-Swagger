const router = require("express").Router();

let productos = [
  {id:1,producto:"Iphone14",price:2500,stock:420},{id:2,producto:"Iphone13",price:2000,stock:120},{id:3,producto:"IphoneXR",price:900,stock:620}
]


router.get("/", (req, res) => {
  
  res.json(productos);
});

module.exports = router;

const express = require("express");
require("dotenv").config()
const app = express();
const port = process.env.PORT || 3001;
const router = require("./routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./openapi.json");
const cors = require("cors");
const helmet = require("helmet");
const db = require("./db/db");
const models = require("./models");
app.use(cors({
  // Si aún no tenes deployado tu front en origin va la url local.
  // Una vez que se deploye el front acá va esa url que te entrega.
  origin: "http://localhost:3001",
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'], credentials: true,
}));
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.json("Hola mundo ");
});

app.use("/api", router);

db.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`Server on port 3001---> http://localhost:${port}`);
  });
});

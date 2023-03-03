const express = require("express");
const app = express();
const db = require("./models/db");
const routes = require("./controllers");
const PORT = 5432
const morgan = require("morgan");
const cors = require('cors')
const cookieParser = require("cookie-parser");



app.use(cors({
  // Si aún no tenes deployado tu front en origin va la url local.
  // Una vez que se deploye el front acá va esa url que te entrega.
  origin: "http://localhost:3001",
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'], credentials: true,
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());




// Express Routing
app.use("/api", routes);

app.get("/*", (req, res) => {
  res.sendFile('/home/julieta/Desktop/Plataforma5/26-checkpoint-TMDB/public/index.html');
});


app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(500).send(err);
});

db.sync({force: false}).then(() => {
  app.listen(PORT, () => console.log(`SERVER ON PORT: ${PORT}`));
});

module.exports = app;

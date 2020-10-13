const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors");

const apiRouter = require('./routes/api')

const { handleError } = require('./helpers/error')

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(cors({ origin: "https://challenge-slingr-io.herokuapp.com/" }));
app.use(express.json());

// Routes
app.use('/api', apiRouter);

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

// Errors
app.use((err, req, res, next) => {
  handleError(err, res);
});

// starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

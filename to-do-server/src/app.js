const express = require("express");
const app = express();

const index = require("./routes/index");
const tasks = require("./routes/toDoRoutes");


app.use(express.json());// converte o arquivo em json para manipulação
app.use("/", index);
app.use("/tarefas", tasks);

module.exports = app;



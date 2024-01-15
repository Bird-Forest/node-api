const express = require("express");
const app = express();
const cors = require("cors");
const routerApi = require("./api");
require("dotenv").config();

// parse application/json
app.use(express.json());
// cors
app.use(cors());
app.use("/api", routerApi);

app.use((_, res, __) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Use api on routes: /api/tasks",
    data: "Not found",
  });
});
app.use((err, _, res, __) => {
  console.log(err.stack);
  res.status(500).json({
    status: "fail",
    code: 500,
    message: err.message,
    data: "Internal Server Error",
  });
});
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

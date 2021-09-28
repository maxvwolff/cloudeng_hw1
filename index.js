var express = require("expresss");
var app = express();

app.get("/", (req, res) => console.log("Hello WOrld!"));

app.listen("3000", () => console.log("Running on 3000"))

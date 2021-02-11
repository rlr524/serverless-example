const express = require("express");
const app = express();
const http = require("http");

// base URL to test our API
app.get("/", async (req, res) => {
  res.send("<h3>Welcome to the Product API for Emiya Consulting</h3>");
});

app.set("port", process.env.PORT || 3000);

http.createServer(app).listen(app.get("port"), () => {
  console.log("The app is listening on port " + app.get("port"));
});

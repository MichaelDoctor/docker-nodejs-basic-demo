const app = require("express")();
const fetch = require("node-fetch");
const port = process.env.PORT || 8080;

app.get("/", (req, res) => res.json({ message: "Docker is easy 🐳" }));

app.get("/jokes", async (req, res) => {
  const response = await fetch("http://api.icndb.com/jokes/random");
  const json = await response.json();
  res.json(json);
});

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);
module.exports = app;

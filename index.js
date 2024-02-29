const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views",path.resolve("./views"));

app.use(express.json());

app.get("/", (req, res) => {
    res.render("homepage")
})

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
})
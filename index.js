const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 8000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./uploads")
    },
      filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`)
      },
    })

const upload = multer({ storage})    

app.set("view engine", "ejs");
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("homepage")
})

app.post("/upload", upload.single("profileImage"), (req,res)=>{
    console.log(req.body);
    console.log(req.file);

    return res.redirect("/");
})

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
})
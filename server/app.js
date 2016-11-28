var express = require("express");
var multer = require("multer");
var app = express();

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

app.use('/', express.static("client"));

app.post("/upload", upload.single("data"), function (req, res) {
    if (req.file) {
        res.status(200).json({
        filename: req.file.originalname,
        size: req.file.size,
        type: req.file.mimetype
        });
    } 
    else {
        res.status(500).json({ error: "File not found" });
    }
});

module.exports = app;
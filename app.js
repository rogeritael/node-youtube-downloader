const express = require('express');
const ytdl = require("ytdl-core");
const app = express();

app.get("/", function(req, res){
    const { url } = req.query;

    res.header("Content-Disposition", 'attachment; filename="video.mp4"');

    //download
    return ytdl(url).pipe(res);
})

app.listen(5000)
import express from "express";

const app = express();

app.get('/',(req,res) => {
    res.send("Hey i m Saurav how are you brother - > : ) !!!!!");
});

app.listen(3000, () => {
    console.log(`i m listening on port ${3000}`);
})
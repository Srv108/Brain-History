import express from "express";

const app = express();

app.get('/',(req,res) => {
    res.send("Hyy My name is Saurabh Bharti -> :) Hey ");
});

app.listen(3000, () => {
    console.log(`i m listening on port ${3000}`);
})
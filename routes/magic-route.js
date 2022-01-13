const express = require("express");
const magicReponses = require("../data/magic-responses");
const magicRouter = express.Router();

magicRouter.get("/",(req,res)=>{
    res.status(200).json({message: "in magic route"})
})

magicRouter.get("/:question",(req,res)=>{
    // res.status(200).json({message: "in magic route"})
    let question = req.params.question;
    let idx = Math.floor(Math.random()*magicReponses.length);
    res.status(200).json({
        quesion: question,
        answer: magicReponses[idx]
    })
})


module.exports = magicRouter;
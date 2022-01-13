const express = require("express");
const beerRouter = express.Router();

let numOfBeers = 99;
beerRouter.get("/", (req, res) => {
    // res.status(200).send("<a href='localhost:3600/98'>take one down, pass it around</a>")
    if (numOfBeers > 0) {
        res.status(200).json({
            message: `Take one down, pass it around, ${--numOfBeers} bottles of beer on the wall`
        })
    }
    else {
      res.status(200).json({
        message: `No beers left!`
    })      
    }
})

module.exports = beerRouter;
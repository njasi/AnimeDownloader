const express = require("express");
const router = express.Router();
const {Gogoanime} = require("./../downloaders/sites");

router.get("/:site/search", async (req,res,next)=>{
  console.log(req.query.term)
  try{
    if(req.query.term){
      res.json(await Gogoanime.search(req.query.term))
    }
    console.log("DONE")
  }catch(err){
    console.log("ERR")
    next(err)
  }
});

router.get("/:slug",(req,res,next)=>{
  try{
    res.send(req.params.slug)
  }catch(error){next(error)}
});

module.exports = router

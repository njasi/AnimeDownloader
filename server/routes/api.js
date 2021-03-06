const express = require("express");
const router = express.Router();
const {Gogoanime} = require("./../downloaders/sites");

router.use("/about",require("./about"));

router.get("/:site/search", async (req,res,next)=>{
  try{
    if(req.query.term){
      res.json(await Gogoanime.search(req.query.term))
    }
  }catch(err){
    next(err)
  }
});

router.get("/:slug",(req,res,next)=>{
  try{
    res.send(req.params.slug)
  }catch(error){next(error)}
});

module.exports = router

const express = require("express");
const path = require("path")
const layout = require("../views/layout")
const router = express.Router();

router.use(express.static(path.join(__dirname, "../../public")));

router.get("/",(req,res,next)=>{
  try{
    res.send(layout('','/react/seriesList.js',true))
  }catch(err){next(err)}
});

router.get("/:slug",(req,res,next)=>{
  try{
    res.send(req.params.slug)
  }catch(error){next(error)}
});

module.exports = router

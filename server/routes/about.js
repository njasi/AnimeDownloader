const express = require("express");
const router = express.Router();

const fs = require('fs');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

router.get("/", async (req,res,next)=>{
  try{
    const data = fs.readFileSync('README.md', 'utf8');
    res.send(md.render(data))
  }catch(err){
    next(err)
  }
});

module.exports = router
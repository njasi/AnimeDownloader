const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
// const userData = require("./user_data/series_data.json")

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public"))); // give access to files
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./routes/api"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
}); // Send index.html for any other requests

// app.use("/search",require("./routes/search"));
// app.use("/about",require("./routes/about"));

// app.get("/",(req,res,next)=>{
//   try{
//     // throw new Error("OOF")
//     res.send(layout("oof"))
//   }catch(error){
//     next(error);
//   }
// })

app.use((req, res, next) => {
  try {
    res.status(404).send(error("404: Page Not Found", {}));
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(500).send(error("Internal Server Error", err));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started at https//:localhost:${PORT}`);
});

const launch = async () => {
  const puppeteer = require("puppeteer");
  const browser = await puppeteer.launch({ headless: false });
  const pages = await browser.pages();
  pages[0].goto("http://localhost:3000/");
};
// launch();

// testing stuff

// const Jikan = require('jikan-node');
// const mal = new Jikan();

// mal.findUser("njasi", "animelist", "watching")
//   .then(info => console.log(info))
//   .catch(err => console.log(err));

// const gogoanime = require("./downloaders/sites/gogoanime")
// const test = async ()=>{
//   console.log("waiting")
//   // console.log(await gogoanime.search("Yuu☆Yuu☆Hakusho"))
//   console.log(await gogoanime.getSeriesEpisodes("https://www9.gogoanime.io/category/yu-yu-hakusho","test"))
//   console.log("done")
// }
// test();
// // require("./downloaders/test")

import { Router } from "express";

const index: Router = Router();

/* GET home page. */
index.get("/", function(req, res, next) {
  res.json ({ title: "Visual Studio Code!" });
});

export default index;

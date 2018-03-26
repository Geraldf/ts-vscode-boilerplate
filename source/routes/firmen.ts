import { Router } from "express";
import Firma from "../models/firmen";


const firmen: Router = Router();

/* GET users listing. */
firmen.get("/list", function(req, res, next) {

  Firma.all().then(
    (u) => {
      res.json(u);
    },
  )
  .catch((err) => {
    next(err);
  });

});


/* GET users listing. */
firmen.post("/insert", function(req, res, next) {
  let data: any;
  data = req.body;
  console.log(data);
  Firma.create(data);
  res.json(data);
  // Firma.all().then(
  //   (u) => {
  //     res.json(u);
  //   },
  // //)
  // .catch((err) => {
  //   next(err);
  // });

});
export default firmen;

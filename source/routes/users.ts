import { Router } from "express";
import User from "../models/user";


const users: Router = Router();

/* GET users listing. */
users.get("/list", function(req, res, next) {

  User.all().then(
    (u) => {
      res.json(JSON.stringify(u));
    },
  );

});


export default users;

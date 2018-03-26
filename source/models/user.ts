import { sequelize } from "./index";
import * as Sequelize from "sequelize";

const User = sequelize.define("user", {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE,
    gender: Sequelize.STRING,
  });

  export default User;

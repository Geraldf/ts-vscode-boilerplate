import { sequelize } from "./index";
import * as Sequelize from "sequelize";

const Firma = sequelize.define("firmen", {
    name: Sequelize.STRING,
    strasse: Sequelize.STRING,
    plz: Sequelize.INTEGER,
    ort: Sequelize.STRING,
    is_zentral : Sequelize.BOOLEAN,
    zentral: Sequelize.INTEGER,
  });

  export default Firma;

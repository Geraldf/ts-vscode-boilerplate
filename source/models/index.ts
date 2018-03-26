import * as Sequelize from "sequelize";



export const sequelize = new Sequelize("rest", "rest", "rest", {
    // disable logging; default: console.log
    logging: false,
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false,
  });


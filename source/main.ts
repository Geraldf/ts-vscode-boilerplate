import app from "./app";
// import * as $ from "jquery";
// import Greeter from "./entities/greeter";
import {sequelize} from "./models";
sequelize.sync({
        alter: true,
    })
    .then(() => {
        app.listen(3000, () => console.log("Example app listening on port 3000!"));
    } )
    .catch(err => {
        throw new Error(err);
    });

// let greeter = new Greeter("world!");
// let msg = greeter.greet();
// $("body").html(`<h1>${msg}</h1>`);
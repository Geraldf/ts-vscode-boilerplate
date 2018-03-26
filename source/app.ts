
import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import * as path from "path";
import index from "./routes/index";
import users from "./routes/users";
import cookieParser = require("cookie-parser"); // this module doesn't use the ES6 default export yet


import firmen from "./routes/firmen";
// import Firma from "./models/firmen";


const app: express.Express = express();

// view engine setup
// app.set("views", path.join(__dirname, 'views'));

// app.set("view engine", "jade");

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/users", users);
app.use("/firmen", firmen);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new ExpressError("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {

  app.use((error: any, req: any, res: any, next: any) => {
    res.status(error.status || 500);
    res.json({
      message: error.message,
      error: error,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((error: any, req: any, res: any, next: any): any => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
    error: error,
  });
  return null;
});



export default app;

import express from "express"; //backend framework
/**
 * Config view engine for app
 */
let configViewEngine = (app)=> {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");  //install the view engine
    app.set("views","./src/views");
};

module.exports = configViewEngine;

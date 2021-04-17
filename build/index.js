"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoute_1 = require("./routes/loginRoute");
var app = express_1.default();
app.use(loginRoute_1.router);
app.listen(4000, function () {
    console.log("Listening from port 4000");
});

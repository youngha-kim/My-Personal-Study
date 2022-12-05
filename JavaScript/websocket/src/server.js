import express from "express";
import path from "path";
// import http from "http";
// import { Server } from "socket.io";

const app = express();
const __dirname = path.join(path.resolve(), "/src");

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

// html파일에  script를 선언할 시,
// static 작업을 해주어야 함.
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log("Listening on http://localhost:3000");
app.listen(3000, handleListen);

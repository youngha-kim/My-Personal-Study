import express from "express";
import path from "path";
import http from "http";
import { Server } from "socket.io";

// const path  = require("path")
// const express = require("express")
const app = express();
const __dirname = path.join(path.resolve(), "/src");

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const httpServer = http.createServer(app);
// socket io는 websocket의 부가기능이 아니다.
// 때문에 socketio를 브라우저에 설치해야 함.
const io = new Server(httpServer);

io.on("connection", (socket) => {
  socket.on("join_room", (roomName) => {
    socket.join(roomName);
    socket.to(roomName).emit("welcome");
  });
  socket.on("offer", (offer, roomName) => {
    socket.to(roomName).emit("offer", offer);
  });
  socket.on("answer", (answer, roomName) => {
    socket.to(roomName).emit("answer", answer)
  })
  // 브라우저에 candidate정보를 다시 보내주어야 함.
  socket.on("ice", (ice, roomName) => {
    socket.to(roomName).emit("ice", ice)
  })
});

const handleListen = () => console.log("Listening on http://localhost:3000");
httpServer.listen(3000, handleListen);

import express from "express";
import WebSocket from "ws";
import path from "path";
import http from "http";
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

//express를 기반으로 서버를 만든다.(필수아님)
//서버를 보이게 노출시키고 그다음 http서버 위에 ws서버를 만들기 위함.
const server = http.createServer(app);

// 이제 http 서버를 기반으로 ws서버를 만든다.
const wss = new WebSocket.Server({ server });

// 메시지를 다른 모든 socket에 전달할 수 있다.
const sockets = [];

// 여기서 socket은 연결된 브라우저를 뜻한다.
// on method는 backend에 연결된 사람의 정보를 제공해준다.
wss.on("connection", (socket) => {
  sockets.push(socket);
  socket["nickname"] = "Anonymous";
  console.log("connected to Browser ");
  // 연결이 완료되면 프론트에 메세지를 보냄
  socket.on("close", () => console.log("disconnected from the browser"));
  socket.send("hello");
  socket.on("message", (message) => {
    const buf1 = Buffer.from([...message]);
    const parsed = JSON.parse(buf1.toString());

    switch (parsed.type) {
      case "new_message":
        sockets.forEach((aSocket) =>
          aSocket.send(`${socket.nickname}: ${parsed.payload}`)
        );
        break;
      case "nickname":
        console.log(parsed.payload);
        socket["nickname"] = parsed.payload;
        break;
    }
  });
  console.log(sockets);
});

// 이제 http ,ws 서버는 다 같은 port를 공유하게된다.
server.listen(3000, handleListen);
// app.listen(3000, handleListen);

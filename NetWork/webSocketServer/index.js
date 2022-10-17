const webSocketsServerPort = 8000;
const webSocketServer = require("websocket").server;
// const { Console } = require("console");
const http = require("http");

// spinning the http server and the websocket server.
const server = http.createServer();

//websokcet서버는 여기에 8000을 입력하기위해 수신대기
server.listen(webSocketsServerPort);
console.log("listening on port 8000");

// http서버의 인스턴스를 사용하여 WebSocket 서버를 생성
const wsServer = new webSocketServer({
  httpServer: server,
});

// 클라이언트 객체 생성
const clients = {};

// this code genetates unique userid for everyuser.
const getUniqueID = () => {
  const s4 = () =>
    Math.floor(1 + Math.random() * 0x10000)
      .toString(16)
      .substring(1);
  return s4() + s4() + "-" + s4();
};

//서버에 요청 받으면 발생 
wsServer.on("requset", function (request) {
  var userID = getUniqueID();
  console.log(
    new Date() + "Recived a new connection for, origin" + request.origin + "."
  );
  

  // you can rewrite this part of the code to accept only the requests from alllwed origin
  const connection = request.accept(null, requset.origin);
  clients[userID] = connection;
  console.log(
    "connected: " + userID + "IN" + Object.getOwnPropertyNames(clients)
  );

  connection.on('message', function(message){
    if(message.type === 'utf8'){
        console.log('Recieved Message: ', message.utf8Data);

        for(key in clients){
          clients[key].sendUTF(message.utf8Data);
          console.log('sent Message to:' , clients[key]);
        }

    }
  })

});

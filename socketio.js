const io = require("socket.io-client");

const socket = io("http://localhost:5001");

socket.emit("session", "");

socket.on("session", (data) => {
    console.log(data);
    socket.emit("message", {
        text: "有多少货物", 
        session_id: data.session_id, 
        lang: 'zh_CN' // Options: en_HK, zh_HK
    })
});

socket.on("message", (data) => {
    console.log(JSON.stringify(data));
})
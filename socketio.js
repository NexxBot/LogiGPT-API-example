const io = require("socket.io-client");

// const host = "localhost";
const host = "geppetto.top";
const LOGIKEY = "<OUR_LOGI_KEY>";

const socket = io("http://" + host + ":5001", {
    auth: {
      LOGI_KEY: LOGIKEY
    }
  });

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
    if (data.status == 2 && data.has_more_to_visualize) {
      socket.emit("visualization", {message_id: data.id});
    }
})
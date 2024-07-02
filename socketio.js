const io = require("socket.io-client");

// const host = "localhost";
// const host = "geppetto.top";
// const LOGIKEY = "<OUR_LOGI_KEY>";
const host = "127.0.0.1";
const LOGIKEY = "LLLLOGI";

const socket = io("http://" + host + ":5002", {
    auth: {
      LOGI_KEY: LOGIKEY
    }
  });

socket.emit("/v0_2/session", "");

socket.on("session", (data) => {
    console.log(data);
    // socket.emit("/v0_2/message", {
    //     text: "How many devices of each device type?", 
    //     session_id: data.session_id, 
    //     lang: 'zh_CN' // Options: en_HK, zh_HK
    // })
    socket.emit("/v0_2/message", {
      text: "How many warehouses?", 
      session_id: data.session_id, 
      lang: 'zh_CN' // Options: en_HK, zh_HK
  })
});

socket.on("message", (data) => {
    console.log(JSON.stringify(data));
    if (data.status == 2 && data.has_more_to_visualize) {
        socket.emit("/v0_2/visualization", {message_id: data.id});
    }
    if (data.status == 2) {
        socket.emit("/v0_2/prediction", {
            session_id: data.session_id, 
            lang: "zh_HK" 
    });
  }
})

socket.on("prediction", (data) => {
  console.log(JSON.stringify(data));
});
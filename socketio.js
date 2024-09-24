const io = require("socket.io-client");

// const host = "localhost";
// const host = "geppetto.top";
// const LOGIKEY = "<OUR_LOGI_KEY>";
const host = "127.0.0.1";
const LOGIKEY = "LLLLOGI";

const socket = io("http://" + host + ":5001", {
    auth: {
      LOGI_KEY: LOGIKEY
    }
  });

socket.emit("/v0_2/session", "");

socket.on("session", (data) => {
    console.log(data);
    socket.emit("/v0_2/message", {
        // text: "订单中总数最多的5个sku的code以及他们的mastercode是什么，总数分别有多少个", 
        text: '有多少个设备？每种设备多少个?',
        session_id: data.session_id, 
        lang: 'zh_CN' // Options: en_HK, zh_HK
    })
    // socket.emit("/v0_2/message", {
    //   text: "How many warehouses?", 
    //   session_id: data.session_id, 
    //   lang: 'en_HK' // Options: en_HK, zh_HK
  // })
});

socket.on("message", (data) => {
    console.log(JSON.stringify(data));
    // if (data.status == 2 && data.has_more_to_visualize) {
    //     socket.emit("/v0_2/visualization", {message_id: data.id});
    // }
    if (data.status == 2) {
        socket.emit("/v0_2/prediction", {
            session_id: data.session_id, 
            lang: "en_HK" 
    });
  }
})

socket.on("prediction", (data) => {
  console.log(JSON.stringify(data));
});
const axios = require('axios').default;

// const host = "localhost";
const host = "geppetto.top";
const LOGIKEY = "<OUR_LOGI_KEY>";

axios.post("http://" + host + ":5001/message/session", {}, {
    headers: {
        Cookie: 'LOGI_KEY=' + LOGIKEY,
    },
}).then(async function (response) {
    console.log(response.data);
    message_response = await axios.post("http://" + host + ":5001/message/", {
        text: "有多少货物", 
        session_id: response.data.session_id,
        lang: 'zh_CN' // Options: en_HK, zh_HK
    }, {
        responseType: 'stream',
        headers: {
            Cookie: 'LOGI_KEY=' + LOGIKEY,
        }
    })

    const stream = message_response.data;

    stream.on('data', data => {
        console.log(data.toString());
    });

    stream.on('end', () => {
        console.log("Stream done.");
    });
    
}).catch(function (error) {
    console.log(error);
});
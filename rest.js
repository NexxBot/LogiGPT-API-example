const axios = require('axios').default;

// const host = "localhost";
const host = "127.0.0.1";
const LOGIKEY = "LLLLOGI";

axios.post("http://" + host + ":5001/message/session", {}, {
    headers: {
        Cookie: 'LOGI_KEY=' + LOGIKEY,
    },
}).then(async function (response) {
    console.log(JSON.stringify(response.data));
    message_response = await axios.post("http://" + host + ":5001/message/", {
        text: "How many devices of each device type?",
        session_id: response.data.data.session_id,
        lang: 'en_HK' // Options: en_HK, zh_HK
    }, {
        responseType: 'stream',
        headers: {
            Cookie: 'LOGI_KEY=' + LOGIKEY,
        }
    })

    const stream = message_response.data;
    var message_id = null;

    stream.on('data', data => {
        var message = data.toString();
        console.log(message);
        message = JSON.parse(message);
        message_id = message.data.id;
        // 可以以消息状态变为2作为结束的标识，也可以以流结束作为结束标识
        // 如果有更多可视化图表则可视化
        if (message.data.status == 2 && message.data.has_more_to_visualize == true) {
            axios.post("http://" + host + ":5001/message/visualization", {
                message_id: message.data.id,
            }, {
                headers: {
                    Cookie: 'LOGI_KEY=' + LOGIKEY,
                }
            }).then((response) => {
                console.log(JSON.stringify(response.data));
                axios.post("http://" + host + ":5001/message/prediction", {
                    message_id: message.data.id,
                }, {
                    headers: {
                        Cookie: 'LOGI_KEY=' + LOGIKEY,
                    }
                }).then((response) => {
                    console.log(JSON.stringify(response.data));
                    
                })
            })
        }

    });

    stream.on('end', () => {
        console.log("Stream done.");
        // 可以以消息状态变为2作为结束的标识，也可以以流结束作为结束标识
        // axios.post("http://" + host + ":5001/message/visualization", {
        //     message_id: message_id,
        // }, {
        //     headers: {
        //         Cookie: 'LOGI_KEY=' + LOGIKEY,
        //     }
        // }).then((response) => {
        //     console.log(JSON.stringify(response.data));
        // });
    });

}).catch(function (error) {
    console.log(error);
});
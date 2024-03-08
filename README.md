# LogiGPT-API-example
Examples of using LogiGPT-API.
# Usage
```
npm install

// for RESTful API
node rest.js


// for Socket.IO API
node socketio.js

// Sample output:
// {"code":200,"data":{"session_id":"036633ae-cdf1-46bb-82b1-e64dc55f5a75"},"message":"success"}
// {"code": 200, "message": "success", "data": {"id": "65ea71f6c1e2a0960e0ab089", "session_id": "036633ae-cdf1-46bb-82b1-e64dc55f5a75", "time": 1709834614, "lang": "zh_CN", "hint": "Let me think...", "has_more_to_visualize": false}}
// {"code": 200, "message": "success", "data": {"session_id": "036633ae-cdf1-46bb-82b1-e64dc55f5a75", "time": 1709834614, "lang": "zh_CN", "status": 1, "id": "65ea71f6c1e2a0960e0ab089", "hint": "Let me think...", "has_more_to_visualize": true, "data": [{"result": {"count": {"shuttle": 3, "lift": 3}}}]}}
// {"code": 200, "message": "success", "data": {"session_id": "036633ae-cdf1-46bb-82b1-e64dc55f5a75", "time": 1709834614, "lang": "zh_CN", "status": 2, "text": "shuttle 类型的 device 有 3 台，lift 类型的 device 也有 3 台。", "id": "65ea71f6c1e2a0960e0ab089", "hint": "Completed.", "has_more_to_visualize": true, "data": [{"result": {"count": {"shuttle": 3, "lift": 3}}}]}}
Stream done.
// {"code":200,"data":{"data":[{"figure":"http://s9uue39zu.hn-bkt.clouddn.com/logi-gpt/plt-cache/65ea71f6c1e2a0960e0ab089-1.png","result":{"count":{"lift":3,"shuttle":3}}}],"has_more_to_visualize":false,"hint":"Completed.","id":"65ea71f6c1e2a0960e0ab089","lang":"zh_CN","session_id":"036633ae-cdf1-46bb-82b1-e64dc55f5a75","status":2,"text":"shuttle 类型的 device 有 3 台，lift 类型的 device 也有 3 台。","time":1709834614},"message":"success"}

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
{"code":200,"data":{"session_id":"fb34ac3f-71c4-4db8-97c6-be1dadfef123"},"message":"success"}
{"code": 200, "message": "success", "data": {"id": "666adcfa2761f4cee57f63e8", "session_id": "fb34ac3f-71c4-4db8-97c6-be1dadfef123", "time": 1718279418, "lang": "zh_CN", "hint": "让我想想看……", "has_more_to_visualize": false}}
{"code": 200, "message": "success", "data": {"session_id": "fb34ac3f-71c4-4db8-97c6-be1dadfef123", "time": 1718279418, "lang": "zh_CN", "status": 1, "id": "666adcfa2761f4cee57f63e8", "hint": "让我想想看……", "has_more_to_visualize": true, "data": [{"result": {"total": {"0": 16415, "1": 16339, "2": 8078, "3": 8078, "4": 8078}, "skuCode": {"0": "07585-04", "1": "A-37", "2": "PASS100ML", "3": "STRA100ML", "4": "THAI100ML"}, "masterCode": {"0": "YYGPT", "1": "YYGPT", "2": "YYGPT", "3": "YYGPT", "4": "YYGPT"}}}]}}
{"code": 200, "message": "success", "data": {"session_id": "fb34ac3f-71c4-4db8-97c6-be1dadfef123", "time": 1718279418, "lang": "zh_CN", "status": 2, "text": "订单中总数最多的5个sku的code及其mastercode分别是：'07585-04'（总数16415个，masterCode为'YYGPT'），'A-37'（总数16339个，masterCode为'YYGPT'），'PASS100ML'（总数8078个，masterCode为'YYGPT'），'STRA100ML'（总数8078个，masterCode为'YYGPT'），'THAI100ML'（总数8078个，masterCode为'YYGPT'）。", "id": "666adcfa2761f4cee57f63e8", "hint": "已完成。", "has_more_to_visualize": true, "data": [{"result": {"total": {"0": 16415, "1": 16339, "2": 8078, "3": 8078, "4": 8078}, "skuCode": {"0": "07585-04", "1": "A-37", "2": "PASS100ML", "3": "STRA100ML", "4": "THAI100ML"}, "masterCode": {"0": "YYGPT", "1": "YYGPT", "2": "YYGPT", "3": "YYGPT", "4": "YYGPT"}}}]}}
Stream done.
{"code":200,"data":{"data":[{"figure":"http://sehapvzh9.hn-bkt.clouddn.com/logi-gpt/plt-cache/666adcfa2761f4cee57f63e8-1.png","result":{"masterCode":{"0":"YYGPT","1":"YYGPT","2":"YYGPT","3":"YYGPT","4":"YYGPT"},"skuCode":{"0":"07585-04","1":"A-37","2":"PASS100ML","3":"STRA100ML","4":"THAI100ML"},"total":{"0":16415,"1":16339,"2":8078,"3":8078,"4":8078}}}],"has_more_to_visualize":false,"hint":"已完成。","id":"666adcfa2761f4cee57f63e8","lang":"zh_CN","session_id":"fb34ac3f-71c4-4db8-97c6-be1dadfef123","status":2,"text":"订单中总数最多的5个sku的code及其mastercode分别是：'07585-04'（总数16415个，masterCode为'YYGPT'），'A-37'（总数16339个，masterCode为'YYGPT'），'PASS100ML'（总数8078个，masterCode为'YYGPT'），'STRA100ML'（总数8078个，masterCode为'YYGPT'），'THAI100ML'（总数8078个，masterCode为'YYGPT'）。","time":1718279418},"message":"success"}

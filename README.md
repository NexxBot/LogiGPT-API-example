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
// { session_id: 'af01dba2-4e6d-4ff1-8e0d-fb5c65054a39' }
// {"id":"65de95da2ab0cfc06a2952e6","session_id":"af01dba2-4e6d-4ff1-8e0d-fb5c65054a39","time":1709057370}
// {"session_id":"af01dba2-4e6d-4ff1-8e0d-fb5c65054a39","time":1709057370,"status":1,"id":"65de95da2ab0cfc06a2952e6","data":[{"query":"SELECT COUNT(DISTINCT `goods_name`) FROM t_goods;","result":[{"COUNT(DISTINCT `goods_name`)":185}]}]}
// {"session_id":"af01dba2-4e6d-4ff1-8e0d-fb5c65054a39","time":1709057370,"status":2,"text":"共有185种不同的货物。","id":"65de95da2ab0cfc06a2952e6","data":[{"query":"SELECT COUNT(DISTINCT `goods_name`) FROM t_goods;","result":[{"COUNT(DISTINCT `goods_name`)":185}]}]}
```

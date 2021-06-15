/*
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-15 14:27:33
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-15 14:32:30
 */
const http = require("http")
const querystring = require("querystring")

const server = http.createServer((req,res) => {
  if(req.method === "POST") {
    let postData = "";
    // 流 stream
    req.on("data",chunk => {
      postData += chunk.toString()
    })

    req.on("end",() => {
      console.log("postData",postData);
      res.end("数据接收完毕")
    })

    console.log("post data content type",req.headers['content-type']);
  }
})

server.listen(5000,() => {
  console.log("server running at port 5000");
})
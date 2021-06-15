/*
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-15 14:15:33
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-15 14:23:17
 */
const http = require("http")
const querystring = require("querystring")

const server = http.createServer((req,res) => {
  const method = req.method;
  console.log("method",method);
  const url = req.url
  console.log("url",url);
  req.query = querystring.parse(url.split("?")[1])
  console.log("query",req.query);
  
  res.end(
    JSON.stringify(req.query)
  )
})

server.listen(5000,() => {
  console.log("server running at port 5000");
})
/*
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-15 10:45:38
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-15 10:47:13
 */
import avatar from './avatar.jpg'

function createAvatar () {
  var img = new Image()
  img.src = avatar
  img.className += "avatar"

  var app = document.getElementById("app")
  app.appendChild(img)
}

export default createAvatar




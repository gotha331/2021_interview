/*
 * @Files:
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-14 21:17:11
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-15 10:53:39
 */


// ES Module
import Header from './header.js'
import Content from './content.js'
import Footer from './footer.js'
import avatar from './avatar.jpg'
import styles from './index.scss'
import createAvatar from './createAvatar'

// 面向过程 -> 面向对象
// const app = document.getElementById("app")

new Header()
new Content()
new Footer()

// 创建img
createAvatar()

var img = new Image()
img.src = avatar
img.className += `${styles.avatar}`

var app = document.getElementById("app")
app.appendChild(img)






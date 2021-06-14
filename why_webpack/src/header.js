/*
 * @Files:
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-14 21:22:32
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-14 21:36:27
 */
function Header () {
  const app = document.getElementById("app")
  const header = document.createElement("div")
  header.innerHTML = "Header"
  app.appendChild(header)
}

export default Header
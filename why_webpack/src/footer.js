/*
 * @Files:
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-14 21:24:02
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-14 21:24:14
 */
function Footer () {
  const app = document.getElementById("app")
  const footer = document.createElement("div")
  footer.innerHTML = "Footer"
  app.appendChild(footer)
}

export default Footer
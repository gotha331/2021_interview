/*
 * @Files:
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-14 21:23:29
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-14 21:35:38
 */
function Content () {
  const app = document.getElementById("app")
  const content = document.createElement("div")
  content.innerHTML = "Content"
  app.appendChild(content)
}

export default Content
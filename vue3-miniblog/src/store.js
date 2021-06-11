/*
 * @Files:
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-11 16:32:25
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-11 16:38:29
 */
import { reactive } from 'vue'

class Store {
  constructor() {
    this.state = reactive({
      posts: [
        {
          id: 1,
          title: "标题",
          content: "内容"
        }
      ]
    })
  }
}

export const store = new Store()
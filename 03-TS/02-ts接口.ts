/*
 * @Files:
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-06 20:42:44
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-06 21:08:28
 */

interface Person {
  name: string,
  age: number
}

// 赋值的时候，变量的形状必须和接口的形状保持一致
let tom: Person = {
  name: 'tom',
  age: 25
}

// 有时候我们希望不要完全匹配一个形状，那么可以用可选属性：
interface Person1 {
  name: string,
  age?: number
}

let jam: Person1 = {
  name: 'jam',
  // age: 25
}

// 任意属性: [propName:string]
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
interface Person2 {
  readonly name: string,
  age?: number,
  [propName: string]: any
}

let lucy: Person2 = {
  name: 'lucy',
  age: 25,
  gender: 'female'
}

// lucy.name = 'lucyyyyy'

// 实际开发中的案例
interface Config {
  type: string,
  url: string,
  data?: string,
  dataType: string
}

function ajax(config: Config) {
  var xhr = new XMLHttpRequest()
  xhr.open(config.type, config.url, true)
  xhr.send(config.data)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('success');
    }
  }
}

ajax({
  type: 'get',
  url: 'https://www.baidu.com',
  dataType: 'json'
})
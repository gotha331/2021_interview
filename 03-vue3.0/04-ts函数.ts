/*
 * @Files:
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-06 21:25:04
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-06 22:02:35
 */
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}

let tomcat = buildName('Tom', 'Cat')
let jame = buildName('Jame')

// 注意：可选参数必须接在必需参数后面。
// 即：可选参数后面不允许再出现必需参数了

// 参数默认值
function buildName2(firstName: string = "Tom", lastName: string): string {
  if (lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}

let Tomm = buildName2('Tom3', 'tom')
let Cat = buildName2(undefined, 'cat')

// 重载
// function reverse(x:number | string):number | string {
//   if(typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''))
//   }else if (typeof x === 'string') {
//     return x.split('').reverse().join('')
//   }
// }
// 以上函数的缺点：
// 不能精确表达，输入为数字时，输出也应该是数字
// 输入为字符串时，输出也应该为字符串

// 解决方法:使用重载定义多个 'reverse'的函数类型：
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string) {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}

// 案例
function playBasketball(name: 'YaoMing', age: number): void
function playBasketball(name: 'Kobe', age?: number): void
function playBasketball(name: 'James', age?: number): void

function playBasketball(name: string, age?: number) {
  if (name === 'YaoMing' && age && age >= 25) {
    console.log('good Center');
  } else if (name === 'Kobe') {
    console.log('good guard')
  } else if (name === 'James') {
    console.log('good forward');
  } else {
    console.log('ordinary basketball player');
  }
}

playBasketball('YaoMing', 25)
playBasketball('James')
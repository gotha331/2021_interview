/*
 * @Files:
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-06 21:09:53
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-06 21:23:42
 */
let fibonacci: number[] = [1, 1, 2, 3, 5]
// fibonacci.push('8')
fibonacci.push(8)

// 数组泛型
let ary: Array<number> = [1, 1, 2, 3, 5]

// 用接口表示数组
interface NumberArray {
  [index: number]: number
}

let arr: NumberArray = [1, 1, 2, 3, 5]

// 类数组（Array-like Object）不是数组类型，比如'arguments'
interface IArguments {
  [index: number]: any,
  length: number,
  callee: Function
}

function sum() {
  let args: IArguments = arguments
}

// 用'any'表示数组中允许出现任意类型
let list: any[] = ['shuaishuai', 25, { website: 'http://www.baidu.com' }]
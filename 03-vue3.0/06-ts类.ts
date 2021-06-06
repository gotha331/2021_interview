/*
 * @Files:
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-06 22:08:21
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-06 22:13:24
 */
class Animal {
  public name: string;
  public constructor(name: string) {
    this.name = name
  }
}

let a = new Animal('Jack')
console.log(a.name); // Jack 
a.name = 'Tom'
console.log(a.name); // Tom


class Animal1 {
  private name: string;
  public constructor(name: string) {
    this.name = name
  }
}

let b = new Animal1('Jack')
// console.log(b.name); // Jack
// b.name = 'Tom'
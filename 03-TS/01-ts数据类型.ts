/*
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-06 18:27:40
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-06 20:46:00
 */
console.log('hello ts');
console.log('hello world');

let isDone: boolean = false;
let createByNewBoolean: Boolean = new Boolean(1)

let myName: string = 'Tom';
let myAge: number = 18;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month`;

// void
function alertName(): void {
  alert('my name is Tom')
}

// 声明一个'void'类型的变量没有是什么用，因为你只能将它赋值为'undefined'和'null'
let unuseable: void = undefined

// 在TypeScript中，可以使用'null'和'undefined'来定义两个原始数据类型
let u: undefined = undefined;
let n: null = null

// any: 允许被赋值为任意类型
let myFavoriteNumber: any = "seven"
myFavoriteNumber = 7

// 在任意值上访问任何属性都是允许的
let anyThing: any = 'Tom'
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

// 也允许调用任何方法
anyThing.setName('Jerry')
anyThing.setName('Jerry').sayHello()
anyThing.myName.setFirstName('Jack')

// 声明一个变量为任意值后，对它的任何操作，返回的内容的类型都是任意值

// 变量如果在声明的时候未指定其类型，那么它会被识别为任意值类型
let someThing;
someThing = 'seven'
someThing = 7

// someThing.setName('Tom')

// 联合类型
let myNum: string | number;
myNum = 'seven'
myNum = 7

// 当TypeScript不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法。
function getString(something: string | number): string {
  // something.length
  return something.toString()
}
"use strict";
/*
 * @Files:
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-06 21:25:04
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-06 22:02:35
 */
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var jame = buildName('Jame');
// 注意：可选参数必须接在必需参数后面。
// 即：可选参数后面不允许再出现必需参数了
// 参数默认值
function buildName2(firstName, lastName) {
    if (firstName === void 0) { firstName = "Tom"; }
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var Tomm = buildName2('Tom3', 'tom');
var Cat = buildName2(undefined, 'cat');
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
function playBasketball(name, age) {
    if (name === 'YaoMing' && age && age >= 25) {
        console.log('good Center');
    }
    else if (name === 'Kobe') {
        console.log('good guard');
    }
    else if (name === 'James') {
        console.log('good forward');
    }
    else {
        console.log('ordinary basketball player');
    }
}
playBasketball('YaoMing', 25);
playBasketball('James');

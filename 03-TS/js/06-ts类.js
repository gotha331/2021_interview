"use strict";
/*
 * @Files:
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-06 22:08:21
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-06 22:13:24
 */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var a = new Animal('Jack');
console.log(a.name); // Jack 
a.name = 'Tom';
console.log(a.name); // Tom
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    return Animal1;
}());
var b = new Animal1('Jack');
// console.log(b.name); // Jack
// b.name = 'Tom'

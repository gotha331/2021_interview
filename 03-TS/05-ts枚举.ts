/*
 * @Files:
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-06 22:03:00
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-06 22:05:03
 */
enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Wed"] === 3); // true
console.log(Days["Thu"] === 4); // true

console.log(Days[0] === 'Sun');
console.log(Days[1] === 'Mon');


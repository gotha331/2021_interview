"use strict";
/*
 * @Files:
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-06 20:42:44
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-06 21:08:28
 */
// 赋值的时候，变量的形状必须和接口的形状保持一致
var tom = {
    name: 'tom',
    age: 25
};
var jam = {
    name: 'jam',
    // age: 25
};
var lucy = {
    name: 'lucy',
    age: 25,
    gender: 'female'
};
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('success');
        }
    };
}
ajax({
    type: 'get',
    url: 'https://www.baidu.com',
    dataType: 'json'
});

/*
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-05-25 13:59:01
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-05-25 14:35:48
 */
var Event = (function() {
  var list = {},
    listen,
    trigger,
    remove;

  listen = function(key,fn) {
    if(!list[key]) {
      list[key] = []
    }
    list[key].push(fn)
  }

  trigger = function() {
    // 对应的key列出来
     var key = Array.prototype.shift.call(arguments)

     var fns = list[key]
     if(!fns || fns.length == 0) {
       return
     }

    for (let i = 0,fn; fn = fns[i++];) {
      // fn.apply(this,arguments)
       fn(...arguments)
    }
   }

   remove = function(key,fn) {
    var fns = list[key]
    if(!fns) {
      return false
     }

    if(!fn) {
      fn && (fns.length = 0 )
    }else {
      for(var i = fns.length - 1;i >= 0 ; i--) {
         var _fn = fns[i]
         if(_fn == fn) {
           fns.splice(i,1)
         }
       }
     }
   }

   return {
     listen,
     trigger,
     remove
   }
})()

export default Event


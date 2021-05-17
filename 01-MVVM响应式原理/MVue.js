/*
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-05-11 18:15:10
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-05-14 11:43:33
 */

const compileUtil = {
  getVal(expr,vm) {
    return expr.split('.').reduce((data,currentVal) => {
      console.log(currentVal);
      console.log(data);
      return data[currentVal];
    },vm.$data);
  },
  text(node,expr,vm) { // expr:msg
    // const value = vm.$data[expr];
    let value;
    if(expr.indexOf('{{') !== -1) {
      // {{person.name}}--{{person.age}}
      value = expr.replace(/\{\{(.+?)\}\}/g,(...args) => {
        // console.log(args);
        return this.getVal(args[1],vm);
      })
    }else {
      value = this.getVal(expr,vm);
    }
  
    this.updater.textUpdater(node,value)
  },
  html(node,expr,vm) {
    const value = this.getVal(expr,vm);
    this.updater.htmlUpdater(node,value);

  },
  model(node,expr,vm) {
    const value = this.getVal(expr,vm);
    this.updater.modelUpdater(node,value)

  },
  on(node,expr,vm,eventName) {

  },
  // 更新的函数
  updater:{
    textUpdater(node,value) {
      node.textContent = value;
    },
    htmlUpdater(node,value) {
      node.innerHTML = value;
    },
    modelUpdater(node,value) {
      node.value = value;
    }
  }
}

class Compile {
  constructor(el,vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    // console.log(this.el);
    // 1.获取文档碎片对象，放入内存中会减少页面的回流和重绘
    const fragment = this.node2Fragment(this.el);
    // console.log(fragment);

    // 2.编译模板
    this.compile(fragment);

    // 3.追加子元素到根元素上
    this.el.appendChild(fragment);
  }

  compile(fragment) {
    // 1.获取子节点
    const childNodes = fragment.childNodes;
    [...childNodes].forEach(child => {
      // console.log(child);

      if(this.isElementNode(child)){
        // 元素节点
        // 编译元素节点
        // console.log('元素节点',child);
        this.compileElement(child);
      }else {
        // 文本节点
        // 编译文本节点
        console.log('文本节点',child);
        this.compileText(child);
      }

      // 递归遍历节点，直到没有子元素
      if(child.childNodes && child.childNodes.length) {
        this.compile(child)
      }
    })

  }

  compileElement(node) {
    const attributes = node.attributes;
    [...attributes].forEach(attr => {
      // console.log(attr);

      const {name,value} = attr;
      // console.log(name);
      if(this.isDirective(name)){ //是一个指令 v-text v-html - v-model v-on:click
        const [,dirctive] = name.split('-'); // text html model on:click
        const [dirName,eventName] = dirctive.split(':'); // text  html model on 

        // 更新数据 数据驱动视图
        compileUtil[dirName](node,value,this.vm,eventName)

        // 删除有指令的标签上的属性
        node.removeAttribute('v-' + dirctive);
      }
    })
  }

  compileText(node) {
    // {{}} v-text
    const content = node.textContent;
    
    if(/\{\{(.+?)\}\}/.test(content)) {
      console.log(content);
      compileUtil['text'](node,content,this.vm);
    }
    
  }

  isDirective(attrName) {
    return attrName.startsWith('v-');
  }
  node2Fragment(el) {
    // 创建文档碎片
    const f = document.createDocumentFragment();
    let firstChild;
    while (firstChild = el.firstChild) {
      f.appendChild(firstChild)
    }
    return f;
  }

  isElementNode(node) {
    return node.nodeType === 1;
  }
}

class MVue{
  constructor(options) {
    this.$el = options.el;
    this.$data = options.data;
    this.$options = options;

    if(this.$el) {
      // 1.实现一个数据观察者
      // 2.实现一个指令解析器

      new Compile(this.$el,this)
    }
  }
}
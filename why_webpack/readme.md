<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-14 23:03:46
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-14 23:10:17
-->
# 使用url-loader打包图片

## 优点：
dist -> 少了.jpg图片文件 -> 减少一次图片的http请求
## 缺点：
js加载完毕 图片才能出来 -> bundle.js(base64) 图片过大 -> bundle.js过大 -> 页面加载完毕时间变长 -> 出现页面空白

## 优化：
当图片只有1-2k时 -> bundle.js(base64)
图片很大时 -> file-loader -> 生成单独的.jpg文件，去发送额外的HTTP请求，js首次加载时间变短，提升页面加载速度

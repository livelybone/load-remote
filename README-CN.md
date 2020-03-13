# load-remote
[![NPM Version](http://img.shields.io/npm/v/load-remote.svg?style=flat-square)](https://www.npmjs.com/package/load-remote)
[![Download Month](http://img.shields.io/npm/dm/load-remote.svg?style=flat-square)](https://www.npmjs.com/package/load-remote)
![gzip with dependencies: 0.3kb](https://img.shields.io/badge/gzip--with--dependencies-0.3kb-brightgreen.svg "gzip with dependencies: 0.3kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, 天然支持 tree-shaking, 使用 es module 引用即可

[English Document](./README.md)

在 web 项目中引用载入远程资源（css, js），基于<link>/<script>标签实现。

## repository
https://github.com/livelybone/load-remote.git

## Demo
https://github.com/livelybone/load-remote#readme

## Run Example
你可以通过运行项目的 example 来了解这个组件的使用，以下是启动步骤：

1. 克隆项目到本地 `git clone https://github.com/livelybone/load-remote.git`
2. 进入本地克隆目录 `cd your-module-directory`
3. 安装项目依赖 `npm i`(使用 taobao 源: `npm i --registry=http://registry.npm.taobao.org`)
4. 启动服务 `npm run dev`
5. 在你的浏览器看 example (地址通常是 `http://127.0.0.1:3000/examples/test.html`)

## Installation
```bash
npm i -S load-remote
```

## Global name - The variable the module exported in `umd` bundle
`LoadRemote`

## Interface
去 [index.d.ts](./index.d.ts) 查看可用方法和参数

## Usage
```js
import * as LoadRemote from 'load-remote'

LoadRemote.loadRemote(
  'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.2.228/build/pdf.min.js',
  {
    injectParentElement: document.body,
  },
).then(e => {
  console.log(e.target)
  
  // ... do the task after script loaded
  const task = pdfjsLib.getDocument('./pdf-url.pdf')
  task.promise.then(pdf => {
    // ...
  })
})
```

在 HTML 文件中直接引用，你可以在 [CDN: unpkg](https://unpkg.com/load-remote/lib/umd/) 看到你能用到的所有 js 脚本
```html
<-- 然后使用你需要的 -->
<script src="https://unpkg.com/load-remote/lib/umd/<--module-->.js"></script>
```

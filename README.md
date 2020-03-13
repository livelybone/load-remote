# load-remote
[![NPM Version](http://img.shields.io/npm/v/load-remote.svg?style=flat-square)](https://www.npmjs.com/package/load-remote)
[![Download Month](http://img.shields.io/npm/dm/load-remote.svg?style=flat-square)](https://www.npmjs.com/package/load-remote)
![gzip with dependencies: 0.3kb](https://img.shields.io/badge/gzip--with--dependencies-0.3kb-brightgreen.svg "gzip with dependencies: 0.3kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

[中文文档](./README-CN.md)

Used to load remote resources(CSS/JS) in a web project , based on the html tag(<link>/<script>).

## repository
https://github.com/livelybone/load-remote.git

## Demo
https://github.com/livelybone/load-remote#readme

## Run Example
Your can see the usage by run the example of the module, here is the step:

1. Clone the library `git clone https://github.com/livelybone/load-remote.git`
2. Go to the directory `cd your-module-directory`
3. Install npm dependencies `npm i`(use taobao registry: `npm i --registry=http://registry.npm.taobao.org`)
4. Open service `npm run dev`
5. See the example(usually is `http://127.0.0.1:3000/examples/test.html`) in your browser

## Installation
```bash
npm i -S load-remote
```

## Global name - The variable the module exported in `umd` bundle
`LoadRemote`

## Interface
See what method or params you can use in [index.d.ts](./index.d.ts)

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

Use in html, see what your can use in [CDN: unpkg](https://unpkg.com/load-remote/lib/umd/)
```html
<-- use what you want -->
<script src="https://unpkg.com/load-remote/lib/umd/<--module-->.js"></script>
```

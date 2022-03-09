---
title: 'Create your new Function'
excerpt: 'How to create your own new Function in javascript'
date: '2022-01-30T05:35:07.322Z'
ogImage:
  url: "/assets/images/react.png"
tags:
  - javascript
  - 面试
---

## Implement New Function

```js
function newFunc(fn, ...args) {
    const object = {} // creates an empty object
    obj.__proto__ = fn.prototype
    fn.apply(obj, ...args)
    return obj
}
```
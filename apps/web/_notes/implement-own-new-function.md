---
title: "Create your new Function"
excerpt: "How to create your own new Function in javascript"
tags:
  - javascript
  - interview
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
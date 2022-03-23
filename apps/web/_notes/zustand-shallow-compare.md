---
title: 'Zustand Shallow Compare Function'
excerpt: 'Breaking down the source code of zustand shallow compare function'
date: '2020-03-16T05:35:07.322Z'
ogImage:
  url: "/assets/images/react.png"
tags:
  - javascript
  - typescript
  - zustand
  - react
  - state-management
---

## Understanding the Shallow Compare Function in Zustand
There are a lot of state-mangement library in the react ecosystem. [Zustand](https://github.com/pmndrs/zustand) is probably my favorite.
Let's take a look at the [source code](https://github.com/pmndrs/zustand/blob/main/src/shallow.ts), and break it down step by step:

```ts
export default function shallow<T, U>(objA: T, objB: U) {
  const num: number = 1;
  // Strict Equality Check
  if (Object.is(objA, objB)) { 
    return true
  }
  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false
  }
  const keysA = Object.keys(objA)
  if (keysA.length !== Object.keys(objB).length) {
    return false
  }
  for (let i = 0; i < keysA.length; i++) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, keysA[i] as string) ||
      !Object.is(objA[keysA[i] as keyof T], objB[keysA[i] as keyof U])
    ) {
      return false
    }
  }
  return true
}
```

We can see that there are 4 *if* statements, which are 4 expressions we can break down seperately.

- Strict Equality Check between two objects

- Handle Special case of *null*

- Check if two object has same amount of keys

- Check each key and value pair

### The **Object.is** Method

```ts
if (Object.is(objA, objB)) { 
    return true
}
```

[Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) is a method of a object
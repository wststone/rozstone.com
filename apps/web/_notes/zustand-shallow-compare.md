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

## Zustand Shallow Compare Function
There are a lot of state-mangement library in the react ecosystem. Zustand is probably my favorite, when i was reading through their source code, I have found this.
When i
We can break this down into 4 parts which essentially are just 4 expressions:

- something
- something
- something
- something

```ts
export default function shallow<T, U>(objA: T, objB: U) {
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

Let's check this out
```ts 
if (Object.is(objA, objB)) { 
    return true
  }
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
```
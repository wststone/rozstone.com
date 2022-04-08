---
title: "Is Palindrome"
excerpt: "LeetCode IsPalidrome"
ogImage:
  url: "/assets/images/react.png"
tags:
  - javascript
  - typescript
  - 面试
  - leetcode
---

## Is Palindrome

```ts
function isPalindrome(x: number): boolean {
	const xStr = x.toString().split("");
	const len = xStr.length;
	console.log(xStr);
	for (let i = 0; i < len; i++) {
		console.log(xStr[i], xStr[len - 1 - i]);
		if (xStr[i] !== xStr[len - 1]) return false;
	}
	return true;
}
console.log(isPalindrome(121));
```

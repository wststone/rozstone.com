---
title: 'Is Palindrome'
excerpt: 'LeetCode IsPalidrome'
date: '2020-03-16T05:35:07.322Z'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
tags:
  - javascript
  - typescript
  - 面试
  - leetcode
---

# Is Palindrome
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

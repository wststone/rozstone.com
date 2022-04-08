---
title: "tips"
excerpt: "Tips I Gathered In everyday development"
ogImage:
  url: "/assets/images/react.png"
tags:
  - javascript
  - typescript
  - react
  - blog
---

# Tip

Some Tips I thought of or learned during my everyday work.

## 1. Easier and cleaner Boolean state toggle in react

If you only want to toggle a **boolean** state, instead of using [`useState`](https://beta.reactjs.org/apis/usestate), which you have to create another function to toggle the state, you can just use [`useReducer`](https://beta.reactjs.org/apis/usereducer) and pass the toggle function directly.

### Exmaple

```jsx
// Instead of this
function App() {
	const [state, setState] = useState(false);
	function toggleState() {
		setState(s => !s);
  }
  return <button onClick={toggleState}></button>
}
```

```jsx
// Do this
function App() { 
  const [state, toggle] = useReducer(s => !s, false);
  return <button onClick={toggle}></button>
}
```

### Why have I not think of this before?

First of all, there are only a few use cases where you only need to toggle a boolean state. I actually saw this when i was browsing the moti docs. [moti-docs](https://moti.fyi/examples/exit-before-enter)

## 2. *Global* Regular Expression in javascript is dangerous

Thought I was doing a performance boost, but it actually broke my code

### Example

```js
const SQUARE_BRACKETS = new RegExp(\[\[\]]\, "g")
```

## 3. React Live

<CodePlayGround code="<strong>Hello World!</strong>" /> 


## YAML Read Error

```sh
can not read a block mapping entry; a multiline key may not be an implicit key at line
```

This is caused by mixing usage of single and double quotes.
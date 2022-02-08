---
title: 'Building this site'
excerpt: 'I Discovered this behavior at work, i share some details'
date: '2022-01-30T05:35:07.322Z'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
tags:
  - javascript
  - typescript
  - react
  - blog
---


# Features I want to Implement

## 123

- [x] Parent 1
    - [X] Child - 1
    - [X] Child - 2
    - [X] Child - 3
    - [X] Child - 4

## Building this site (updating)

## (2022-02-07) At Work

- Working on Basics
- W

## (2022-02-07)

I Decided to stop using tailwind for the ui package, there are few reasons:

- While compiling, it kept throwing errors because tailwind specified location is outside of the web folder, the ui package also has the in the requested module

```js
// ./styles/globals.css:4:0
// Module not found: Can't resolve './...'
// Import trace for requested module:
// ./styles/globals.css  
// ./src/pages/_app.tsx
// https://nextjs.org/docs/messages/module-not-found
```

- I think using tailwind is pretty good for **rapidily** developing UI, but for a component (library) that needs to be flexible and receive props for different styles, it kind of goes against the purpose of a library

- I also want to try out other styling libraies to see how it intergates react, typescript and learn in the process

---
title: 'Building this site'
excerpt: 'Some insights of building this site'
date: '2022-01-30T05:35:07.322Z'
ogImage:
  url: "/assets/images/react.png"
tags:
  - javascript
  - typescript
  - react
  - blog
updating: true
---


## Features I want to Implement

- [ ] Use **Slidedev** as another option to view articles, not sure this is going to work.
- [ ] Implement some kind of sandbox environment, so people can expirement with the stuff i wrote.
- [ ] Redirect github io pages to my own domain
- [ ] Add internationalization support
  - [x] Language toggle in URL params
  - [x] Toggle languages in UI (A button)
  - [ ] A **sustainable** way to translate each post
- [ ] Add UI Components
  - [x] Checkbox
  - [ ] Dropdown with really good **accessibility**
  - [ ] Code Block
    - [ ] Syntax highlight with dark mode support
    - [ ] Line Number
    - [ ] Copy code button
  - [ ] Code playground
    - [x] React Live
    - [ ] Sandbox Link
  - [ ] Build a design system
  - [ ] Notification / Toast with keyboard support
- [ ] Add Security/Data Monitor
- [ ] Play Music in the background
  
## Features I don't want to Implement

There are some features other blog sites implemented, but I don't think its's necessary or useful.

- User system

I think

## Seprate Package for building UI

I Decided to stop using tailwind for the ui package, there are few reasons:  

- While compiling, it kept throwing errors because tailwind specified location is outside of the web folder, the ui package also has the in the requested module:

```sh
# ./styles/globals.css:4:0
# Module not found: Can't resolve './...' 
# Import trace for requested module:
# ./styles/globals.css  
# ./src/pages/_app.tsx
# https://nextjs.org/docs/messages/module-not-found
```

- I think using tailwind is pretty good for **rapidily** developing UI, but for a component (library) that needs to be flexible and receive props for different styles, it kind of goes against the purpose of a library

- I also want to try out other styling libraies to see how it intergates react, typescript and learn in the process

## Understand the difference between Remark and Rehype

In short, Remark processes *markdown* files while Rehype processes *html* files. For example: 
[Detailed Article](https://www.ryanfiller.com/blog/remark-and-rehype-plugins)

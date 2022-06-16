---
title: "React source code"
excerpt: "Walk through react source code file by file"
tags:
  - react
  - sourcecode
---


## Development Environment

Facebook/Meta uses [Flow](https://flow.org/) as their type system for javascript. Install the flow language support, and disable typescript support in your IDE, if you are using vscode, change your workspace setting `"javascript.validate.enable": false`

## React Overview

### Old React (15.0)

The core concept of older version of react involves only *Reconciler* and *Renderer*. The old Reconciler uses recursion, therefore it is also called stack reconciler Synchronous Update

### 1
#### Reconciler


### JSX Element

What is JSX? Accroding to [Wikipedia](https://en.wikipedia.org/wiki/JSX_(JavaScript)), JSX stands for `JavaScript Syntax Extension` and occasionally referred as `JavaScript XML`. The browser does not understand it, therefore we need Babel to compile it for us


## React Source Code File

- [] ReactContext
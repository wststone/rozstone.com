---
title: "Useful Commands"
excerpt: "Roman to integer verhard"
tags:
  - javascript
  - typescript
  - leetcode
---

# Some Useful Commands I Have Encountered


## Redis

- list all connected client

```sh
CLIENT LIST
```

## MAC

- kill usb deamon

```sh
killall -STOP -c usbd
```

## Git

- edit last commit 

```sh
git commit --amend --no-edit # stage files first
```

- do not track file permission change

```sh
git config --local core.fileMode false
```

- change remote

```sh
git remote add/remove [name] [link]
```

- skip precommit hook 

```sh
git commit -m "don't verify this time" --no-verify
```

github input shadow
```css
.input:focus {
  box-shadow: 0 0 0 3px rgba(9,105,218,0.3);
}
```
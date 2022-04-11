---
title: "Learning File Stat Time"
excerpt: "Learning about time data in a file's metadata"
tags:
  - Linux
  - Nodejs
---

## Origin

I've always wanted to improve how each file's *time* metadata is being created when writing articles for this site. Prior to this, I always have to write a date key- value pair in the meta section of the markdown file.

```markdown
date: '2022-01-30T05:35:07.322Z'
title: 'This is a good title'
etc...
```

Then I thought whenever i needed to check when a file was last modified, i usually just inspect the file using Mac's builtin Finder.

<ImageGroup>
<Image src="/assets/images/notes/mac-finder-inspect.png" height={400} width={300} layout="fixed" quality={100} objectFit="contain" objectPosition="center center" />
<Image src="/assets/images/notes/mac-finder-file-metadata.png" height={400} width={300} layout="fixed" quality={100} objectFit="contain" objectPosition="center center" />
</ImageGroup>

Therefore, it got me thinking, there definitely are metadata in a file when it is created and modified. Then i started thinking about all the backend stuff we can do with [`Nodejs`](https://nodejs.org/en), and I did some digging, and found out that it is actually pretty easy to implement using one of its builtin API [`statSync`](https://nodejs.org/api/fs.html#fsfstatsyncfd-options) in the [`fs`](https://nodejs.org/api/fs.html) module.

Calling the `statSync` method returns an `fs.Stats` object that contains information about a file.

```js
Stats {
  dev: 2114,
  ino: 48064969,
  mode: 33188,
  nlink: 1,
  uid: 85,
  gid: 100,
  rdev: 0,
  size: 527,
  blksize: 4096,
  blocks: 8,
  atimeMs: 1318289051000.1,
  mtimeMs: 1318289051000.1,
  ctimeMs: 1318289051000.1,
  birthtimeMs: 1318289051000.1,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT 
}
```

### atime

atime stands for "Access Timestamp", it means

The access timestamp is the last time a file was read. This means someone used a program to display the contents of the file or read some values from it. Nothing was edited or added to the file. The data was referenced but unchanged.

### mtime

mtime stands for modified timestamp, a modified timestamp signifies the last time the contents of a file were modified. A program or process either edited or manipulated the file. “Modified” means something inside the file was amended or deleted, or new data was added.

### ctime

mtime stands for changed timestamp, changed timestamps aren’t referring to changes made to the contents of a file. Rather, it’s the time at which the metadata related to the file was changed. File permission changes, for example, will update the changed timestamp.

[Check out this blog for more information](https://www.howtogeek.com/517098/linux-file-timestamps-explained-atime-mtime-and-ctime/)

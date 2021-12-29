---
slug: welcome
title: Welcome
authors: [linux_china]
tags: [deno, dbang, hello]
---

DBang is simple Deno CLI script management tool based on GitHub. 

How to start?  Create a repo with `dbang-catalog`  under your GitHub account, such as `username/dbang-catalog`

Write your Deno scripts under the repo, then add `dbang-catalog.json` under the repo to manage your scripts. 

```json
{
  "aliases": {
    "hello": {
      "script-ref": "hello.ts",
      "description": "Hello world"
    },
    "myip": {
      "script-ref": "myip.ts",
      "description": "Display your IP address by https://httpbin.org/ip",
      "deno": "1.17.1",
      "permissions": [
        "allow-net"
      ]
    }
  }
}
```

From terminal, execute `dbang helllo@username`

Idea from [jbangdev](https://jbang.dev) and thank you JBang!

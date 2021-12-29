---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **DBang in less than 5 minutes**.

## Getting Started

First you should install dbang, the easy way is `brew install dbangdev/tap/dbang`

## Generate your repo on Github

Create a new repo by [gh - GitHub command Line](https://cli.github.com/): 

```shell
gh repo create dbang-catalog
```

## Write your first script

Create hello.ts with following code:

```typescript
console.log("Hello world!");
```

## Add your scripts in dbang-catalog.json

Create a dbang-catalog.json file with following content:

```json
{
  "aliases": {
    "hello": {
      "script-ref": "hello.ts",
      "description": "Deno hello.ts"
    }
  }
}
```

## Push your code to Github

```shell
git commit -m "Add hello.ts" hello.ts
git commit -m "dbang-catalog.json" dbang-catalog.json
git push
```

## Run your script by dbang

```shell
dbang hello@yourname
```

**Attention**: gh is a command line tool for GitHub https://cli.github.com/

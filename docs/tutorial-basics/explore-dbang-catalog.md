---
sidebar_position: 1
---

# Explore the DBang Catalog

dbang-catalog.json is a JSON file that contains a list of Deno scripts.

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
      "permissions": [
        "allow-net"
      ],
      "deno": "1.17.1"
    }
  }
}
```

* script-ref: script file in the repo or HTTPS URL
* description: short description of the script
* permissions: permissions required to run the script, Please refer [Deno Permissions](https://deno.land/manual@v1.17.1/getting_started/permissions) for more details.
* deno: Deno version required to run the script

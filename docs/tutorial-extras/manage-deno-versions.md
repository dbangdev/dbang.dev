---
sidebar_position: 2
---

# Manage Deno Versions

Deno is wonderful production for version compatibility, but sometimes you need special version of Deno to run the script.
You can use `--deno version` to assign Deno version for script, and commands as follows:

```shell
dbang --deno 1.71.1 hello@github_user
dbang --deno latest hello@github_user
```

Don't worry about Deno installation, and dbang will download and install Deno automatically.

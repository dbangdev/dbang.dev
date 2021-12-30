---
sidebar_position: 1
---

# Aliases

Deno uses `install` sub command as [Script installer](https://deno.land/manual@v1.17.1/tools/script_installer) to install script as executable file.

```shell
deno install --allow-net --allow-read https://deno.land/std@0.119.0/http/file_server.ts
```

dbang adopt same strategy to install Catalog's script, commands as follows:

```shell
dbang install hello@github_user
dbang install --name hello2 hello@github_user
```

After installation, you can use aliases to run scripts, for example `hello` or `hello2` instead of `dbang hello@github_user` style.

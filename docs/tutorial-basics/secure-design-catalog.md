---
sidebar_position: 2
---

# Secure design for dbang-catalog.json

When your invoke `dbang hello@github_user` first time and dbang will prompt you to confirm script's permissions required.
After confirm dbang will cache dbang-catalog.json and scripts in the dbang-catalog.json locally, and next time to run script again, dbang will not ask for permission again.

You can use trust command to avoid this prompt:

```shell
jbang trust github_user
jbang trust github_user/repo_name
```

**Attention**: if you choose to trust a GitHub user, and it means you will trust all scripts in the user's catalog with all permissions.

# Update catalog

dang will use two caches: dbang-catalog.json cache and Deno caches. and make sure scripts not changed after your confirmations. 
It's secure to prevent you from malicious scripts.  If you want to update remote catalog and script, and you should update catalog first.

```shell
jbang catalog update github_user 
```

ddang will prompt you to confirm scripts' new permissions if different with local jbang-catalog.json cache, and it's like Android App update.

---
title: Resolving Incompatibility with Windows's ProxySettingsPerUser
description: "Resolve no traffic being captured with ProxySettingsPerUser group policy setting."
type: how-to
slug: resolve-proxysettingsperuser-policy
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |  Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |

## Description

Q: Fiddler Everywhere does not capture traffic when a group policy sets **ProxySettingsPerUser=0** (Windows OS).

Q: The Fiddler Everywhere logs contain the following error:
```
[2020-06-19 08:09:18:109] [Information] [Fiddler] Fiddler.Network.AutoProxy> AutoProxy Detection failed.
[2020-06-19 08:09:18:109] [Information] [Fiddler] AutoProxy failed. Disabling for this network.
```

What causes the issue, and how can it be resolved?

## Solution

Sometimes, your system administrator can create a proxy group policy by setting `ProxySettingsPerUser` to `0`. This means that instead of the default Windows behavior (each user has their proxy settings), all user accounts share one set of proxy settings. In this case, a value named `ProxySettingsPerUser` exists inside the following registry key:

```
HKLM\SOFTWARE\Policies\Microsoft\Windows\CurrentVersion\Internet Settings\ 
```

To resolve the issue, apply one of the following solutions:

* Run Fiddler Everywhere as admin

OR

* Change the value of the registry entry to `1` or delete the whole entry `ProxySettingsPerUser`
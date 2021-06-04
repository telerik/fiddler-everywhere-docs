---
title: Configure Fiddler Everywhere on XFCE
description: How to properly configure or fix leaked Fiddler proxy on XFCE and other Linux desktop environments without graphical proxy settings.
type: how-to
slug: fiddler-xfce
publish: true
res_type: kb
---


#### Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| 3rd-party tool | [XFCE](https://aws.amazon.com/cli/) |
| Supported OS | Linux |
| Reported via | https://community.getfiddler.com/support/discussions/topics/12000025720 |


#### Description

Fiddler Everywhere uses the **dconf** for setting/getting the proxy configuration via the UI. Some alternative desktop environments like XFCE store the data in different locations or lack a graphical interface for setting the system proxy. This would lead to Fiddler Everywhere not to set or unset the system proxy, which could break the application and the internet connectivity due to leaked proxy settings.


## Solution

- Use the **dconf-editor** and remove the **org.gnome.system.proxy**. If this action is not permitted, go to the next step. Otherwise, skip to the last step.
- Go to Proxy > HTTP and remove the **org.gnome.system.proxy**.
- Go to Proxy > HTTPS and remove the **org.gnome.system.proxy**.
- Restart Fiddler Everywhere.
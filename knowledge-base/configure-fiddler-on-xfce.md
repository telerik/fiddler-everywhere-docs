---
title: Configuring Fiddler Everywhere on XFCE
description: "Learn how to properly configure or fix leaked Fiddler Everywhere web-debugging proxy on XFCE and other Linux desktop with environments without graphical proxy settings."
type: how-to
slug: fiddler-xfce
publish: true
res_type: kb
---


## Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| 3rd-party tool | [XFCE](https://aws.amazon.com/cli/) |
| Supported OS | Linux |
| Reported through | https://community.getfiddler.com/support/discussions/topics/12000025720 |


## Description

Fiddler Everywhere uses the `dconf` for setting and getting the proxy configuration through the UI. Some alternative desktop environments, such as XFCE, store the data in different locations or lack a graphical interface for setting the system proxy. As a result, Fiddler Everywhere will not set or unset the system proxy, which can break the application and the Internet connectivity due to leaked proxy settings. How can I handle this issue?

## Solution

1. Use the `dconf-editor` and remove the `org.gnome.system.proxy`. If this action is not permitted, go to the next step. Otherwise, skip to the last step.
1. Go to **Proxy** > **HTTP** and remove the `org.gnome.system.proxy`.
1. Go to **Proxy** > **HTTPS** and remove the `org.gnome.system.proxy`.
1. Restart Fiddler Everywhere.

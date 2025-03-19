---
title: Configuring Fiddler alongside Proxy with Authentication
description: "Interactive installation instructions of the Fiddler's network extension."
slug: fe-configure-automatic-auth
publish: true
position: 70
---

# Configuring Fiddler alongside Proxy with Authentication

The Fiddler Everywhere application supports upstream proxies that require authentication through Kerberos, Negotiate, and NTLM protocols. For Fiddler to obtain the proxy credentials as stored in the operating system credential management tool, do the following:

- Start the Fiddler Everywhere application.

- Open the [**Settings > Connections**]({%slug connections-submenu%}) window.

- Check the **Enable Automatic Authentication** option.

    ![Enable the automatic proxy authentication](../images/settings/sett-conn-enable-auth.png)
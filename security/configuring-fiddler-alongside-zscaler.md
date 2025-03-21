---
title: Configuring Fiddler alongside Zscaler
description: "Instructions for configuring Fiddler Everywhere alongside Zscaler"
slug: fe-configure-zscaler
publish: true
position: 80
---

# Configuring Fiddler alongside Zscaler

Zscaler is a zero-trust security tool aimed at providing a secure environment protected from internal and external treats. As such the tool has some default mechanisms and applicable policies that prevent users or third-party applications (like Fiddler) from freely changing the operating system settings including setting or unsetting system proxy. This article explains how both Fiddler Everywhere and Zscaler can be configured so that both tools can be work simulteniosly.


The below configuration options list the configuration steps while using the latest version of the **Fiddler Everywhere** proxy and **Zscaler Client Connector**.

1. Configure the following within the **Zscaler Client Connector**.

    1. Create a custom PAC file. Within the PAC file the following rules must be created:

        - Ensure that the traffic to `*.telerik.com` and `*.getfiddler.com` (the Fiddler login endpoints) is sent DIRECT (and not through a proxy).

            ```sh
            if (localHostOrDomainIs(host, "telerik.com") || localHostOrDomainIs(host, "getfiddler.com")) {
                return DIRECT;
            }
            ```

        - The Fiddler Everywhere proxy (`127.0.0.1:8866`) should be the first option, and the Zscaler proxy should be the second option (e.g., `127.0.0.1:9000`). For example:

            ```sh
            return "PROXY 127.0.0.1:8866; PROXY ${ZAPP_LOCAL_PROXY}; DIRECT;";
            ```

    1. Add the PAC file to a forwarding profile. Configure the forwarding profile with the following settings:

        - Select **Tunnel with Local Proxy** for all profiles (e.g., ON-trusted, OFF-trusted, VPN-trusted, etc.).

        - Select **Z-Tunnel 2.0**. 
        
            >important Note that **Z-TUnnel 1.0** is incompatible with the Fiddler Everywhere application.

        - Select the **PAC URL Location** field, and enter the custom PAC Url.

    1. Add the forwarding profile to an app profile. You can create new Zscaler Client Connector profile or update an existing one, and then add the configured forwarding profile. The forwarding profile should contain the following options:

        - The **Rule Order** must be set to **1**.

        - The app profile must be enabled.

        - The **Disabled Loopback Restriction** switch must be enabled.

1. Configure the following within the **Fiddler Everywhere** application.

    - Start the **Fiddler Everywhere** application and log in. 
    
    - Ensure that the **System Proxy** switch is toggled **OFF**. Note that Fiddler as an explict proxy (through the Zscaler forwarding profile and the Zscaler PAC script).





Sign in to Fiddler Everywhere: Start the application and log in. Ensure that the “System Proxy” switch is toggled OFF.
Configure Manual Gateway:
Go to Settings > Gateway and select Manual Configuration.
Enter the upstream proxy settings, for example:
http=[http://127.0.0.1:9000;https=http:/127.0.0.1:9000]http://127.0.0.1:9000;https=http://127.0.0.1:9000
Save the changes and stop Fiddler.
Update the PAC Script: Point all traffic you’re interested in capturing to Fiddler’s proxy, except for *.getfiddler.com and *.telerik.com, which must still be sent DIRECT (or routed through another proxy).
Restart Fiddler: Start Fiddler Everywhere again. With this configuration, you should immediately start seeing traffic. Ensure that the “System Proxy” switch remains toggled OFF – turning it on will break the setup as Zscaler will automatically revert the proxy settings (this is a question that we could discuss with the Zscaler administrators).
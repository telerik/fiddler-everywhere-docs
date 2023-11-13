---
title: Capturing Network Traffic
description: "Capture all HTTPS traffic that goes through the active network adapter."
slug: capture-network-traffic
publish: true
position: 10
---

# Network Capture

>important The **Network Capture** feature is a BETA version and is subject to change in the future. Currently, the functionality is available only for the **macOS** version of Fiddler Everywhere.

This article describes using Fiddler's network capturing mode, where "network traffic" refers to all HTTP, HTTPS, WebSocket, and gRPC traffic directed to the active network adapter. The feature requires the installation of a network extension, which requires explicit administrative privileges.

In nature, the **Network Capture** is a more powerful way to capture network traffic on a lower level than an HTTPS(S) proxy works (which is how Fiddler works in the **System Capturing** mode or all other available capturing modes). 

The benefits of the **Network Capture** mode are as follows:

- Works on a lower level compared to HTTP(S) proxies.

- Captures all HTTP(S) traffic from the active network adapter. 

- No limitations related to frameworks, applications, operating systems, and other configuration specifics that you usually must handle when using an HTTP(S) proxy.

- Allows you to seamlessly control the IP addresses and processes to monitor.

## Prerequisites

You must meet the following prerequisites to use the **Network Capture** mode.

- Installed the latest version of Fiddler Everywhere.

- Administrative privileges to install/uninstall the network extension on macOS.

## Enabling the Network Capture Mode

Currently, the **Network Capture** mode is "hidden" behind a feature toggle, and you need to enable it to access the feature explicitly. The steps listed below will be substituted with an accessible user interface once the feature is out of BETA state.

1. Close the Fiddler Everywhere application.

1. Navigate to the following macOS folder

    ```bash
    ~/.fiddler/Settings
    ```

1. Open the **electron-settings.json** file and add the following object (within the root object)

    ```JSON
    "featureToggles": {
        "driverCapturing": true
    }
    ```
1. Ensure the JSON structure is valid, and then save and exit the file.

    With the above change in place, you can now restart the Fiddler Everywhere application. As a result, the **Network Capture** mode will be accessible in the Fiddler's **Live Traffic** menu options.

    ![the "Network Capture" feature](../images/livetraffic/websessions/websessions-toolbar-network-capture-beta.png)


## Using the Network Capture Mode

Once the **Network Capture** is enabled, you can use it to capture all HTTP(S) traffic that goes through the active network adapter. As noted in the benefits section, the main perk of using the network capturing mode is that you don't need to change the operating system proxy or set the client's proxy. That allows, you to quickly capture traffic from processes that are otherwise having troubles using HTTP(S) proxies.

To use the **Network Capture**, you need to explicitly set IP address, the TCP/IP ports, and the (optionally) a process name. At least one rule that sets IP address (or range of IP addresses) alongside the related TCP/IP port must be specified for the capturing to work.


### Start Network Capture

To start the **Network Capture** execute the following steps:

- Click on the **Network Capture** button from the **Live Traffic** menu

- Click on the **Enable Capture** from the **Network Capture Settings (BETA)** screen.

>tip The capturing will use the pre-configured rules. [Instructions on how to modify the default capturing rules, or add additional rules here...](#modify-network-capture-rules)

### Stop Network Capture

To stop the **Network Capture** execute the following steps:

- Click on the **Network Capture** button from the **Live Traffic** menu

- Click on the **Disable Capture** from the **Network Capture Settings (BETA)** screen.


### Modify Network Capture Rules

By default, the **Network Capture** mode comes with the default active rules that will capture traffic from all IP addresses and all processes that are working on ports 80 (HTTP) and port 443 (HTTPS). An additional rule also enables the capturing from localhost (127.0.0.1) on port 3000 - this rule serves as a demonstration how you can add your own specific capturing rules within the **Network Capture Settings (BETA)** screen.

The **Network Capture Settings (BETA)** screen also comes with a **Basic** view that simplifies the rules setup.

![Default capturing rules for the network capturing mode (basic view)](../images/network-capture/net-capture-default-rules-basic-view.png)

Alternatively, you can use the **Advanced** view that allows you to create more complex capturing rules.

![Default capturing rules for the network capturing mode (advanced )](../images/network-capture/net-capture-default-rules-disable.png)

Through the advanced view, you can manually control what traffic should be captured through the following options:

- **IP Address**&mdash;Sets the value of the IP address or starting address of the IP range (in case the CIDR subnet mask differs from 32) that will be monitored.


- **Subnet Mask**&mdash;Sets the subnet mask which will determine the range of OP addresses that will be monitored.

    >tip The **Subnet Mask** field accepts a CIRD notation value between 1 and 32. Basically, a value of 32 means that only the host address will be monitored (subnet mask 255.255.255.255), while a value of 0 means that all IPs will be monitored (subnet mask 0.0.0.0).

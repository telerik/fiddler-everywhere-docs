---
title: Capturing System Traffic
description: "Learn how to capture HTTP(S) traffic from any application that respect the operating system proxy settings."
slug: fiddler-system-traffic
publish: true
position: 15
---


# System Capturing

Once [Fiddler Everywhere is installed]({%slug installation%}), and it's [root certificate trusted]({%slug trust-certificate%}), you can utilize the web-traffic capturing of the proxy client.

The client logs all HTTP and HTTPS traffic between your computer and the Internet and helps you analyze and debug the incoming and outgoing traffic from virtually any application that supports a proxy&mdash;Google Chrome, Firefox, Microsoft Teams, Outlook, and more. You can use the captured traffic to debug issues, identify performance bottlenecks, or share it with your teammates.

To capture system traffic with Fiddler Everywhere:

1. Start Fiddler Everywhere. Ensure the proper configuration as described in the [First Steps tutorials for Windows]({%slug first_steps_windows%}), [macOS]({%slug first_steps_macos%}), or [Linux]({%slug first_steps_linux%}).

1. Switch **Live Traffic** to **Capturing**. Your incoming and outgoing traffic will be immediately captured and displayed in the [Live Traffic]({%slug saved-sessions-tab%}) tab.

    ![Enabling Live Traffic](../images/get-started/get-started-toggle.png)

>tip When you switch **Live Traffic** to **Capturing**, open a browser and type an arbitrary web address. As a result, Fiddler Everywhere will immediately intercept the request, and **Live Traffic** will be populated. The **Result** field for that arbitrary web address will return **200**, which means that your first request is successfully captured with Fiddler Everywhere.


## Disabling the Automatic System Capturing

By default, the Fiddler Everywhere application starts with the **Live Traffic** toggle switched to **Capturing** (which means it will immediately change the system proxy and start capturing). You can change that behavior by unchecking the [**Settings > Connections > Act as system proxy on startup**]({%slug connections-submenu%}) option.


## Additional Resources

* [Learn more about the different capturing modes in Fiddler Everywhere here...]({%slug capture-traffic-get-started%})
---
title: Capturing Traffic
description: "Capture HTTP and HTTPS live traffic with the cross-platform, web-debugging, HTTP-proxy Telerik Fiddler Everywhere tool."
slug: capture-traffic-get-started
publish: true
position: 10
previous_url: /get-started/capture-traffic, /knowledge-base/capture-and-inspect-web-traffic, /get-started/traffic/capture-traffic
---

# Capturing Traffic

Out of the box, Fiddler Everywhere provides an automatic capturing functionality through the [system capturing options](#system-capturing) and the [preconfigured browser capturing feature](#preconfigured-browser-capturing).

## System Capturing vs. Preconfigured Browser Capturing

The following table demonstrates the significant differences between the two functionalities.

| Feature          |System Capturing |Preconfigured Browser Capturing  
|:-----------------|:----------------|:-----------------
| Additional configuration       | Requires trusting of the root certificate for enabling HTTPS capturing. | No additional configuration is needed.
| Modification of the system proxy | Requires modification of the system proxy. | Automatically configures the system proxy for Google Chrome.
| Explicit installation of the trust root certificate | Requires you to add the certificate in the OS keychain. | No certificate configuration needed - automatically configures the trust certificate for Google Chrome.
| Capturing of browser traffic   | Supports all browsers.  | Support for all Chromium browsers.
| Capturing of other applications traffic | Yes. It supports traffic capturing on virtually any application that uses the system proxy. | No.
| Required administrative access | Requires OS admin rights for installing and trusting a root certificate and modifying the system proxy.  | Requires user rights for starting a Chromium browser with custom parameters.
| Working with VPN tooling       | Requires Cisco VPN support. | Provides multiple VPN tooling support out-of-the-box.
| Captured output                | Captures all traffic that goes through the system proxy. | Captures only the traffic from the preconfigured browser instance.


## System Capturing

Once [Fiddler Everywhere is installed]({%slug installation%}), and it's [root certificate trusted]({%slug trust-certificate%}), you can utilize the web-traffic capturing of the proxy client.

The client logs all HTTP and HTTPS traffic between your computer and the Internet and helps you analyze and debug the incoming and outgoing traffic from virtually any application that supports a proxy&mdash;Google Chrome, Firefox, Microsoft Teams, Outlook, and more. You can use the captured traffic to debug issues, identify performance bottlenecks, or share it with your teammates.

To capture system traffic with Fiddler Everywhere:

1. Start Fiddler Everywhere. Ensure the proper configuration as described in the [First Steps tutorials for Windows]({%slug first_steps_windows%}), [macOS]({%slug first_steps_macos%}), or [Linux]({%slug first_steps_linux%}).

1. Switch **Live Traffic** to **Capturing**. Your incoming and outgoing traffic will be immediately captured and displayed in the [Live Traffic]({%slug saved-sessions-tab%}) tab.

    ![Enabling Live Traffic](../images/get-started/get-started-toggle.png)

>tip When you switch **Live Traffic** to **Capturing**, open a browser and type an arbitrary web address. As a result, Fiddler Everywhere will immediately intercept the request, and **Live Traffic** will be populated. The **Result** field for that arbitrary web address will return **200**, which means that your first request is successfully captured with Fiddler Everywhere.


## Preconfigured Browser Capturing

The preconfigured browser capturing is a feature that allows you to capture traffic from a specific browser instance. Currently, Fiddler Everywhere supports preconfigured browser capturing only for Chromium browsers.

The feature is useful when you need to capture browser traffic, but your environment doesn't allow you to change the system proxy or install and trust root certificates. It also solves the compatibility issues with VPN and third-party security tools, which modify the system proxy. Additionally, it allows you to focus your capturing on a sandboxed browser instance and prevent capturing other system traffic.

To start the preconfigured browser capturing with Fiddler Everywhere:

1. Install Google Chrome or other Chromium browsers.

1. Start Fiddler Everywhere. No additional configuration is needed. To prevent polluting the **Live Traffic** list, you can disable the **Live Traffic** toggle.

1. Click **Open Browser** from the **Live Traffic** toolbar.

  ![the "Open Browser" option for opening the preconfigured browser for automatic capture](../images/get-started/get-started-open-browser.png)

1. Enter the URL in the newly opened Chrome window. Fiddler Everywhere immediately starts capturing all the traffic generated from the preconfigured browser.

To change the preconfigured browser, from the [**Browsers** sub-menu]({% slug browsers-settings-submenu %}) either assign a path to third-party Chromium browsers, like Edge, Brave, and Vivaldi or change the default path to the Google Chrome browser.


## HTTP Version Specifics

Fiddler Everywhere 3.0 and above support HTTP/2 traffic capture and composing. Note the following specifics when handling HTTP/2 requests.

- By default, the HTTP/2 support in Fiddler Everywhere is disabled and needs to be [explicitly enabled through the **Connections** menu]({%slug connections-submenu%}).

- With the **Enable HTTP/2 support (BETA)** option, the connection between a client and a server will default to HTTP/2 if both support it. When the option is disabled, Fiddler Everywhere forces the communication to go through HTTP/1.1.

- Even with HTTP/2 support enabled, Fiddler Everywhere cannot guarantee that all requests will use HTTP/2. If a client only supports HTTP/1.1 or lower, Fiddler will only communicate using the client's version. If the client works with HTTP/2 but the server does not, Fiddler will allow the HTTP/2 request, but internally it will translate the request to HTTP/1.1 when communicating with the server.

- Some browsers will share a single HTTP/2 connection to a website between several different tabs and keep a connection open for some time even after a tab is closed. That could lead to unexpected behavior with the beta HTTP/2 support in Fiddler Everywhere, so if you experience similar issues, try to restart the browser.


## Additional Resources

- [Inspecting Captured Traffic]({%slug inspecting-traffic-get-started%}).
- [Modifying Traffic]({%slug modify-traffic-get-started%})
- [Capturing and Inspecting iOS Traffic]({%slug capture-mobile-ios-traffic%})
- [Capturing and Inspecting Android Traffic]({%slug capture-mobile-android-traffic%})
- [Filtering Traffic]({%slug how-to-filter-traffic%})
- [Live Traffic Section in Details]({%slug web-sessions-list%})
- [Inspecting Server Certificates]({%slug fe-cert-details%})

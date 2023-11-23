---
title: Capturing from Independent Browser Instance
description: "Capture browser HTTPS traffic with Fiddler Everywhere and the independent browser capturing mode."
slug: capture-browser-traffic
position: 20
---

# Independent Browser Capturing Mode

This article describes how to use Fiddler's **independent browser capturing mode** where "browser traffic" refers to all HTTPS traffic directed to go through a sandboxed browser instance started from Fiddler Everywhere. Compared to the system capturing mode, the independent browser capturing mode has the following advantages:

- No need to set/unset the operating system proxy.

- No need to install and trust the Fiddler certificate authority (CA).

- You will capture only specific HTTPS traffic generated from the independent browser instance.

The feature is useful when capturing browser traffic, but your environment doesn't allow you to change the system proxy or install and trust third-party CA. It also solves compatibility issues with VPN and third-party security tools, which modify the system proxy. Additionally, it allows you to focus your capturing on a sandboxed browser instance and prevent capturing other system traffic.


## Capturing Browser Traffic

To capture browser traffic with Fiddler Everywhere:

1. Start Fiddler Everywhere.

1. Open the **Home** pane.

1. Open the **Browser** tutorial, and then click on **Open Browser**.

OR

1. Start Fiddler Everywhere.

1. Open the **Traffic** pane.

1. Click the **Browser** button to load a terminal instance.

![Use the "Browser" button to capture traffic from independent browser instance](../images/get-started/get-started-open-browser.png)

As a result, Fiddler Everywhere starts an independent browser instance preconfigured to respect the Fiddler proxy and to trust its root CA. You can type an arbitrary URL, and the HTTPS traffic generated from its requests and response will immediately appear in Fiddler's Live Traffic grid.



## Choosing Default Browser

The independent browser capturing mode supports Chromium-based browsers like Google Chrome, Microsoft Edge, Brave, and Vivaldi. By default, Fiddler Everywhere will automatically detect if your system has installed Google Chrome or Microsoft Edge and will use one of them to start the independent browser instance. The Google Chrome browser will be the default choice of Fiddler if both browsers are available.

You can set your preferred browser through **Settings > Browsers > Manually choose path to browser**. By default, Fiddler will try to automatically detect the path to your locally installed Google Chrome browser, and if not present, it will search for the Microsoft Edge browser.



## Persisting Data

The independent browser capturing mode allows you to create a custom directory where the browser data persists. That way, you can reuse the same custom browser instance and easily keep settings and data like entered URLs, cookies, form data, authentication details, etc.

To use a browser instance that persists the input data:

1. Start Fiddler Everywhere.

1. Go to **Settings > Browsers**

1. From the **Browser Data** section, choose the **Persist data in a specific directory** option.

1. Choose a directory to save the custom browser instance.

1. Click on **save** to confirm the change.

Once the above change is applied, [the browser capturing mode](#capturing-browser-traffic) will reuse those settings for the newly started instances.


## Capturing from Other Browsers

While the independent browser capturing works only with Chromium-based browsers, Fiddler can capture traffic from virtually any browser application that respects the Fiddler proxy. To capture traffic from browsers like Safari, Mozilla Firefox, or even from Chromium browsers (that are not started as independent instances from within Fiddler Everywhere) then, you can use the Fiddler's [system capturing mode]({%slug capture-system-traffic%}) or the explicit capturing mode.
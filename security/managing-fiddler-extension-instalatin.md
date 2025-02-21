---
title: Installing and Enabling Fiddler Network Extension through MDM
description: "Interactive installation instructions of the Fiddler's network extension."
slug: fe-net-extension-installation
publish: true
position: 60
---

## Installing and Enabling Fiddler Network Extension through MDM

The Fiddler's [network capturing mode]({%slug capture-network-traffic%}) enables macOS users (Windwos support planned for near future) to install a dedicated network extension that can be configured to capture TCP traffic based on custom capturing rules.

The installation of the network extension can be trigged through the Fiddler's user interface. Alternatively, the Fiddler's network extension can be installed without user interaction thorugh the following identifiers:

```text
Team Identifier: CHSQ3M3P37
Extension Identifier:  com.progress-telerik.fiddler.fiddler-extension.systemextension
```

| Key      | Value 
|:-----------------|:----------------
| Team ID | CHSQ3M3P37
| App Bundle ID | com.progress-telerik.fiddler
| Extension Bundle ID | com.progress-Telerik.fiddler.fiddler-extension


## Enabling the Network Extension thorugh JAMF

To enable the system extension, execute the following steps:

- Within jamf PRO, navigate to **Computers** > **Configuration Profiles** > **New**.
- Create new configuration with the following information:
    * Select System Extensions.
    * Enter the Fiddler's team identifier: **CHSQ3M3P37**.
    * Enter the Fiddler's extension Bbundle identifier: **com.progress-Telerik.fiddler.fiddler-extension**.
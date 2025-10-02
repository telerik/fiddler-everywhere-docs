---
title: Installing and Enabling Fiddler Network Extension through MDM
description: "Interactive installation instructions of the Fiddler's network extension."
slug: fe-net-extension-installation
publish: true
position: 10
previous_url: /security/managing-fiddler-extension-instalation
---

# Installing and Enabling Fiddler Network Extension through MDM

The Fiddler's [network capturing mode](slug://capture-network-traffic) enables users to install a dedicated network extension that can be configured to capture TCP traffic based on custom capturing rules. You can trigger the installation of the network extension through the Fiddler's user interface by opening the **Network Capture** screen and clicking on **Enable Capture**. Alternatively, you can install the Fiddler's network extension without user interaction through the following identifiers:

| Key      | Value 
|:-----------------|:----------------
| Team Identifier | CHSQ3M3P37
| App Bundle Identifier | com.progress-telerik.fiddler
| Extension Bundle Identifier | com.progress-telerik.fiddler.fiddler-extension

## Enabling the Network Extension through JAMF

To enable the system extension, execute the following steps:

- Within jamf PRO, navigate to **Computers** > **Configuration Profiles** > **New**.
- Create a new configuration with the following information:
    * Select System Extensions.
    * Enter the Fiddler's team identifier: **CHSQ3M3P37**.
    * Enter the Fiddler's extension Bundle identifier: **com.progress-telerik.fiddler.fiddler-extension**.

To install the extension after installing the Fiddler Everywhere application, run the following command (note that the actual version of the PKG file might differ):
```sh
sudo installer -pkg Fiddler\ Everywhere\ 6.1.0.pkg -applyChoiceChangesXML install_extensions.xml -target /
```

Where the XML file install_extensions.xml has the following structure:
```XML
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<array>
           <dict>
                  <key>attributeSetting</key>
                  <integer>1</integer>
                  <key>choiceAttribute</key>
                  <string>selected</string>
                  <key>choiceIdentifier</key>
                  <string>com.progress-telerik.fiddler.fiddler-extension.systemextension.pkg</string>
            </dict>
</array>
</plist>
```
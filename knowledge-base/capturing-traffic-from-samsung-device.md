---
title: Capturing Traffic from Samsung Devices
description: "Learn how to install and trust the Fiddler CA certificate on Samsung devices"
type: how-to
slug: fe-samsung-device
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   | Fiddler Everywhere 6.0.0 and above | 
| Smartphone | Samsung with One UI 6 |

## Description

This article explains how to install and trust the Fiddler CA certificate on Samsung devices running One UI 6, enabling HTTPS traffic capture with Fiddler Everywhere.

## Solution

Follow these steps to capture HTTPS traffic from your Samsung device with Fiddler Everywhere:

1. **Install Fiddler Everywhere**  
   Download and install the Fiddler Everywhere application on your host computer (the machine that will capture the traffic).

2. **Enable Remote Connections in Fiddler Everywhere**  
   Open Fiddler Everywhere on your host computer. In the application, ensure that the **Allow remote devices to connect** option is enabled by checking the checkbox next to it.

3. **Connect Both Devices to the Same Network**  
   Ensure both your Samsung device and the host computer are connected to the same Wi-Fi network. The network should not have restrictions that block device-to-device communication.  
   >tip By default, Fiddler Everywhere uses TCP port 8866 for remote connections. Make sure this port is open.

4. **Start the "Connect Remote Devices" Wizard**  
   In Fiddler Everywhere, open the ["Connect Remote Devices" automated configuration wizard](slug://capture-mobile-android-traffic) to guide you through the setup.

5. **Install the Fiddler CA Certificate on Your Samsung Device**  
   When you reach the "Install CA Certificate" step in the wizard, do the following on your Samsung device:
   
   - Open **Settings** > **Security and Privacy** > **More security settings** > **Install from device storage** > **CA Certificate**.
   - Tap **Install Anyway** when prompted.
   - Enter your device PIN or password.
   - Navigate to the **Downloads** folder and select the Fiddler CA certificate file (usually named `FiddlerRoot.cer`).
   - Check the Fiddler CA certificate using the available checkbox.
   - Tap **Done** to complete the installation.

6. **Trust the Certificate**  
   After installation, ensure the certificate is trusted for network traffic. Some apps may not trust user-installed certificates due to Android security policies. For best results, test with browsers or apps that allow user certificates.

7. **Start Capturing Traffic**  
   Configure your Samsung device's Wi-Fi proxy settings to point to the host computer's IP address and port 8866. Begin capturing traffic in Fiddler Everywhere.

>tip Some applications, especially banking or security apps, may use certificate pinning and will not trust user-installed CA certificates. In such cases, HTTPS traffic from those apps cannot be decrypted by Fiddler.

## Troubleshooting

- If you do not see traffic from your Samsung device, double-check the proxy settings and ensure both devices are on the same network.
- Make sure the Fiddler CA certificate is correctly installed and trusted.
- Restart your Samsung device if the certificate does not appear in the trusted credentials list.

## Additional Resources

- [Capturing HTTPS Traffic from Android Devices](slug://capture-mobile-android-traffic)
- [Fiddler Everywhere Documentation](https://docs.telerik.com/fiddler-everywhere/)


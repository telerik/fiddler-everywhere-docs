---
title: Capturing Android Traffic
description: "Capture HTTPS traffic from Android devices while using the Fiddler Everywhere web-debugging proxy tool."
type: how-to
slug: capture-mobile-android-traffic
publish: true
position: 50
previous_url: /knowledge-base/configure-android, /get-started/mobile-traffic/configure-android, /get-started/traffic/configure-android, /traffic/configure-android
---

# Capturing Android Traffic

This article describes using Fiddler Everywhere to capture HTTPS traffic from Android devices and emulators. Fiddler Everywhere provides [step-by-step tutorial to automate the configuration of the Fiddler host and the remote Android device](#capturing-remote-android-traffic-automated). Additionally, you can follow the detailed guides to [manually configure real Android devices](#capturing-remote-android-traffic-manual-setup) or [Android emulators](#configuring-the-fiddler-proxy-on-android-emulator).

## Prerequisites

- Install the latest version of [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere).

- Connect an Android device to the same network or use an Android emulator on the Fiddler Everywhere host machine. Ensure that the machine on which Fiddler Everywhere and the Android device run is discoverable on the same network.

>important It's common for many company networks to be restricted by security tooling or administrative policies. To capture remote traffic, ensure that your system administrators are not limiting the network discovery and usage, or consider using a public hotspot for your Fiddler host and remote device.

## Capturing Remote Android Traffic (Automated)

Fiddler Everywhere offers an automated setup wizard to help you quickly configure remote Android traffic capturing:

1. Launch Fiddler Everywhere.
1. Navigate to the **Home** pane.
1. Select the **Remote Devices** screen.
1. Choose the **Android** tutorial and follow the on-screen instructions.

During the tutorial, you will need administrative privileges on the Android device to install the Fiddler certificate authority (CA) and configure the manual proxy settings. After completing these steps, you can immediately begin capturing HTTPS traffic from your Android device.

## Capturing Remote Android Traffic (Manual Setup)

### Configuring Fiddler Everywhere Host

1. Enable remote connections in Fiddler Everywhere by navigating to **Settings** > **Connections** and checking the **Allow remote devices to connect** option. For convenience, you can also enable **Keep it ON after app restart** to persist this setting across future sessions.
1. Determine the local IP address of the machine running Fiddler Everywhere. You can find this in the [connection status area at the lower right-hand corner](slug://connections-section) of the Fiddler Everywhere window, or by running the **ipconfig** (Windows) or **ifconfig** (macOS/Linux) command in your terminal. For example, let's assume your host machine's IP address is **192.168.100.50**.

>tip If you only need to capture traffic from a remote device, you do not need to install the Fiddler CA certificate on the Fiddler host machine. Simply download and install the Fiddler CA certificate on the remote device. Once the proxy is configured, Fiddler Everywhere will automatically capture and decrypt HTTPS traffic from the remote device.

### Configuring the Fiddler proxy on Android Device

The following steps apply to physical Android devices that are connected to the same network as the Fiddler Everywhere host machine.

1. **Install the Fiddler Certificate Authority (CA) on the Android device:**

    1. Open a mobile browser on your Android device and navigate to `http://<fiddler-host-IP>:8866` (replace `<fiddler-host-IP>` with the IP address of your Fiddler Everywhere host).
    1. Tap the option to download the CA certificate.
        >important Do not attempt to open the CA certificate file directly from the browser download prompt, as this may not trigger the installation process. Instead, follow the next steps to install it properly.
    1. Install the downloaded Fiddler CA certificate from your device storage. The exact location of this setting may vary by Android version, but it is typically found under **Settings** > **Security** > **Encryption and Credentials** > **Install a certificate** > **CA Certificate**.
        >tip The exact path may vary depending on your Android device manufacturer and model. For example, see the [knowledge base article for Samsung devices with One UI 6](slug://fe-samsung-device) for detailed installation steps specific to that platform.
    1. Verify that the Fiddler CA certificate is installed and trusted by checking **Settings** > **Security** > **Encryption & Credentials** > **Trusted Credentials** > **User** tab.

2. **Configure the Fiddler Everywhere proxy on the Android device:**

    1. Go to **Settings** > select your active Wi-Fi connection > **Proxy**.
    1. Choose **Manual proxy**.
        - Enter the IP address of the Fiddler Everywhere host (e.g., `192.168.100.50`).
        - Enter the Fiddler Everywhere proxy port (default is `8866`).

Once these steps are complete, you can capture traffic from your Android device’s browser. To test your setup:

1. Open **Google Chrome** (or any browser that respects proxy settings) on your Android device and navigate to [https://example.com](https://example.com).
1. Confirm that the HTTPS traffic appears in the Fiddler Everywhere application.

## Configuring the Fiddler proxy on Android Emulator

Android Virtual Devices (AVDs), also known as Android emulators, can be configured to use Fiddler Everywhere as a proxy by adjusting the network settings within the emulator, similar to a physical device. The key difference is that the proxy address for the emulator should be set to its loopback address. For most standard Android emulators, this address is `10.0.2.2`, but some third-party emulators may use a different loopback alias. Refer to your emulator's documentation if you are unsure.

To configure your Android emulator to capture traffic with Fiddler Everywhere:

1. Start the emulator, open the simulated Wi-Fi settings, tap **Settings**, and expand **Advanced Settings**.
1. Select **Edit** and expand **Advanced Settings**. On some older Android versions, you may need to touch and hold the name of the connected network, then tap **Modify**, and expand **Advanced Settings**.
1. Open the **Proxy** section and select **Manual proxy**.
    - Enter the emulator's loopback address as the proxy address (typically `10.0.2.2` for the native AVDs).
    - Enter the proxy port used by Fiddler Everywhere (default is `8866`, configurable in **Settings** > **Connections** > **Fiddler listens on port...**).
1. Install the Fiddler Everywhere root CA certificate on the emulator:
    1. Open a browser within the emulator and navigate to `http://ipv4.fiddler:8866` or `http://10.0.2.2:8866`.
    1. Download the CA certificate when prompted.
    1. Install the downloaded Fiddler CA certificate from device storage. The typical path is **Settings** > **Security** > **Encryption and Credentials** > **Install a certificate** > **CA Certificate** (the exact path may vary by Android version).
    1. Confirm that the Fiddler CA certificate appears as a user certificate under **Settings** > **Security** > **Encryption & Credentials** > **User** tab.

Once configured, you can capture traffic from your emulator’s browser. To verify your setup:

- In Fiddler Everywhere, ensure **Settings** > **Connections** > **Allow remote devices to connect** is enabled. Optionally, enable **Keep it ON after app restart** to persist this setting.
- On the emulator, open **Google Chrome** (or any browser that respects proxy settings) and navigate to [https://example.com](https://example.com).
- In Fiddler Everywhere, confirm that HTTP/HTTPS traffic from the emulator is being captured.

## Capture Mobile Browser Traffic

Once your remote Android device is configured, you can immediately begin capturing HTTP and HTTPS traffic from mobile browsers. For example, open Chrome (or any browser that respects proxy settings) on your Android device, navigate to any website, and watch the traffic appear in the **Live Traffic** grid in Fiddler Everywhere.

To easily distinguish traffic originating from your mobile device versus the Fiddler Everywhere host machine, use the **Client IP** column filter (by specifying the mobile device's IP address) or the **Process** column filter (by selecting the relevant device process name).

>important After you finish debugging, remember to remove the Wi-Fi proxy settings from your Android device to restore normal connectivity.

## Capture Mobile Application Traffic

Most production-ready applications block the use of user-installed certificates, preventing Fiddler Everywhere from completing the TLS handshake and decrypting their HTTPS traffic. However, if you are developing an application and have access to its source code, you can configure it to trust user-installed certificates. This allows you to capture and inspect its HTTP and HTTPS traffic with Fiddler Everywhere during development.

1. (For Android API 24 and later) Add the following code to the `Android/src/main/res/xml/network_security_config.xml` file:

    ```XML
    <?xml version="1.0" encoding="utf-8"?>
    <network-security-config>
        <base-config>
            <trust-anchors>
            <!-- Trust preinstalled CAs -->
            <certificates src="system" />
            <!-- HERE: Additionally trus user-added CAs -->
            <certificates src="user"/>
        </trust-anchors>
        </base-config>
    </network-security-config>
    ```

1. In the `AndroidManifest.xml_` file, reference the `network-security-config` from the previous step through a parameter in the `application` tag:

    ```XML
    android:networkSecurityConfig="@xml/network_security_config"
    ```

    For example:

    ```XML
        <application
            android:name="com.tns.NativeScriptApplication"
            android:allowBackup="true"
            android:icon="@drawable/icon"
            android:networkSecurityConfig="@xml/network_security_config">
            ...
    ```

1. Rebuild the application. Now you can start monitoring its HTTP/HTTPS traffic.

## Additional Resources

* [Directing localhost Requests from Mobile Application through the Fiddler Proxy](slug://fiddler-localhost-android)
* [Debugging Mobile Applications with Fiddler Everywhere (Webinar)](https://www.telerik.com/webinars/fiddler/how-to-debug-ios-and-android-mobile-apps-with-fiddler)

## Contact us

If you have more questions or need help configuring your iOS device alongside Fiddler Everywhere, you can contact our support team through the **Contact Support** option.
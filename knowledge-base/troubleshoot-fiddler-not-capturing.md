---
title: Troubleshooting Fiddler Everywhere Not Capturing Traffic
meta_title: Fix No Traffic Issues with Admin Rights, VPN, Zscaler, and More | Fiddler Everywhere
description: "Troubleshoot Fiddler Everywhere not capturing traffic. Fix issues with admin rights, VPN, Zscaler, security policies, certificate errors, and group policy."
type: how-to
slug: troubleshoot-no-traffic
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |  Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |
| Operating System | macOS, Windows, Linux |

## Description

If Fiddler Everywhere is running but not capturing HTTP(S) traffic, even when:

- The application is launched and running.
- The Fiddler root CA (certificate authority) is correctly installed.
- The chosen [capturing mode](slug://capture-traffic-get-started) is enabled.
- No active [filters](slug://how-to-filter-traffic) or [rules](slug://modify-traffic-get-started) are blocking traffic.

You may also see the message: _"It looks like you are unable to capture traffic. You might have a configuration issue - check our troubleshooting page for more information."_

This article provides a structured set of troubleshooting steps and solutions for the most common issues that prevent Fiddler Everywhere from capturing traffic.

## Before You Start: Quick Diagnostic Checklist

Work through this checklist first. Many capturing problems can be identified and resolved within minutes.

- **Check that a capturing mode is active.** The [system capturing mode](slug://capture-traffic-get-started#system-capturing) or an [alternative capturing mode](slug://capture-traffic-get-started) must be explicitly enabled. Look for the toggle in the top-left area of the Fiddler UI.
- **Verify the Fiddler CA certificate is installed and trusted.** Go to **Settings** > **HTTPS** and confirm that **Capture HTTPS Traffic** is checked and that the CA certificate is trusted in your OS certificate store.
- **Confirm no active filters are hiding traffic.** Open the **Traffic** pane and use **Clear All Filters** to rule out filters that may be suppressing the display of captured sessions.
- **Check that no active rules are blocking traffic.** Open **Rules** and confirm that no rules with a **DoNotShow** or **CloseNonGracefully** action are interfering. Note that the **Rules** tab includes a master switch—rules only execute when this switch is toggled **ON**.
- **If using system capturing mode, open your OS proxy settings and verify Fiddler is registered as the system proxy.** The default address is `127.0.0.1` and the default port is `8866`. See [Verifying proxy settings by OS](#verifying-proxy-settings-by-os) below. This check does not apply to [browser capturing](slug://capture-traffic-get-started#independent-browser-capturing) or [terminal capturing](slug://capture-traffic-get-started#independent-browser-capturing), which do not modify OS proxy settings.
- **Try capturing with an alternative mode.** If system capturing fails, test with [browser capturing](slug://capture-traffic-get-started#independent-browser-capturing) or [terminal capturing](slug://capture-traffic-get-started#independent-browser-capturing) to isolate whether the issue is system-proxy-specific.
- **Collect the Fiddler logs** for later analysis or for sharing with support. See [Collecting Fiddler Log Files](#collecting-fiddler-log-files).

## Common Causes and Solutions

The most frequent reasons Fiddler Everywhere fails to capture traffic:

- [Lack of administrative rights](#lack-of-administrative-rights) to set/unset the system proxy.
- [Incompatibility with VPN tools](#incompatibility-with-vpn-tools).
- [Incompatibility with security tools](#incompatibility-with-security-tools) (firewalls, antivirus, zero-trust tooling, security policies).
- [Conflicts with other system proxies](#incompatibility-with-other-preset-system-proxies).
- [Conflicts with third-party proxy tools](#incompatibility-with-third-party-proxy-tools).
- [Limited Internet connectivity](#limited-internet-connectivity).
- [Windows group policy restricting proxy settings](#windows-group-policy-proxysettingsperuser).
- [Fiddler CA certificate not trusted (ERR_CONNECTION_RESET)](#receiving-err_connection_reset-error).
- [Graphics driver incompatibility (white screen or failed startup)](#incompatibility-with-graphics-drivers).
- [No Internet access after Fiddler exits unexpectedly](#no-internet-connectivity-after-fiddler-exits).

## Lack of Administrative Rights

Fiddler Everywhere requires administrative rights to set and unset the operating system proxy settings. Without them, Fiddler cannot register itself as the system proxy.

**Troubleshooting:**

1. Start Fiddler Everywhere as an administrator (right-click the application icon and select **Run as Administrator** on Windows, or use `sudo` on macOS/Linux where needed).
2. [Enable system capturing mode](slug://capture-traffic-get-started#system-capturing).
3. Open your OS proxy settings and confirm that Fiddler has registered the manual proxy at `127.0.0.1:8866`.

If Fiddler does not register its proxy address, it likely lacks the required rights on your machine.

**Solution:**
- Reinstall Fiddler Everywhere using an administrator account.
- Alternatively, consult your system administrator to grant the necessary rights or use an [alternative capturing mode](slug://capture-traffic-get-started#independent-browser-capturing) that does not require system proxy changes.

## Incompatibility with VPN Tools

Some VPN clients modify network routing and proxy settings in ways that interfere with the Fiddler system proxy.

**Troubleshooting:**

1. Disconnect your VPN and test if Fiddler captures traffic normally.
2. Reconnect your VPN and test again.

If Fiddler works only when the VPN is disconnected, the VPN is the likely cause.

**Solutions:**

- **Bypass VPN for the Fiddler proxy:** Add your VPN server addresses to **Settings** > **Connections** > **Bypass Fiddler for URLs that start with** and save.
- **Use an alternative capturing mode:** [Browser capturing mode](slug://capture-traffic-get-started#independent-browser-capturing) or [terminal capturing mode](slug://capture-traffic-get-started#independent-browser-capturing) are often less affected by VPN tools.
- See also: [Configure VPN with Fiddler Everywhere](slug://configure-vpn-fiddler).

## Incompatibility with Security Tools

Firewalls, antivirus software, zero-trust agents, and enterprise security policies can prevent Fiddler from modifying proxy settings or block connections through the Fiddler proxy port.

**Troubleshooting:**

- Review your security tools and policies for restrictions on:
  - Proxy configuration (setting/unsetting system proxy)
  - Network access and port usage (default port: 8866)
  - Administrative rights and file system access
  - Access to [required Fiddler service endpoints](slug://first_steps_windows#prerequisites)

**Solutions:**

- Request your administrator to:
  - Allow Fiddler Everywhere to run with administrative rights.
  - Permit changes to the system proxy configuration.
  - Open the default proxy port (8866) in your firewall.
  - Ensure all [system requirements](slug://first_steps_windows#prerequisites) and required endpoints are accessible.
- **Use an alternative capturing mode:** [Browser capturing mode](slug://capture-traffic-get-started#independent-browser-capturing) or [terminal capturing mode](slug://capture-traffic-get-started#independent-browser-capturing) may bypass security tool restrictions.

**Known security tool configurations:**

- **Zscaler:** Zscaler acts as a network-level SSL inspection proxy and can conflict with the Fiddler system proxy. When Zscaler is active, it typically controls OS proxy settings via its forwarding profile and PAC script, preventing Fiddler from registering as the system proxy. Use Fiddler in [explicit proxy mode](slug://capture-traffic-get-started#explicit-capturing) with system capturing turned **OFF**, and configure the Zscaler forwarding profile to route traffic through Fiddler. See [Configuring Fiddler Everywhere alongside Zscaler](slug://fe-configure-zscaler) for step-by-step instructions.

## Incompatibility with Other Preset System Proxies

If your system already uses a proxy—such as a PAC script or an upstream corporate proxy—the Fiddler attempt to chain to it may fail, resulting in no captured traffic or loss of Internet access.

**Troubleshooting:**

- Temporarily remove the upstream proxy from OS proxy settings and test if Fiddler works.

**Solutions:**

- Configure the upstream proxy to accept connections from the Fiddler proxy address (`127.0.0.1:8866`).
- Adjust PAC scripts or proxy settings to allow Fiddler to chain to the upstream proxy.
- Consult your network administrator for help with chained proxy configurations.
- **Use an alternative capturing mode:** [Browser capturing mode](slug://capture-traffic-get-started#independent-browser-capturing) may work independently of system-proxy chains.

## Incompatibility with Third-Party Proxy Tools

Some proxy tools (such as Charles Proxy, mitmproxy, or similar) overwrite the Fiddler proxy settings when their capturing mode is enabled, instead of chaining to Fiddler.

**Troubleshooting:**

1. Enable system capturing in Fiddler Everywhere and confirm traffic is captured.
2. Start the third-party proxy tool and enable its capturing mode.
3. If Fiddler stops capturing, the third-party tool has overwritten the Fiddler proxy settings.

**Solutions:**

- Start the third-party proxy tool **before** enabling Fiddler Everywhere's system capture, so Fiddler can chain on top.
- Stop the third-party proxy tool before starting Fiddler.
- Configure the third-party tool to forward traffic through the Fiddler proxy (`127.0.0.1:8866`); check the tool's documentation for proxy-chaining options.
- **Use an alternative capturing mode:** [Browser capturing](slug://capture-traffic-get-started#independent-browser-capturing) or [terminal capturing](slug://capture-traffic-get-started#independent-browser-capturing) bypasses system-proxy conflicts.

## Limited Internet Connectivity

Fiddler Everywhere requires access to specific cloud endpoints for authentication and collaboration features. If those endpoints are blocked, you may see login errors or degraded functionality.

Required endpoints:

```txt
https://*.telerik.com/
https://*.getfiddler.com/
https://fiddler-backend-production.s3-accelerate.amazonaws.com
```

**Solutions:**

- Switch to a network that allows access to the above endpoints.
- Ask your IT administrator to whitelist the above endpoints.
- [Enterprise only] Consider the Fiddler offline mode (Windows only). Contact [Telerik Support](https://www.telerik.com/account/support-center) for details.

## Windows Group Policy: ProxySettingsPerUser

On Windows, an administrator may set the `ProxySettingsPerUser` group policy to `0`. This makes all user accounts share a single set of proxy settings (stored in `HKLM` instead of `HKCU`), which prevents Fiddler from modifying proxy settings without elevated rights.

**Symptoms:**

The `netcore.log` file (see [Accessing and Inspecting Fiddler Everywhere Log Files](slug://fiddler-log-files)) contains lines similar to:

```txt
[2020-06-19 08:09:18:109] [Information] [Fiddler] Fiddler.Network.AutoProxy> AutoProxy Detection failed.
[2020-06-19 08:09:18:109] [Information] [Fiddler] AutoProxy failed. Disabling for this network.
```

The registry key below contains a value named `ProxySettingsPerUser` set to `0`:

```txt
HKLM\SOFTWARE\Policies\Microsoft\Windows\CurrentVersion\Internet Settings\
```

**Solutions:**

- Run Fiddler Everywhere as administrator (right-click > **Run as Administrator**).
- Or ask your administrator to change the `ProxySettingsPerUser` registry value to `1`, or to delete the entry entirely to restore per-user proxy settings.

See also: [Resolving Incompatibility with Windows's ProxySettingsPerUser](slug://resolve-proxysettingsperuser-policy).

## Receiving ERR_CONNECTION_RESET Error

If **ERR_CONNECTION_RESET** appears only when Fiddler is running, the Fiddler CA certificate is most likely not correctly installed or trusted in your OS certificate store.

**Solution:**

1. In Fiddler Everywhere, go to **Settings** > **HTTPS** > **Advanced Settings** and click **Reset CA**.
2. Restart your client application and test again.

If the issue persists:

1. Open your OS certificate manager and remove all existing Fiddler CA certificates.
2. In Fiddler Everywhere, go to **Settings** > **HTTPS** and use **Trust CA Certificate in the User Store** (or **Trust CA Certificate in the Machine Store** for machine-wide trust).
3. Confirm that **Capture HTTPS Traffic** is enabled under **Settings** > **HTTPS**.

>tip This error can also appear in [browser capturing mode](slug://capture-browser-traffic). In that case, manually remove all Fiddler CA certificates from the browser's certificate store and reinstall them.

## Incompatibility with Graphics Drivers

Fiddler may fail to start, show a blank (white) screen, or crash immediately due to incompatible or outdated graphics drivers.

**Solutions:**

- Update your graphics drivers to the latest version from the official manufacturer source.
- Disable hardware acceleration by adding the following key to `%userprofile%\.fiddler\Settings\electron-settings.json`:

  ```json
  "disableHardwareAcceleration": true
  ```

  For more details, see [Troubleshooting Video Incompatibility](slug://troubleshoot-video-incompatibility).

## No Internet Connectivity After Fiddler Exits

By design, Fiddler Everywhere restores the original OS proxy settings when it closes. However, if the application or OS crashes unexpectedly, the Fiddler proxy settings can remain in the operating system configuration even after the application is no longer running (a "leaked proxy"). This results in complete loss of Internet access.

### Fix on Windows

1. Close Fiddler Everywhere (or reboot if it is already closed).
2. Open **Proxy Settings** (press **Start** and search for **Proxy Settings**).
3. Under **Manual proxy setup**, verify that the **Use a proxy server** toggle is off and that the **Address** and **Port** fields are empty. If the Fiddler address (`127.0.0.1:8866`) is still listed, clear it and save.
4. If your system used an upstream proxy before Fiddler, restore those settings now.

### Fix on macOS

1. Close Fiddler Everywhere (or reboot if it is already closed).
2. Go to **System Preferences** (or **System Settings** on macOS Ventura+) > **Network** and select your active Internet adapter.
3. Click **Advanced…** > **Proxies**.
4. Verify that the Fiddler proxy is not set for **Web Proxy (HTTP)** or **Secure Web Proxy (HTTPS)**. If `127.0.0.1:8866` is still listed, remove it from both fields, uncheck the proxy options, and click **Apply**.
5. Click **OK** to confirm.

### Fix on Ubuntu / Linux

1. Close Fiddler Everywhere (or reboot if it is already closed).
2. Go to **Settings** > **Network** > **Network Proxy**.
3. Ensure that the **Network Proxy** option is set to **Off** (or to your original default settings). If the Fiddler address is still listed under **Manual** proxy settings, remove it.

## Verifying Proxy Settings by OS

>important This section applies **only to system capturing mode**. When using [browser capturing](slug://capture-traffic-get-started#independent-browser-capturing) or [terminal capturing](slug://capture-traffic-get-started#independent-browser-capturing), Fiddler does not modify OS proxy settings and the steps below are not applicable.

After enabling system capturing mode, confirm that Fiddler has correctly registered as the system proxy:

### Windows

Go to **Start** > **Proxy Settings** > **Manual proxy setup** and verify that **Use a proxy server** is on with **Address: 127.0.0.1** and **Port: 8866**.

### macOS

Go to **System Preferences** (or **System Settings**) > **Network** > select your active adapter > **Advanced…** > **Proxies**. Confirm that both **Web Proxy (HTTP)** and **Secure Web Proxy (HTTPS)** are checked and point to `127.0.0.1:8866`.

If the settings are not applied, follow the steps in [Troubleshooting macOS Proxy Settings](slug://troubleshoot-mac-proxy-settings).

### macOS: Testing with cURL

To confirm that Fiddler is correctly proxying HTTPS traffic on macOS, run the following command in a terminal while Fiddler is open with HTTPS capturing enabled:

```sh
curl -v --url https://www.example.com/ -x 127.0.0.1:8866
```

In the output, look for a line like:

```txt
* issuer: OU=Created by http://www.fiddler2.com; O=Progress Telerik Fiddler; CN=Fiddler Root Certificate Authority
```

If this line is present and you see a corresponding session appear in the Fiddler **Live Traffic** tab, HTTPS capturing is working correctly.

If the issue persists, save all captured sessions via **File** > **Save Archive** > **All Sessions** and share them with [Telerik Support](slug://support) along with the log files.

### Ubuntu / Linux

Go to **Settings** > **Network** > **Network Proxy** and verify that the proxy is set to **Manual** with `127.0.0.1:8866` for HTTP and HTTPS when the Fiddler system capture is active.

## Collecting Fiddler Log Files

Log files are essential for diagnosing startup, proxy, certificate, and connectivity issues. Fiddler Everywhere generates two main log files:

- **`electron.log`**&mdash;Records startup events, connectivity checks, and update information.
- **`netcore.log`**&mdash;Records proxy configuration, certificate setup, login, and network operations.

**Access logs via the UI:** Go to **Help** > **Open Application Logs Folder**.

**Access logs manually:**

| OS | Log folder path |
|---|---|
| Windows | `%APPDATA%\Fiddler Everywhere\Logs` |
| macOS | `~/Library/Application Support/Fiddler Everywhere/Logs` |
| Linux | `~/.config/Fiddler Everywhere/Logs` |

**Enable verbose logging** to capture additional detail about network adapters and OS proxy state. Open `~/.fiddler/Settings/electron-settings.json` and add:

```json
"verboseLogging": true
```

For a full guide on using log files, see [Accessing and Inspecting Fiddler Everywhere Log Files](slug://fiddler-log-files).

## Other Known Issues and Scenarios

The following sections cover platform-specific issues that may prevent Fiddler from capturing traffic.

### macOS: Network Adapter Not Detected

macOS-specific configurations may prevent Fiddler from detecting the active network adapter, which causes it to fail to register as the system proxy. See [Testing Fiddler Network Access on macOS](slug://fiddler-test-network-access-macos) for a step-by-step diagnostic guide.

### macOS: Proxy Settings Not Restored After Reset

If the Fiddler proxy remains active after a reset or uninstall, [reset Fiddler Everywhere's settings to their defaults](slug://how-to-reset-fiddler-everywhere-settings-to-default) and then manually verify the proxy settings as described in [Troubleshooting macOS Proxy Settings](slug://troubleshoot-mac-proxy-settings).

### Application Fails to Start or Shows a White Screen

This can be caused by graphics driver issues. See [Incompatibility with Graphics Drivers](#incompatibility-with-graphics-drivers) above.

### Traffic Appears in Fiddler but HTTPS Sessions Show as Tunnels

This indicates that HTTPS decryption is not enabled or the Fiddler CA certificate is not trusted. Ensure **Settings** > **HTTPS** > **Capture HTTPS Traffic** is checked and that the CA certificate is trusted in the OS store.

### Fiddler Captures Some Apps but Not Others

Some applications use certificate pinning or their own certificate store (for example, Firefox, some Electron apps, Java-based apps). These applications will not trust the Fiddler CA certificate by default. You may need to:
- Manually import the Fiddler CA into the application's certificate store.
- Use the Fiddler **Browser Capturing** mode for Chromium-based browsers.
- Disable certificate pinning in development builds.

## Getting Support

If none of the above solutions resolve your issue, contact [Telerik Support Center](https://www.telerik.com/account/support-center) or open a [GitHub issue](https://www.telerik.com/support/fiddler-everywhere). When contacting support, include:

- A detailed description of the problem and steps to reproduce it, including screenshots if applicable.
- Technical details: operating system and version, security tools installed, VPN in use, any administrative restrictions.
- The [Fiddler Everywhere log files](#collecting-fiddler-log-files) (`electron.log` and `netcore.log`).

## See Also

- [Accessing and Inspecting Fiddler Everywhere Application's Log Files](slug://fiddler-log-files)
- [Resetting Fiddler Everywhere Settings to Default](slug://how-to-reset-fiddler-everywhere-settings-to-default)
- [Troubleshooting macOS Proxy Settings](slug://troubleshoot-mac-proxy-settings)
- [Troubleshooting HTTPS Capturing on macOS](slug://troubleshoot-capturing-traffic)
- [Troubleshooting macOS Trust Certificate Issues](slug://troubleshoot-certificate-error)
- [Resolving Incompatibility with Windows's ProxySettingsPerUser](slug://resolve-proxysettingsperuser-policy)
- [No Internet Connectivity after Closing Fiddler Everywhere](slug://fiddler-restore-internet)
- [Configure VPN with Fiddler Everywhere](slug://configure-vpn-fiddler)
- [Configuring Fiddler Everywhere alongside Zscaler](slug://fe-configure-zscaler)
- [Fiddler Support Options](slug://support)

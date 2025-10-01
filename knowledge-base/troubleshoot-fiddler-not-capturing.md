---
title: Troubleshoot Fiddler Everywhere Not Capturing Traffic
description: "Cases where Fiddler Everywhere might fail to capture your HTTP(S) traffic and steps to resolve them."
type: how-to
slug: troubleshoot-cno-traffic
publish: true
res_type: kb
---

# Troubleshooting Fiddler Everywhere Not Capturing Traffic

If Fiddler Everywhere is running but not capturing HTTP(S) traffic, even when:

- The application is launched and running.
- The Fiddler root CA (certificate authority) is correctly installed.
- The chosen [capturing mode](slug://capture-traffic-get-started) is enabled.
- No active [filters](slug://how-to-filter-traffic) or [rules](slug://modify-traffic-get-started) are blocking traffic.

And you see the message:  
_"It looks like you are unable to capture traffic. You might have a configuration issue - check our troubleshooting page for more information."_,

This article provides troubleshooting steps and solutions to help you identify and resolve common issues that may prevent Fiddler Everywhere from capturing traffic.

---

## Common Causes and Solutions

Below are the most frequent reasons Fiddler Everywhere may not act as a system proxy, along with troubleshooting steps and solutions:

- [Lack of administrative rights](#lack-of-administrative-rights) to set/unset the system proxy.
- [Incompatibility with VPN tools](#incompatibility-with-vpn-tools).
- [Incompatibility with security tools](#incompatibility-with-security-tools) (firewalls, antivirus, zero-trust tooling, security policies).
- [Conflicts with other system proxies](#incompatibility-with-other-preset-system-proxies).
- [Conflicts with third-party proxy tools](#incompatibility-with-third-party-proxy-tools).
- [Limited Internet connectivity](#limited-internet-connectivity).
- [Graphics driver incompatibility (white screen or failed startup)](#incompatibility-with-graphics-drivers).
- [Receiving "ERR_CONNECTION_RESET" error](#receiving-err_connection_reset-error).

---

## Lack of Administrative Rights

Fiddler Everywhere requires administrative rights to set and unset the operating system proxy settings.

**Troubleshooting:**

1. Start Fiddler Everywhere as an administrator.
2. [Enable system capturing mode](slug://capture-traffic-get-started#system-capturing).
3. Open your OS proxy settings and check if Fiddler sets the manual proxy (default: **127.0.0.1:8866**).

If Fiddler cannot set/unset the proxy, it likely lacks the necessary rights.

**Solution:**  
Reinstall Fiddler Everywhere with administrative rights or consult your system administrator.

---

## Incompatibility with VPN Tools

Some VPNs modify network settings, which can interfere with Fiddler's proxy.

**Troubleshooting:**

1. Test Fiddler Everywhere with your VPN disconnected.
2. Test again with the VPN connected.

If Fiddler only works when the VPN is off, the VPN is likely causing the issue.

**Solutions:**

- **Bypass VPN Servers:**  
  Add your VPN server addresses to **Settings > Connections > Bypass Fiddler for URLs that start with** and save.

- **Use Alternative Capturing Modes:**  
  Try [browser capturing mode](slug://capture-traffic-get-started#independent-browser-capturing-browser-capturing) or [terminal capturing mode](slug://capture-traffic-get-started#independent-browser-capturing-terminal-capturing) instead of system capturing.

---

## Incompatibility with Security Tools

Security tools or policies may block Fiddler's proxy configuration.

**Troubleshooting:**

- Audit your security tools and policies for restrictions on:
  - Proxy settings
  - Network access
  - Administrative rights
  - File system access
  - Access to [required Fiddler endpoints](slug://first_steps_windows#prerequisites)

**Solutions:**

- Ask your administrator to:
  - Allow Fiddler Everywhere to run with admin rights.
  - Permit proxy configuration.
  - Open the default proxy port (8866).
  - Ensure system requirements are met.

- **Use Alternative Capturing Modes:**  
  Try [browser capturing mode](slug://capture-traffic-get-started#independent-browser-capturing-browser-capturing) or [terminal capturing mode](slug://capture-traffic-get-started#independent-browser-capturing-terminal-capturing).

---

## Incompatibility with Other Preset System Proxies

Complex proxy setups (e.g., PAC scripts) may prevent Fiddler from chaining to the upstream proxy.

**Troubleshooting:**

- Test if Fiddler works after removing the upstream proxy from OS settings.

**Solutions:**

- Configure the upstream proxy to allow Fiddler's proxy (`127.0.0.1:8866`).
- Adjust PAC scripts or proxy settings as needed.
- Consult your network administrator.

- **Use Alternative Capturing Modes:**  
  Try [browser capturing mode](slug://capture-traffic-get-started#independent-browser-capturing-browser-capturing) or [terminal capturing mode](slug://capture-traffic-get-started#independent-browser-capturing-terminal-capturing).

---

## Incompatibility with Third-Party Proxy Tools

Some proxy tools overwrite Fiddler's proxy settings instead of chaining to them.

**Troubleshooting:**

1. Start Fiddler Everywhere and enable system capturing.
2. Confirm traffic is captured.
3. Start the third-party proxy tool and enable its capturing mode.

If Fiddler stops capturing, the third-party tool is likely overwriting the proxy settings.

**Solutions:**

- Start the third-party proxy tool **before** enabling Fiddler's system capture.
- Stop the third-party proxy tool before starting Fiddler.
- Configure the third-party tool to chain to Fiddler's proxy (`127.0.0.1:8866`).
- Check the tool's documentation for chaining options.
- **Use Alternative Capturing Modes:**  
  Try [browser capturing mode](slug://capture-traffic-get-started#independent-browser-capturing-browser-capturing) or [terminal capturing mode](slug://capture-traffic-get-started#independent-browser-capturing-terminal-capturing).

---

## Limited Internet Connectivity

Fiddler Everywhere requires access to certain endpoints for authentication and cloud features:

```curl
https://*.telerik.com/
https://*.getfiddler.com/
https://fiddler-backend-production.s3-accelerate.amazonaws.com
```

If these endpoints are blocked, you may see login errors.

**Solutions:**

- Use a network that allows access to these endpoints.
- [Enterprise only] Use Fiddler's offline mode (Windows only; contact support for details).

---

## Incompatibility with Graphics Drivers

Fiddler may fail to start or display a white screen due to incompatible graphics drivers.

**Solutions:**

- Update your graphics drivers from the official source.
- Disable hardware acceleration by adding `"disableHardwareAcceleration": true` to `%userprofile%\.fiddler\Settings\electron-settings.json`.  
  [Learn more...](slug://troubleshoot-video-incompatibility)

---

## Receiving AutoProxy Detection Failed Error

If your system uses the `ProxySettingsPerUser` group policy set to `0`, Fiddler needs admin rights to set the proxy for all users.

**Solutions:**

- Run Fiddler Everywhere as administrator.
- Change the registry entry value to `1` or remove `ProxySettingsPerUser`.  
  [Learn more...](slug://resolve-proxysettingsperuser-policy)

---

## Receiving ERR_CONNECTION_RESET Error

If you see **ERR_CONNECTION_RESET** only when using Fiddler, it often means the Fiddler CA certificate is not installed correctly.

**Solution:**

1. In Fiddler Everywhere, go to **Settings > HTTPS > Advanced Settings**.
2. Click **Reset CA**.
3. Restart your client application and try again.

If the issue persists:

1. Remove all Fiddler CA certificates from your OS certificate manager.
2. Reinstall the CA via **Settings > HTTPS > Trust CA Certificate in the User Store** or via **Settings > HTTPS > Trust CA Certificate in the Machine Store**.
3. Enable the HTTPS capturing via **Settings > HTTPS > Capture HTTPS Traffic** option.

>tip This error may also appear in [browser capturing mode](slug://capture-browser-traffic). In that case, manually remove all Fiddler CA certificates and reinstall.

---

## Other Scenarios

If you still cannot resolve your issue:

- Contact [Telerik Support Center](https://www.telerik.com/account/support-center) or [GitHub issues](https://www.telerik.com/support/fiddler-everywhere).
- Provide:
  - A detailed description and reproduction steps/screenshots.
  - Technical details (OS, security tools, VPNs, admin limitations, etc.).
  - [Fiddler Everywhere log files](slug://fiddler-log-files).

---

### Testing macOS Network Access

macOS-specific configurations may prevent Fiddler from detecting the active network adapter. See [this KB article](slug://fiddler-test-network-access-macos) for troubleshooting.

---

## See Also

- [Accessing and Inspecting Fiddler Everywhere Application's Log Files](slug://fiddler-log-files)
- [Resetting Fiddler Everywhere Settings to Default](slug://how-to-reset-fiddler-everywhere-settings-to-default)
- [Troubleshooting macOS Proxy Settings](slug://troubleshoot-mac-proxy-settings)
- [Troubleshooting macOS Trust Certificate Issues](slug://troubleshoot-certificate-error)
- [Fiddler Support Options](slug://support)

---
title: Managed App Configuration
description: "Using the Managed App Configuration feature to disable specific Fiddler Everywhere features like remote connections, changing ports, cloud services, and others."
slug: fe-restrict-policies
publish: true
position: 40
---

# Managed App Configuration

Fiddler Everywhere is often used in secure corporate environments where IT administrators need to enforce specific configurations and restrictions. The **Fiddler Everywhere Enterprise** tier provides a **Managed App Configuration** feature, allowing administrators to centrally control and lock down various application settings on both macOS and Windows devices.

With Managed App Configuration, IT teams can:

- Enforce security and compliance policies.
- Restrict or hardcode application features.
- Prevent end users from modifying critical settings.
- Streamline deployment and configuration across large organizations.

## App Configuration on macOS

IT teams managing macOS systems can apply app configuration using their preferred device management solution (such as Jamf, Intune, or similar) by setting the following keys:

| Key Name | Description | Value Type | Value Example |
|:-------------------------------|:------------------------------------------------------|:----------------|:----------------|
| `DefaultProxyPort` | Sets the default proxy port for Fiddler Everywhere. Users can change this value unless restricted. | integer | A number between 0 and 65535 |
| `DisableProxyPortChange` | Prevents users from changing the proxy port. | integer | 1 |
| `DefaultBypassList` | Sets the default proxy bypass list. Endpoints listed here always bypass Fiddler and use the upstream proxy. | string | URLs separated by `;` |
| `DisableBypassListChange` | Prevents users from changing the bypass list. | integer | 1 |
| `DisableAllowRemoteDevicesToConnect` | Disables remote device connections to the Fiddler proxy. | integer | 1 |
| `DisableAnalytics` | Disables Fiddler's analytics. | integer | 1 |
| `DisableCloud` | Disables all cloud interactions (sharing, storing, and receiving data via Fiddler's cloud). | integer | 1 |
| `DefaultNetworkCaptureList` | Whitespace-separated list of CIDR addresses and port numbers for network capturing mode. | string | `"0.0.0.0/0:443 ::/0:443"` |
| `DefaultNetworkCaptureFilterList` | Whitespace-separated list of process IDs or names to capture in network mode. | string | `"13008 \"Google Chrome\""` |
| `DisableNetworkCaptureSettingsChange` | Prevents users from modifying network capturing settings. | integer | 1 |
| `DisableVpnHostBypass` | Disables Fiddler's automatic VPN bypass. | integer | 1 |
| `CustomCACertificate` | DER-encoded base64 string of a custom certificate. | string | `<base64-cert>` |
| `CustomCACertificatePrivateKey` | DER-encoded base64 string of the private key. | string | `<base64-private-key>` |
| `DisableMCP` | Enables or disables the Fiddler Everywhere MCP server | integer | `1` |
| `DefaultSanitizationSettings` | JSON object defining default sanitization configuration. All properties are optional; omitted properties use Fiddler Everywhere defaults. | string | See the JSON structure [here](slug://fe-sanitization#defaultsanitizationsettings-json-structure)|
| `DisableSanitizationSettingsUpdate` | Locks sanitization settings to prevent user modifications. Set to `1` to enable, `0` to disable. | integer | `1` |
| `DisableAssistant` | Enables or disables the Fiddler Everywhere MCP server | integer | `1` |
| `DefaultAssistantSettings` | Sets the default settings (LLM provider, API key, and model) of the the Debugging Assistant | string | `{"provider": "anthropic","providerApiKey": "my-api-key","model": "claude-sonnet-4-20250514"}`  |
| `DisableAssistantSettingsUpdate` | Enables or disables the option to update the settings of the Debugging Assistant | integer | `1` |

>important Even with **DisableCloud** enabled, users still need access to [required Fiddler Everywhere API endpoints](slug://first_steps_windows#prerequisites). For environments with limited internet access, consider using [Fiddler's offline mode](https://www.telerik.com/blogs/offline-mode-fiddler-everywhere).

**MDM Profile Values:**

| Key | Value |
|:---------------------|:----------------|
| Team ID | CHSQ3M3P37 |
| App Bundle ID | com.progress-telerik.fiddler |
| Extension Bundle ID | com.progress-telerik.fiddler.fiddler-extension |

### Example: Disabling Remote Device Connections

To restrict Fiddler Everywhere to local usage only and prevent remote devices from connecting:

```sh
defaults write com.progress-telerik.fiddler DisableAllowRemoteDevicesToConnect 1
```

### Example: Setting the Default Proxy Port

To set the default proxy port to 8899:

```sh
defaults write com.progress-telerik.fiddler DefaultProxyPort -integer 8899
```

### Example: Setting the Default Network Capture List

To apply a default network capture list with multiple [CIDR addresses](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing):

```sh
defaults write com.progress-telerik.fiddler DefaultNetworkCaptureList "0.0.0.0/0:443 ::/0:443 0.0.0.0/0:8084 ::/0:8084 127.0.0.1/8:4200 ::1/128:4200"
```

### Example: Forcing Default Network Capture List Values

The `DefaultNetworkCaptureList` key sets the initial default values for network capturing mode. However, if users have already set custom values, these defaults will not override them.  
To enforce the defaults and prevent users from making changes, also set the `DisableNetworkCaptureSettingsChange` policy:

```sh
defaults write com.progress-telerik.fiddler DefaultNetworkCaptureList "0.0.0.0/0:443 ::/0:443 0.0.0.0/0:8084 ::/0:8084 127.0.0.1/8:4200 ::1/128:4200"
defaults write com.progress-telerik.fiddler DisableNetworkCaptureSettingsChange 1
```

## App Configuration on Windows

IT teams managing Windows systems can apply app configuration keys using their preferred administrative tooling by setting values in the following registry path:

```txt
HKEY_CURRENT_USER\SOFTWARE\Policies\Progress\Fiddler Everywhere
```

>tip Fiddler Everywhere supports both **HKEY_CURRENT_USER** and **HKEY_LOCAL_MACHINE**. If configuration values are present in both locations, the app will prioritize those set in **HKEY_LOCAL_MACHINE**.

| Key Name | Description | Registry Value Type | Value Example |
|:-------------------------------|:------------------------------------------------------|:----------------|:----------------|
| `DefaultProxyPort` | Sets the default proxy port for Fiddler Everywhere. Users can change this value unless restricted. | DWORD-32 (decimal) | A number between 0 and 65535 |
| `DisableProxyPortChange` | Prevents users from changing the proxy port. | DWORD-32 (hexadecimal) | 1 |
| `DefaultBypassList` | Sets the default proxy bypass list. Endpoints listed here always bypass Fiddler and use the upstream proxy. | REG_SZ (string) | URLs separated by `;` |
| `DisableBypassListChange` | Prevents users from changing the bypass list. | DWORD-32 (hexadecimal) | 1 |
| `DisableAllowRemoteDevicesToConnect` | Disables remote device connections to the Fiddler proxy. | DWORD-32 (hexadecimal) | 1 |
| `DisableAnalytics` | Disables Fiddler's analytics. | DWORD-32 (hexadecimal) | 1 |
| `DisableCloud` | Disables all cloud interactions (sharing, storing, and receiving data via Fiddler's cloud). | DWORD-32 (hexadecimal) | 1 |
| `DefaultNetworkCaptureList` | Whitespace-separated list of CIDR addresses and port numbers for network capturing mode. | REG_SZ (string)| `"0.0.0.0/0:443 ::/0:443"` |
| `DefaultNetworkCaptureFilterList` | Whitespace-separated list of process IDs or names to capture in network mode. |REG_SZ (string) | `"13008 \"Google Chrome\""` |
| `DisableNetworkCaptureSettingsChange` | Prevents users from modifying network capturing settings. | DWORD-32 (hexadecimal) | 1 |
| `DisableVpnHostBypass` | Disables Fiddler's automatic VPN bypass. | DWORD-32 (hexadecimal) | 1 |
| `CustomCACertificate` | DER-encoded base64 string of a custom certificate. | REG_SZ (string) | `<base64-cert>` |
| `CustomCACertificatePrivateKey` | DER-encoded base64 string of the private key. | REG_SZ (string) | `<base64-private-key>` |
| `DisableMCP` | Enables or disables the Fiddler Everywhere MCP server | DWORD-32 (hexadecimal) | `1` |
| `DefaultSanitizationSettings` | JSON object defining default sanitization configuration. All properties are optional; omitted properties use Fiddler Everywhere defaults. |  REG_SZ (string) | See the JSON structure [here](slug://fe-sanitization#defaultsanitizationsettings-json-structure) |
| `DisableSanitizationSettingsUpdate` | Locks sanitization settings to prevent user modifications. Set to `1` to enable, `0` to disable. |  REG_DWORD | `0x00000001` (1) |
| `DisableAssistant` | Enables or disables the Fiddler Everywhere MCP server | DWORD-32 | `1` |
| `DefaultAssistantSettings` | Sets the default settings (LLM provider, API key, and model) of the the Debugging Assistant | REG_SZ (string) | `{"provider": "anthropic","providerApiKey": "my-api-key","model": "claude-sonnet-4-20250514"}`  |
| `DisableAssistantSettingsUpdate` | Enables or disables the option to update the settings of the Debugging Assistant | DWORD-32 | `1` |

By leveraging these configuration options, IT administrators can ensure Fiddler Everywhere is deployed securely and consistently across their organization, while maintaining control over critical settings and features.

For more details on each configuration key or for troubleshooting, refer to the [Fiddler Everywhere documentation](https://docs.telerik.com/fiddler-everywhere/).

## See Also

* [Applyiing sanitizaion for captured traffic in Fiddler Everywhere](slug://fe-sanitization)
* [Enabling and disabling the Fiddler Everywhere MCP server](slug://fiddler-mcp-server)
* [Not capturing traffic due to group policy](slug://resolve-proxysettingsperuser-policy)
* [Policies for managing access and usage of the Fiddler MCP server](slug://fiddler-mcp-server#mcp-access-policies)
* [Policies for managing access and usage of the Fiddler Debugging Asistant](slug://fiddler-assistantr#debugging-assistant-access-policies)
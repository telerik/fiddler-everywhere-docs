---
title: Managed App Configuration
description: "Using the Managed App Configuration feature to disable specific Fiddler Everywhere features like remote connections, changing ports, cloud services, and others."
slug: fe-restrict-policies
publish: true
position: 40
---

# Managed App Configuration

Users of Fiddler Everywhere often work in a secure corporate environment where specific configurations are imposed. That means that administrators need to have options to limit or hardcode particular features of the Fiddler Everywhere application. With the **Fiddler Everywhere Enterprise** tier and its **Managed App Configuration** feature, administrators can control a set of functionalities through device management solutions/software on macOS and Windows.

## App Configuration on macOS

IT teams managing macOS systems can apply app configuration through the preferred administrative tooling (like Jamf, Intune, etc.) using the following keys:

| Key Name    | Description | Value Type |  Value to apply the key
|:-----------------|:----------------|:----------------|:-----------------
| **DefaultProxyPort** | Sets the proxy port on which Fiddler Everywhere will try to start its proxy server. Value can be changed by users.  | integer  | A number between 0 and 65535
| **DisableProxyPortChange** | Disables the change of the Fiddler proxy port.  | integer  | 1
| **DefaultBypassList** | Sets the default proxy bypass list. All listed endpoints will always bypass the Fiddler proxy and use the upstream proxy instead.   | string  | Add URLs with “;” in between
| **DisableBypassListChange** | Disables the change of the proxy bypass list. | integer  | 1
| **DisableAllowRemoteDevicesToConnect** | Disables the option for remote devices to connect and use the Fiddler proxy. | integer  | 1
| **DisableAnalytics** | Disables Fiddler's analytics  | integer  | 1
| **DisableCloud** | Disables all interactions with the Fiddler Everywhere's cloud. This includes sharing, storing data in the cloud, and receiving data that was shared with the current user through our cloud.  | integer  | 1
| **DefaultNetworkCaptureList** | A whitespace-separated list of CIDR (Classless Inter-Domain Routing) addresses plus port number values. Applicable only on macOS with the network capturing mode | string | A string that contains CIDR addresses separated by a white space |
| **DefaultNetworkCaptureFilterList** | A whitespace-separated list of process IDs or process name values. When set, the network mode will capture only traffic from these processes. | string | A string that contains CIDR addresses separated by a white space 
| **DisableNetworkCaptureSettingsChange** | Disables the option to modify all settings within the network capturing mode | integer | 1

>important Even with the **DisableCloud** in place, users need access to [the required Fiddler Everywhere API endpoints]({%slug first_steps_windows%}#prerequisites). If your environment has limited internet access, consider using [Fiddler's offline mode](https://www.telerik.com/blogs/offline-mode-fiddler-everywhere).

The following values are needed to set the mobile device management profile correctly:

| Key      | Value 
|:-----------------|:----------------
| Team ID | CHSQ3M3P37
| App Bundle ID | com.progress-telerik.fiddler
| Extension Bundle ID | com. progress-Telerik.fiddler.fiddler-extension

### DisableAllowRemoteDevicesToConnect Example Usage

Example for applying the app configuration through the **defaults** command. Note that we are using **defaults** for demonstration purposes only - in real-life scenarios, administrators will use security tooling and other configuration utilities.
```sh
defaults write com.progress-telerik.fiddler DisableAllowRemoteDevicesToConnect 1
```
The above restricts Fiddler Everywhere to local usage only and restricts remote devices from finding and using the Fiddler proxy.

### DefaultProxyPort Example Usage

Example for applying the **DefaultProxyPort** key. The value must be set as an integer:
```sh
defaults write com.progress-telerik.fiddler DefaultProxyPort -integer 8899
```
The above explicitly sets the Fiddler Everywhere default proxy port to port 8899.

### DefaultNetworkCaptureList Example Usage

Example for applying the **DefaultNetworkCaptureList** key with multiple [CIDR addresses](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing). The value must be set as a string:
```sh
defaults write com.progress-telerik.fiddler DefaultNetworkCaptureList "0.0.0.0/0:443 0.0.0.0/0:8084"
```

## App Configuration on Windows

IT teams managing Windows systems can apply app configuration keys through the preferred administrative tooling using the following Fiddler's registry path:

```
HKEY_CURRENT_USER\SOFTWARE\Policies\Progress\Fiddler Everywhere
```

>tip Fiddler Everywhere support both **HKEY_CURRENT_USER** and **HKEY_LOCAL_MACHINE**. If Fiddler's entities are present in both destinations, the app will preferably use the ones set in **HKEY_LOCAL_MACHINE**.

| Key Name        | Description | Regedit Value Type |  Value to apply the key
|:-----------------|:----------------|:----------------|:-----------------
| **DefaultProxyPort** | Sets the proxy port on which Fiddler Everywhere will try to start its proxy server. Value can be changed by users. | DWORD-32 (decimal)  | A number between 0 and 65535
| **DisableProxyPortChange** | Disables the change of the default proxy port.  | DWORD-32 (hexadecimal)  | 1
| **DefaultBypassList** | Sets the default proxy bypass list. All listed endpoints will always bypass the Fiddler proxy and use the upstream proxy instead.  | String Value  | Add URLs with “;” in between
| **DisableBypassListChange** | Disables the change of the proxy bypass list. | DWORD-32 (hexadecimal)  | 1
| **DisableAllowRemoteDevicesToConnect** | Disables the option for remote devices to connect and use the Fiddler proxy. | DWORD-32 (hexadecimal)  | 1
| **DisableAnalytics** | Disables Fiddler's analytics  | DWORD-32 (hexadecimal)  | 1
| **DisableCloud** | Disables all interactions with the Fiddler Everywhere's cloud. This includes sharing, storing data in the cloud, and receiving data that was shared with the current user through our cloud.  | DWORD-32 (hexadecimal)  | 1

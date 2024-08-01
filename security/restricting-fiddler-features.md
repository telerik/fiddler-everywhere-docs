---
title: Restricting Fiddler
description: "Using the Enterprise policy feature to disable specific Fiddler Everywhere features like remote connections, changing ports, cloud services, and others."
slug: fe-restrict-policies
publish: true
position: 40
---

# Restricting Fiddler

Users of Fiddler Everywhere often work in a secure corporate environment where specific configurations are imposed. That means that administrators need to have options to limit or hardcode particular features of the Fiddler Everywhere application. With the Fiddler Everywhere Enterprise tier, administrators can control a set of functionalities through device management solutions/software on macOS and Windows.

## Restricting Features on macOS

Users on macOS with administrative privileges can set the following policies through the preferred administrative tooling (like Jamf, Intune, etc.)

| Policy Name      | Description | Value Type |  Value to apply the policy
|:-----------------|:----------------|:----------------|:-----------------
| **DefaultProxyPort** | Sets the default proxy port for Fiddler Everywhere to use as a proxy port.  | integer  | A number between 0 and 65535
| **DisableProxyPortChange** | Disables the change of the Fiddler proxy port.  | integer  | 1
| **DefaultBypassList** | Sets the default proxy bypass list. All listed endpoints will always bypass the Fiddler proxy and use the upstream proxy instead.   | string  | Add URLs with “;” in between
| **DisableBypassListChange** | Disables the change of the proxy bypass list. | integer  | 1
| **DisableAllowRemoteDevicesToConnect** | Disables the option for remote devices to connect and use the Fiddler proxy. | integer  | 1
| **DisableAnalytics** | Disables Fiddler's analytics  | integer  | 1
| **DisableCloud** | Disables all interactions with the Fiddler Everywhere's cloud. This includes sharing, storing data in the cloud, and receiving data that was shared with the current user through our cloud.  | integer  | 1

>important Even with the policy **DisableCloud** in place, users need access to [the required Fiddler Everywhere API endpoints]({%slug first_steps_windows%}#prerequisites). If your environment has limited internet access, consider using [Fiddler's offline mode](https://www.telerik.com/blogs/offline-mode-fiddler-everywhere).

The following values are needed to set the mobile device management profile correctly:

| Key      | Value 
|:-----------------|:----------------
| Team ID | CHSQ3M3P37
| App Bundle ID | com.progress-telerik.fiddler
| Extension Bundle ID | com. progress-Telerik.fiddler.fiddler-extension


Example for setting a policy through the **defaults** command. Note that we are using **defaults** for demonstration purposes only - in real-life scenarios, administrators will use security tooling and other configuration utilities.
```sh
defaults write com.progress-telerik.fiddler DisableAllowRemoteDevicesToConnect 1
```
The above restricts Fiddler Everywhere to local usage only and restricts remote devices from finding and using the Fiddler proxy.


Example for setting the **DefaultProxyPort** policy. The value must be set as an integer:
```sh
defaults write com.progress-telerik.fiddler DefaultProxyPort -integer 8899
```
The above explicitly sets the Fiddler Everywhere default proxy port to port 8899.

## Restricting Features on Windows

Users on Windows with administrative privileges can set custom security configurations by setting the listed policies in the following Fiddler's registry path: 

Registry path for Fiddler Everywhere: **HKEY_CURRENT_USER\SOFTWARE\Policies\Progress\Fiddler Everywhere**

>tip Fiddler Everywhere support both **HKEY_CURRENT_USER** and **HKEY_LOCAL_MACHINE**. If Fiddler's entities are present in both destinations, the app will preferably use the ones set in **HKEY_LOCAL_MACHINE**.


| Policy          | Description | Regedit Value Type |  Value to apply the policy
|:-----------------|:----------------|:----------------|:-----------------
| **DefaultProxyPort** | Sets the default proxy port for Fiddler Everywhere to use as a proxy port. | DWORD-32 (decimal)  | A number between 0 and 65535
| **DisableProxyPortChange** | Disables the change of the default proxy port.  | DWORD-32 (hexadecimal)  | 1
| **DefaultBypassList** | Sets the default proxy bypass list. All listed endpoints will always bypass the Fiddler proxy and use the upstream proxy instead.  | String Value  | Add URLs with “;” in between
| **DisableBypassListChange** | Disables the change of the proxy bypass list. | DWORD-32 (hexadecimal)  | 1
| **DisableAllowRemoteDevicesToConnect** | Disables the option for remote devices to connect and use the Fiddler proxy. | DWORD-32 (hexadecimal)  | 1
| **DisableAnalytics** | Disables Fiddler's analytics  | DWORD-32 (hexadecimal)  | 1
| **DisableCloud** | Disables all interactions with the Fiddler Everywhere's cloud. This includes sharing, storing data in the cloud, and receiving data that was shared with the current user through our cloud.  | DWORD-32 (hexadecimal)  | 1

An example of added policies in the Windows registry.
![regedit Fiddler keys](../images/security/restrict-fid-win.png)

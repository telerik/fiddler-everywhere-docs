---
title: Accessing and Inspecting Application Log Files
description: "Learn how to access and inspect the Fiddler Everywhere application log files."
type: how-to
slug: fiddler-log-files
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |  Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |

## Description

The Fiddler Everywhere client is an electron application that depends on modifying the local network configuration to capture traffic. How can I access the generated log files to investigate potential problems that might prevent the client from working correctly?

## Solution

* [Application log files](#logging-files)
* [Accessing the logs thorugh the Fiddler's user interface](#accessing-the-logs-through-the-ui)
* [Accesising the logs manually](#accessing-the-logs-manually)
* [Enable verbose logging](#enabling-verbose-logs)
* [Using the `electron.log` file](#using-the-electronlog-file)
* [Using the `netcore.log` file](#using-the-netcorelog-file)

### Logging Files

The Fiddler Everywhere application generates the following log files:
- [`electron.log`](#setting-the-electronlog-file)&mdash;The file logs the basic operations needed for the electron application to start up properly.
- [`netcore.log`](#setting-the-netcorelog-file)&mdash;The file logs the operations done by the Fiddler core logic; for example, applying the proxy settings, trust certificate setup, login process, and more.

Both log files are useful to investigate cases where the client is not working properly. The location of these files varies depending on the operating system on which Fiddler Everywhere is working.

### Accessing the Logs through the UI

Fiddler Everywhere version 1.3.0 and later provides a UI option through **Help** > **Open Application Logs Folder** to automatically open the folder that contains the log files.

![Fiddler Everywhere log files](../images/kb/logs/log-files.png)

### Accessing the Logs Manually

Alternatively, you can manually navigate to the folder on your operating system and obtain the Fiddler Everywhere log files. Manual extraction of the logs can be useful in scenarios where your Fiddler Everywhere client is not starting at all, or you can't access the UI.

* The log files on macOS are available in the following folder:

    ```Console
    ~/Users/<CURRENT-USER-HERE>/Library/Application Support/Fiddler Everywhere/Logs
    ```

* The log files on Windows are available in the following folder:

    ```Console
    %APPDATA%\Fiddler Everywhere\Logs
    ```

* The log files on Linux are available in the following folder:

    ```Console
    ~/.config/Fiddler Everywhere/Logs
    ```

### Enabling Verbose Logs

The verbose logging adds additional information about accessing the network adapters and the operating system proxy. Use that information to debug possible issues with setting Fiddler as a system proxy. To enable verbose logs, open the `electron-settings.json` file (located in `~/.fiddler/Settings`) and the following key pair:

```JSON
"verboseLogging": true
```

### Using the electron.log File

The `electron.log` file will output info, warnings, and errors related to the startup of the application, its connectivity, and the availability of later versions.

The following example demonstrates the content of the `electron.log` file.

```C
[2020-09-23 08:52:18:403] [info] App resume triggered.
[2020-10-01 23:41:20:053] [info] [Product information] Fiddler Everywhere 1.0.2
[2020-10-01 23:41:20:200] [info] [System information] Darwin mcsofnilievn 18.7.0 Darwin Kernel Version 18.7.0: Mon Apr 27 20:09:39 PDT 2020; root:xnu-4903.278.35~1/RELEASE_X86_64 x86_64
[2020-10-01 23:41:20:335] [info] Initializing splash screen.
[2020-10-01 23:41:23:089] [info] Attempting to run server - 5 attempts left.
[2020-10-01 23:41:23:090] [info] Calculating the URL of ASP.NET Server application.
[2020-10-01 23:41:23:090] [info] Generating random port.
[2020-10-01 23:41:23:091] [info] Trying to start server at port [21977].
[2020-10-01 23:41:24:420] [info] Fetching .NET Core server status.
[2020-10-01 23:41:24:534] [info] Application successfully connected to .NET Core server [21977].
[2020-10-01 23:41:24:535] [info] Loading application in window.
[2020-10-01 23:41:24:564] [info] Getting the URL of Angular application.
[2020-10-01 23:41:24:608] [info] Starting the app without a deep link.
[2020-10-01 23:41:24:608] [info] Maximizing application window.
[2020-10-01 23:41:26:273] [info] Destroying splash screen.
[2020-10-01 23:41:26:371] [info] Checking for update
[2020-10-01 23:41:26:946] [info] Found version 1.1.0 (url: Fiddler Everywhere-1.1.0-mac.zip, Fiddler Everywhere 1.1.0.dmg)
[2020-10-01 23:41:26:947] [info] Downloading update from Fiddler Everywhere-1.1.0-mac.zip, Fiddler Everywhere 1.1.0.dmg
[2020-10-01 23:41:26:970] [info] Cached update sha512 checksum doesnt match the latest available update. New update must be downloaded. Cached: qOe6O6UEQ5Kg4vODxxJNqf+HasNIpc685+DGmVxtzY2qOWvTo6AfO91wxoP+tlVDRCP0JoafXhGLf14NrZhMWg==, expected: XUVk02rJe8tRC3Nh7vx638XUbgPIRVQr12SGK+L+8WDBA7EpPLdnV7xL6EOSW9kZFiv/apviLmVs/AANVvdg9Q==. Directory for cached update will be cleaned
[2020-10-01 23:41:42:458] [info] Checking for update
[2020-10-01 23:41:50:840] [info] Found version 1.1.0 (url: Fiddler Everywhere-1.1.0-mac.zip, Fiddler Everywhere 1.1.0.dmg)
[2020-10-01 23:41:50:841] [info] Downloading update from Fiddler Everywhere-1.1.0-mac.zip, Fiddler Everywhere 1.1.0.dmg
[2020-10-01 23:41:50:854] [info] No cached update info available
[2020-10-01 23:42:33:586] [info] All windows closed.
[2020-10-01 23:42:33:597] [info] Closing server...
[2020-10-01 23:42:33:622] [info] Application exited with code 0.
```

### Using the netcore.log File

The `netcore.log` file will output info, warnings, and errors related to the network operations, the login process, the trust certificate setup, the user quota initialization, and so on.

The following example demonstrates the content of the `netcore.log` file.

```C
[2020-10-06 13:49:55:025] [Information] [Angular] Requesting shared item ID.
[2020-10-06 13:49:55:039] [Information] [Angular] The app will be loaded without navigating to a shared item.
[2020-10-06 13:49:55:047] [Information] [Angular] SignalR HubConnection connected successfully.
[2020-10-06 13:49:55:088] [Information] [Angular] WebSocket opened ws://localhost:51488/ws/sessionListData
[2020-10-06 13:49:55:091] [Information] [Angular] Has Internet Access during the user service creation: true.
[2020-10-06 13:49:55:506] [Information] [Angular] CleverTap analytics successfully initialized.
[2020-10-06 13:49:55:516] [Information] [Angular] Successfully set anonymous user information in CleverTap.
[2020-10-06 13:49:55:518] [Information] [Angular] Logged out from the amplify SDK.
[2020-10-06 13:49:55:539] [Information] [Angular] Starting a new backend logout.
[2020-10-06 13:49:55:551] [Information] [Angular] Backend logout successfully finished.
[2020-10-06 13:49:57:226] [Critical] [Angular] Uncaught (in promise): [object Undefined]
[2020-10-06 13:50:01:957] [Information] [Angular] Logged in from the amplify SDK.
[2020-10-06 13:50:01:957] [Information] [Angular] Token assumed as outdated or risky.
[2020-10-06 13:50:01:958] [Information] [Angular] Received id Token. Had existing tokens: 'false'. Is new token: 'true'. Index in history: '0'. Total tokens in history: '1'.
[2020-10-06 13:50:01:962] [Information] [Angular] Will try to refresh users token
[2020-10-06 13:50:02:312] [Information] [Angular] Starting a new backend login.
[2020-10-06 13:50:02:312] [Information] [Angular] New idToken successfully taken.
[2020-10-06 13:50:02:312] [Information] [Angular] Received id Token. Had existing tokens: 'true'. Is new token: 'true'. Index in history: '0'. Total tokens in history: '2'.
[2020-10-06 13:50:02:314] [Information] [NETCore] Initializing user specific directories.
[2020-10-06 13:50:02:349] [Information] [NETCore] Initializing settings service.
[2020-10-06 13:50:02:351] [Information] [NETCore] Ensuring latest settings.
[2020-10-06 13:50:02:352] [Information] [NETCore] Loading transcoders.
[2020-10-06 13:50:02:403] [Information] [NETCore] Initializing certificates manager.
[2020-10-06 13:50:02:503] [Information] [NETCore] Initializing proxy manager.
[2020-10-06 13:50:02:503] [Information] [NETCore] Starting proxy manager.
[2020-10-06 13:50:04:345] [Information] [NETCore] Logging to backend service.
[2020-10-06 13:50:04:351] [Information] [NETCore] Creating new backend SDK instance.
[2020-10-06 13:50:04:363] [Information] [NETCore] Getting UserClient instance.
[2020-10-06 13:50:04:600] [Information] [NETCore] Getting the user info.
[2020-10-06 13:50:05:591] [Information] [NETCore] Getting JamSessionsClient instance.
[2020-10-06 13:50:05:593] [Information] [NETCore] Getting RuleSetsClient instance.
[2020-10-06 13:50:05:593] [Information] [NETCore] Getting SnapshotClient instance.
[2020-10-06 13:50:05:593] [Information] [NETCore] Getting ComposerCollectionClient instance.
[2020-10-06 13:50:05:594] [Information] [NETCore] Getting QuotaClient instance.
[2020-10-06 13:50:05:594] [Information] [NETCore] Getting LicenseClient instance.
[2020-10-06 13:50:05:594] [Information] [NETCore] Getting AccountClient instance.
[2020-10-06 13:50:05:594] [Information] [NETCore] Getting SubscriptionClient instance.
[2020-10-06 13:50:05:595] [Information] [NETCore] Getting NotificationObservable instance.
[2020-10-06 13:50:05:760] [Information] [NETCore] Initializing composer collections service.
[2020-10-06 13:50:06:016] [Information] [NETCore] Updating local quotas.
[2020-10-06 13:50:06:289] [Information] [Angular] Backend login successfully finished.
[2020-10-06 13:50:06:496] [Information] [Angular] WebSocket opened ws://localhost:51488/ws/uiState
[2020-10-06 13:50:06:595] [Information] [Angular] Successfully set current user information in CleverTap.
[2020-10-06 13:50:07:609] [Information] [NETCore] Getting downloaded composer collections.
[2020-10-06 13:50:08:295] [Warning] [Angular] Returning a null notification message.
[2020-10-06 13:50:08:295] [Warning] [Angular] Unable to process notification with type 'SnapshotDeleted'
[2020-10-06 13:50:08:295] [Warning] [Angular] Unable to process notification with type 'SnapshotDeleted'
[2020-10-06 13:50:08:295] [Warning] [Angular] Returning a null notification message.
[2020-10-06 13:50:08:297] [Warning] [Angular] Returning a null notification message.
[2020-10-06 13:50:08:297] [Warning] [Angular] Unable to process notification with type 'SnapshotDeleted'
[2020-10-06 13:50:08:298] [Warning] [Angular] Returning a null notification message.
[2020-10-06 13:50:08:298] [Warning] [Angular] Unable to process notification with type 'SnapshotDeleted'
[2020-10-06 13:50:08:320] [Information] [NETCore] Getting downloaded composer collections.
[2020-10-06 13:50:08:789] [Information] [Fiddler] !SecureClientPipeDirect failed: System.IO.IOException Authentication failed because the remote party has closed the transport stream. for pipe (CN=*.jamfcloud.com, O=DO_NOT_TRUST_BC, OU=Created by http://www.fiddler2.com)
[2020-10-06 13:50:12:491] [Information] [Fiddler] !SecureClientPipeDirect failed: System.IO.IOException Authentication failed because the remote party has closed the transport stream. for pipe (CN=*.jamfcloud.com, O=DO_NOT_TRUST_BC, OU=Created by http://www.fiddler2.com)
[2020-10-06 13:50:15:858] [Information] [Fiddler] !ERROR - Fiddler Acceptor failed to AcceptConnection: System.ObjectDisposedException Cannot access a disposed object.
Object name: 'System.Net.Sockets.Socket'.
```

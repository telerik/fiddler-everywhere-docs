---
title: Resolving Graphics Incompatibility Issues
description: "Test and resolve video driver incompatibility issue that prevent the proper startup of Fiddler Everywhere."
type: how-to
slug: troubleshoot-video-incompatibility
publish: true
res_type: kb
---


## Environment

|   |   |
|---|---|
| Product   |
| Product Version | Fiddler Everywhere 5.1.0 and above  |


## Description

I've installed the latest version of Fiddler Everywhere, but it fails to start, or it starts with a broken UI like a hanging splash screen, an empty white screen, etc. How can I troubleshoot and resolve the issue?

## Solution

One probable reason for the above issues to manifest is incompatibilities between the installed graphics drivers and the Electron framework (which is used to create the UI of the Fiddler Everywhere). To resolve the issue, you can try to update your graphics driver. The issue was previously reported to appear with some NVIDIA video cards (like Quadro) alongside specific driver versions.


### Disabling Hardware Acceleration (Automatically)


During the application startup, Fiddler Everywhere automatically tries to detect issues related to compatibility with the graphic drivers. If such an issue is detected, an automated process will show a native dialog with the following content: _“It seems there are problems with the application rendering, which the hardware acceleration might cause. Do you want to disable hardware acceleration for Fiddler Everywhere and try again?_. If you select **“Yes”**, the application restarts immediately in compatibility mode with disabled hardware acceleration.


### Disabling Hardware Acceleration (Manually)

You can explicitly turn off the hardware acceleration through a boolean flag called `disableHardwareAcceleration` in the `electron-settings.json` file. Fiddler will use a software output device for rendering in the CPU when the hardware acceleration is explicitly disabled.

- Open the following folder 

  _On Windows_
  ```bash
  %userprofile%\.fiddler\Settings\electron-settings.json
  ```

  _On macOS or Linux_
  ```bash
  ~/.fiddler/Settings/electron-settings.json
  ```

- Add the bellow key-value pair to disable the hardware acceleration and force software rendering instead.
    ```JSON
    "disableHardwareAcceleration" : true
    ```

As a result, the `electron-settings.json` file should look similar to the one shown below:
```JSON
{
  "autoUpdateSettings": {
    "downloadedUpdateVersion": "5.0.0"
  },
  "firstUsage": "Tue, 31 Oct 2023 13:17:25 GMT",
  "firstUsageOfVersion": {
    "date": "Tue, 07 Nov 2023 09:43:35 GMT",
    "version": "5.1.0-2023-11-07-092412-release"
  },
  "windowsState": {
    "main": {
      "x": -8,
      "y": -8,
      "width": 2064,
      "height": 1128,
      "isMaximized": true,
      "zoomFactor": 1.2000000000000002
    }
  },
  "firstSignIn": "Tue, 31 Oct 2023 13:17:34 GMT",
  "lastLogs": 1699349888126,
  "disableHardwareAcceleration" : true
}
```
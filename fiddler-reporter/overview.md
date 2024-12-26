---
title: Overview
description: "Try the free Fiddler Reporter standalone cross-platform desktop tool HTTP-request proxy and use it to capture and export HTTP(S) traffic from any browser, system, or platform."
slug: fiddler-reporter-overview
publish: true
position: 0
---

# Fiddler Reporter

Progress® Telerik® Fiddler Reporter is a cross-platform desktop tool that monitors and logs all HTTPS traffic and issues requests between a computer and the Internet. It lets you quickly capture, save, and export HTTPS traffic on any machine without explicit installation. It's free to use and doesn't require a Fiddler Everywhere license. As such, it can be used on any computer, including third-party devices, test devices, servers, and any other compatible Windows or macOS device. The primary purpose of the Fiddler Everywhere Reporter is to serve as an extension tool of the Fiddler Everywhere application that aims to capture traffic on the end user (remote) and share it with a user holding an active license for Fiddler Everywhere.

## Download Fiddler Reporter

The latest version of the Fiddler Reporter can be downloaded from the official download link. The tool is free to use and doesn't require a Fiddler Everywhere license. 

## Prerequisites

- A device with Windows 10 x64 (version 22H2 or newer patch version), Windows 11 x64, Windows Server 2016 (or newer), or macOS version 11 (or newer).

- An account with administrative rights to install the Fiddler certificate authority (CA) and to set/unset system proxy.

## Login and License

The Fiddler Reporter is a free tool that requires no login or licenses.

## Using Fiddler Reporter

Any user can download Fiddler Reporter and start it immediately without an explicit installation. After the tool loads, you can choose and start the preferred [capturing mode]({%slug reporter-features%}) to log the targeted HTTPS traffic. Once the capture is complete, the Fiddler Reporter tool presents the option to save the captured traffic as an SAZ file (also known as a Fiddler archive). The SAZ archive will contain a snapshot of all captured HTTPS sessions, which, at any point, can be loaded in Fiddler Everywhere.

Example for basic usage of the Fiddler Reporter application:

1. Download the Fiddler Reporter.

1. Start the application by clicking on the downloaded artifact.

1. Click on the **Start Capturing Browser** button.

 >tip The **Start Capturing Browser** is the default option that captures HTTPS traffic from a sandboxed browser instance. The reporter starts an independent browser instance (Google Chrome or MS Edge) that is preconfigured to respect the Fiddler proxy and trust its certificate authority (CA). If you aim to capture traffic from another client, you can use other [capturing modes]({%slug reporter-features%}).

1. Capture the targeted traffic in the sandboxed browser instance opened from the Fiddler Reporter tool.

1. Click on the **Stop Capture** button. 

1. Click on the **Save Capture** option, set a password, and choose a location to store your SAZ file.

That's it! You have now captured, saved, and exported the web traffic as a Fiddler archive (SAZ). As a next step, a licensed Fiddler user can load the SAZ archive in the Fiddler Everywhere desktop application, where the traffic can be inspected, analyzed, replayed, and modified according to your needs.
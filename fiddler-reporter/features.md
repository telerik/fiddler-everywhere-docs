---
title: Features
description: "Using the different capturing modes in the Fiddler Everywhere Reporter tool and learning more about the available configuration options."
slug: reporter-features
publish: true
position: 10
---

# Fiddler Everywhere Reporter Features

The Fiddler Everywhere Reporter presents several capturing modes to best suit different environment scenarios. The application also provides options to configure the default browser instance, control the Fiddler certificate authority (CA) file installation, and set additional capturing settings.

## Capturing Modes

The Fiddler Everywhere Reporter has four different capturing modes, which you can use depending on your needs and environment. The options are as follows:

- [**Start Capturing Browser**](#capturing-browser-option) - this option in Reporter corresponds to the browser capturing mode in Fiddler Everywhere. It captures traffic from a sandboxed browser instance.

- [**Start Capturing Everything**](#capturing-everything-option) - this option corresponds to the system capturing mode. It sets the Fiddler Everywhere Reporter proxy as the operating system upstream proxy. This option requires the explicit instalation and trust of the Fiddler certificate authroity file.

- [**Start Capturing Terminal**](#capturing-terminal-option) - this option corresponds to the terminal capturing mode. It captures traffic from a sandboxed terminal instance.

- [**Manual Setup (Advanced)**](#manual-setup-option) - this option corresponds to the explicit capturing mode. You can use this option to configure a specific client application alongside the Fiddler Everywhere Reporter proxy address and port. This option requires the explicit installation and trust of the Fiddler certificate authority file.

### Capturing Browser Option

The **Start Browser Capturing** is the default option that allows HTTPS traffic to be captured from a sandboxed browser instance. As a result, the Fiddler Everywhere Reporter starts an independent browser instance preconfigured to respect the Fiddler proxy and
trust its Root Certificate Authority (CA). The HTTPS traffic generated will appear in Fiddler Everywhere
Reporter. Currently, the tool supports independent browser capturing only for Chrome and Edge browsers. The Google Chrome browser opens by default if both exist on the machine. MacOS users need to manually quit the browser instance from the dock even after the Fiddler Everywhere Reporter tool is closed.

Use the browser option as follows:

1. Start the Fiddler Everywhere Reporter application.

1. Click on the **Start Capturing Browser** button.

1. Capture the targeted traffic in the sandboxed browser instance opened from the Fiddler Everywhere Reporter tool.

1. Click on the **Stop Capture** button. 

1. Click the **Save Capture** option, set a password, and choose a location to store your SAZ file.

### Capturing Everything Option

The **Start Capturing Everything** option will log all HTTP, HTTPS, WebSocket, SSE, and gRPC traffic between the
computer and the Internet. It works by setting the system proxy and capturing all incoming and outgoing
traffic from any application that supports a proxy - browsers, desktop applications, CLI tools, etc. This
option requires installing and trusting the operating system's Fiddler Root Certificate Authority (CA).

Use the capture everything option as follows:

1. Start the Fiddler Everywhere Reporter application.

1. Click the **Start Capturing Everything** button (available through a drop-down).

    >warning If that is your first time using this mode, then you will need to export and install the Fiddler certificate authority file explicitly while using [the **Certificate > Trust Root Certificate** option](#configuring-the-fiddler-certificate) or by manualy exporting and installing the Fiddler CA.

1. Capture the targeted traffic from the targeted client application.

1. Click on the **Stop Capture** button. 

1. Click the **Save Capture** option, set a password, and choose a location to store your SAZ file.

### Capturing Terminal Option

The **Start Capturing Terminal** option will launch a new, clean terminal instance and route traffic only from this
instance through Fiddler Everywhere Reporter. It will open PowerShell on Windows and the default Terminal
on Mac. The option currently supports capturing traffic from cURL, Node.js, and Python out of the box. If you need to capture traffic from .NET applications, you must manually install and trust the Fiddler Root Certificate Authority (through the **Tools** menu). The terminal capturing mode lets you use the proxy in a sandboxed environment without changing the global OS proxy settings.

Use the capturing terminal option as follows:

1. Start the Fiddler Everywhere Reporter application.

1. Click on the **Start Capturing Terminal** button.

1. Capture the targeted traffic in the sandboxed terminal instance opened from the Fiddler Everywhere Reporter tool.

1. Click on the **Stop Capture** button. 

1. Click on the **Save Capture** option, set a password, and choose a location to store your SAZ file.

### Manual Setup Option

When this mode is selected, Fiddler Everywhere Reporter will start listening to the address and port printed next to the
**Details** switch. The address can be copied and used to specify the proxy registry setting of your application and
manually configure it to send incoming and outgoing traffic to Fiddler Everywhere Reporter. In addition, the
Fiddler Root Certificate must be trusted from the Tools menu or manually exported and trusted.

Use the manual setup  option as follows:

1. Configure your client application to use the Fiddler proxy address (127.0.0.1), port (8877).

1. To capture and decrypt secure traffic (HTTPS), export and install the Fiddler CA certificate within your client applicaiton.

1. Start the Fiddler Everywhere Reporter application.

1. Click on the **Manual Setup (Advanced)** button.

1. Capture the targeted traffic from your client application. At this point, the application should already respect the Fiddler Everywhere Reporter proxy address, port, and certificate.

1. Click on the **Stop Capture** button. 

1. Click the **Save Capture** option, set a password, and choose a location to store your SAZ file.

## Tools

Use the **Tools** section within the application menu to set the default browser (for the [**Start Capturing Browser**](#capturing-browser-option) option) and to explicitly allow remote devices to connect.

- **Default Browser** - This option allows you to set the default browser that Fiddler Everywhere Reporter should use to create a sandboxed browser instance. Currently, Google Chrome and Microsoft Edge are supported browsers.

- **Allow Remote Devices to Connect** - Controls whether inbound connections to Fiddler Everywhere Reporter are allowed. Enable this option to capture traffic from remote devices. Behind the scenes, the option opens (or closes) the Fiddler Everywhere Reporter port for inbound connections on the host machine.

## Configuring the Fiddler Certificate

Use the **Certificate** section within the application menu to trust, export, reset, and remove the Fiddler certificate authority (CA) or ignore server certificate errors. The options are as follows:

- **Trust CA Certificate** - Installs and trusts the Fiddler root certificate authority (CA) in one of the following certificate stores:
    * **in the User Store** of the operating system certificate manager.
    * **in the Machine Store** of the operating system certificate manager.

- **Export CA Certificate** - Exports the Fiddler Everywhere Reporter CA to your `Desktop` folder. The format varies depending on the operating system. 

- **Remove CA цertificate** - Removes the currently trusted CA from the OS certificate store. 

- **Reset CA Certificate** - Removes the currently trusted CA, generates a new one, and trusts it.

- **Capture HTTPS Traffic** -  Configures Fiddler Reporter to capture secure HTTP traffic (it requires an installed and trusted certificate).

- **Ignore Server Certificate Errors (unsafe)** - Configures Fiddler Everywhere Reporter to automatically ignore all server certificate errors.

## Hiding and Showing Captured Data

The Fiddler Everywhere Reporter tool automatically shows up for each captured HTTP(S) session by default. To capture the session privately, toggle OFF the **Details** switch (located at the top-right corner of the application).
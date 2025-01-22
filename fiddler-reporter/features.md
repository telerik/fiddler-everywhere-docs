---
title: Features
description: "Using the different capturing modes in the Fiddler Reporter tool and learning more about the available configuration options."
slug: reporter-features
publish: true
position: 10
---

# Fiddler Reporter Features

The Fiddler Reporter presents several capturing modes to best suit different environment scenarios. The application also provides options to configure the default browser instance, control the Fiddler certificate authority (CA) file installation, and set some additional capturing settings.

## Capturing Modes

The Fiddler Reporter has four different capturing modes, which you can use depending on your needs and environment. The options are as follows:

- [**Start Capturing Browser**](#capturing-browser-option) - this option in Reporter corresponds to the browser capturing mode in Fiddler Everywhere. It captures traffic from a sandboxed browser instance.

- [**Start Capturing Everything**](#capturing-everything-option) - this option corresponds to the system capturing mode. It sets the Fiddler Reporter proxy as the operating system upstream proxy. This option requires the explicit instalation and trust of the Fiddler certificate authroity file.

- [**Start Capturing Terminal**](#capturing-terminal-option) - this option corresponds to the terminal capturing mode. It captures traffic from a sandboxed terminal instance.

- [**Manual Setup (Advanced)**](#manual-setup-option) - this option corresponds to the explicit capturing mode. You can use this option to configure a specific client application alongside the Fiddler Reporter proxy address and port. This option requires the explicit installation and trust of the Fiddler certificate authority file.

### Capturing Browser Option

The **Start Browser Capturing** is the default option that allows traffic to be captured from a sandboxed browser instance. As a result, Fiddler Reporter starts an independent browser instance preconfigured to respect the Fiddler proxy and
to trust its Root Certificate Authority (CA). The HTTPS traffic generated will appear in Fiddler Everywhere
Reporter. Currently, the tool supports independent browser capturing only for Chrome and Edge browsers. If
both exist on the machine, Chrome will be opened by default. MacOS users need to manually quit the browser instance from the dock even after the Fiddler Reporter tool is closed.

Use the browser option as follows:

1. Start the Fiddler Reporter application.

1. Click on the **Start Capturing Browser** button.

1. Capture the targeted traffic in the sandboxed browser instance opened from the Fiddler Reporter tool.

1. Click on the **Stop Capture** button. 

1. Click the **Save Capture** option, set a password, and choose a location to store your SAZ file.

### Capturing Everything Option

The **Start Capturing Everything** option will log all HTTP, HTTPS, WebSocket, SSE, and gRPC traffic between the
computer and the Internet. It works by setting the system proxy and capturing all incoming and outgoing
traffic from any application that supports a proxy - browsers, desktop applications, CLI tools, etc. This
option requires installing and trusting the operating system's Fiddler Root Certificate Authority (CA).

Use the capture everything option as follows:

1. Start the Fiddler Reporter application.

1. Click the **Start Capturing Everything** button (available through a drop-down).

    >warning If that is your first time using this mode, then you will need to export and install the Fiddler certificate authority file explicitly while using [the **Certificate > Trust Root Certificate** option](#configuring-the-fiddler-certificate) or by manualy exporting and installing the Fiddler CA.

1. Capture the targeted traffic from the targeted client application.

1. Click on the **Stop Capture** button. 

1. Click the **Save Capture** option, set a password, and choose a location to store your SAZ file.

### Capturing Terminal Option

The **Start Capturing Terminal** option will launch a new, clean terminal instance and route traffic only from this
instance through Fiddler Everywhere Reporter. It will open PowerShell on Windows and the default Terminal
on Mac. The option currently supports capturing traffic from cURL, Node.js, and Python out of the box. If you
need to capture traffic from .NET applications, it is required to install and trust the Fiddler Root
Certificate Authority manually (these options can be found in the Tools menu). The terminal capturing mode allows
the proxy to be used in a sandboxed environment without changing the global OS proxy settings.

Use the capturing terminal option as follows:

1. Start the Fiddler Reporter application.

1. Click on the **Start Capturing Terminal** button.

1. Capture the targeted traffic in the sandboxed terminal instance opened from the Fiddler Reporter tool.

1. Click on the **Stop Capture** button. 

1. Click on the **Save Capture** option, set a password, and choose a location to store your SAZ file.

### Manual Setup Option

When this mode is selected, Fiddler Everywhere Reporter will start listening on the port printed next to the
“Details” label. The address can be copied and used to specify the proxy registry setting of your application and
manually configure it to send incoming and outgoing traffic to Fiddler Everywhere Reporter. In addition, the
Fiddler Root Certificate must be trusted from the Tools menu or manually exported and trusted.

Use the manual setup  option as follows:

1. Configure your client application to use the Fiddler proxy address (127.0.0.1), port (8877).

1. To capture and decrypt secure traffic (HTTPS), export and install the Fiddler CA within your client applicaiton.

1. Start the Fiddler Reporter application.

1. Click on the **Manual Setup (Advanced)** button.

1. Capture the targeted traffic from your client application. Note that at this point, the application should already respect the Fiddler Reporter proxy address, port and certificate.

1. Click on the **Stop Capture** button. 

1. Click on the **Save Capture** option, set a password, and choose a location to store your SAZ file.

## Tools

Use the **Tools** section within the application menu to set the default browser (for the [**Start Capturing Browser**](#capturing-browser-option) option) and to explicitly allow remote devices to connect.

- **Default Browser** - Allows you to set the default browser which Fiddler Reporter should use to createa a sandboxed browser instance. Currently, the supported browsers are Google Chrome and Microsoft Edge.
- **Allow Remote Devices to Connect** - Controls whether inbound connections to Fiddler Reporter are allowed. Enable this option to capture traffic from remote devices. Behind the scenes, the option opens (or closes) the Fiddler Reporter port for inbound connections on the host machine.

## Configuring the Fiddler Certificate

Use the **Certificate** section within the application menu to trust, export, reset, and remove the Fiddler certificate authority (CA) or ignore server certificate errors. The options are as follows:

- **Trust Root Certificate** - Installs and trusts the Fiddler root certificate authority (CA) in the **user store** of the operating system certificate manager.
- **Export Root Certificate** - Exports the Fiddler Reporter CA on your `Desktop` folder. The format varies depending on the operating system. 
- **Remove Certificate** - Removes the currently trusted CA from the OS certificate store. 
- **Reset Root Certificate** - Removes the currently trusted CA, generates a new one, and trusts it.
- **Ignore Server Certificate Errors (unsafe)** - Configure Fiddler Reporter to ignore all server certificate errors automatically.


---
title: Fiddler Reporter Features
description: "Using the different capturing modes in the Fiddler Reporter tool and learning more about the available configuration options."
slug: reporter-features
publish: true
position: 10
---

# Fiddler Reporter Features

The Fiddler Reporter presents several capturing modes to best fit different environment scenarios. The application also provides options to manually configure the default browser instance, explicitly generate export, and install the Fiddler certificate authority (CA) file, plus some additional capturing settings.

## Capturing Modes

The Fiddler Reporter has four different capturing modes, which you can use depending on your needs and environment. The options are as follows:

- Capturing Browser - this option corresponds to the browser capturing mode. It captures traffic from a sandboxed browser instance.

- Capturing Everything - this option corresponds to the terminal capturing mode. It captures traffic from a sandboxed terminal instance.

- Capturing Terminal - this option corresponds to the system capturing mode. It sets the Fiddler Reporter proxy as the operating system upstream proxy. This option requires the explicit instalation and trust of the Fiddler certificate authroity file.

- Manual Setup (Advanced)- this option corresponds to the explicit capturing mode. You can use this option to configure a specific client application alongside the Fiddler Reporter proxy address and port. This option requires the explicit installation and trust of the Fiddler certificate authority file.

### Capturing Browser Option

The **Start Browser Capturing** is the default option that allows traffic to be captured from a sandboxed browser instance. As a result, Fiddler Reporter starts an independent browser instance preconfigured to respect the Fiddler proxy and
to trust its Root Certificate Authority (CA). The HTTPS traffic generated will appear in Fiddler Everywhere
Reporter. Currently, the tool supports independent browser capturing only for Chrome and Edge browsers. If
both exist on the machine, Chrome will be opened by default. Currently, there is no way to configure the
launch of Edge if both are on the machine. If the user has not installed Chrome or Edge,
the tool will display an error message that the browser option can’t be started.
Note - users on Mac need to manually quit the browser instance from the dock even after the Fiddler Reporter tool is closed.

### Capturing Everything Option

The **Capturing Everything** option will log all HTTP, HTTPS, WebSocket, SSE, and gRPC traffic between the
computer and the Internet. It works by setting the system proxy and capturing all incoming and outgoing
traffic from any application that supports a proxy - browsers, desktop applications, CLI tools, etc. This
option requires installing and trusting the operating system's Fiddler Root Certificate Authority (CA).

### Capturing Terminal Option

The **Capturing Terminal** option will launch a new, clean terminal instance and route traffic only from this
instance through Fiddler Everywhere Reporter. It will open PowerShell on Windows and the default Terminal
on Mac. The option currently supports capturing traffic from cURL, Node.js, and Python out of the box. If you
need to capture traffic from .NET applications, it is required to install and trust the Fiddler Root manually
Certificate Authority (these options can be found in the Tools menu). The terminal capturing mode allows
the proxy to be used in a sandboxed environment without changing the global OS proxy settings.

### Manual Setup Option

When this mode is selected, Fiddler Everywhere Reporter will start listening on the port printed next to the
“Details” label. The address can be copied and used to specify the proxy registry setting of your application and
manually configure it to send incoming and outgoing traffic to Fiddler Everywhere Reporter. In addition, the
Fiddler Root Certificate must be trusted from the Tools menu or manually exported and trusted.

## Tools

## Configuring the Fiddler Certificate
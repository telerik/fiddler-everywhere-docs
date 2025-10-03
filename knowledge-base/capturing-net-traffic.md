---
title: Capturing .NET Traffic
description: "Configure .NET applications to respect the Fiddler proxy and capture their HTTPS traffic."
type: how-to
slug: how-to-capture-net-traffic
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |  Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |
| 3rd-party tool | [.Net, .NET Framework, NetCore](https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet) |
| Supported OS | macOS, Linux, Windows |

## Description

How to capture HTTPS traffic from my .NET application? Do I need a particular flow or configuration while using Fiddler Everywhere as a proxy? Are there specifics while capturing localhost traffic during .NET application development?

## Capturing .NET Traffic through Terminal

Fiddler Everywhere provides a preconfigured terminal to use as a sandboxed proxy environment. You can start your .NET application through Fiddler's **Terminal** option. This option enables you to capture HTTPS traffic from .NET applications started through the Fiddler's terminal. Using the terminal capturing mode is the recommended approach that lets you quickly capture the .NET application traffic with least configuration.

- Start the Fiddler Everywhere application.
- Ensure that the [Fiddler root CA is installed](slug://trust-certificate).
- Open new [Fiddler's terminal](slug://capture-traffic-get-started#terminal-capturing).
- Start your .NET application through the Fiddler's terminal.
    >important Note that Fiddler Everywhere allows you to choose **Windows PowerShell** as a default terminal option. A limitation in  **Windows PowerShell** causes localhost traffic to not go through the proxy. Workaround the issue by [using the Fiddler's aliases](slug://how-to-capture-localhost-traffic#using-aliases) or adding a dot to the end of the localhost address (for example, **localhost.:8080**).
- Execute your HTTPS requests from within the .NET application.

Fiddler captures the HTTPS sessions and displays them in the Live Traffic grid. 

>tip Many Visual Studio users often rely on the built-in terminal during development. Fiddler can't work with the built-in terminal. However, you can configure your Visual Studio to attach the Fiddler's preconfigured terminal. This way, you can benefit from using the development perks (like debugging with breakpoints) while using the Fiddler proxy simultaneously. [Learn more about attaching running processes to the Visual Studio debugger here...](https://learn.microsoft.com/en-us/visualstudio/debugger/attach-to-running-processes-with-the-visual-studio-debugger?view=vs-2022).


## Capturing .NET Traffic through System Capturing

A modern-day version of the .NET framework respects the system proxy settings. To capture HTTPS traffic from the .NET application, do the following:

- Close your .NET application.
- Start the Fiddler Everywhere application.
- Toggle ON the [system capturing mode](slug://capture-traffic-get-started#system-capturing).
- Start your .NET application and make the HTTPS request.

Fiddler captures the HTTPS sessions and displays them in the Live Traffic grid.

## Manual Configuration

Sometimes, you might need to manually configure your .NET applications to explicitly respect the Fiddler Everywhere proxy. The below sections provide details on how to configure your [NET Framework](#configuring-proxy-in-net-application) or [NETCore applications](#configuring-proxy-in-netcore-application) in case the automatic traffic capturing from [preconfigured terminal](#capturing-net-traffic-through-terminal) or via the [system proxy](#capturing-net-traffic-through-system-capturing) is not applicable.

### Configuring Proxy in .NET Application

To temporarily connect a .NET application to the Fiddler Everywhere local proxy, you can use the [**WebRequest.DefaultWebProxy**](https://learn.microsoft.com/en-us/dotnet/api/system.net.webrequest.defaultwebproxy?view=net-8.0) class to set a proxy:

```c#
WebRequest.DefaultWebProxy = new WebProxy("127.0.0.1", 8866);
```

Alternatively, you can specify a proxy inside the **yourappname.exe.config** file. If the .NET application is running in your current user account, add the following content inside the configuration section:

```xml
<configuration>
    <system.net>
        <defaultProxy>
            <proxy bypassonlocal="false" usesystemdefault="true" />
        </defaultProxy>
    </system.net>
</configuration>
```

If the .NET application runs in a different user account (for example, a Windows service), edit the **machine.config** file:
```xml
<!-- The following section is to force the use of Fiddler Everywhere for all applications, including those running in service accounts -->  
<system.net>
    <defaultProxy>
        <proxy autoDetect="false" bypassonlocal="false" proxyaddress="http://127.0.0.1:8866" usesystemdefault="false" />
    </defaultProxy>
</system.net>
```
>important Once Fiddler Everywhere is no longer used as a proxy, you need to revert the proxy configuration modifications made in **machine.config**.

Or, manually specify the proxy on an individual WebRequest object:
```c#
objRequest = (HttpWebRequest)WebRequest.Create(url);
objRequest.Proxy= new WebProxy("127.0.0.1", 8866);
```

#### Localhost Traffic

NET might bypass the Fiddler Everywhere proxy for URLs containing **localhost** regardless of other settings. So, rather than using localhost, change your code to refer to a machine name, or use [Fiddler Everywhere alliases](slug://how-to-capture-localhost-traffic#using-aliases).

This URL **won't** appear in Fiddler:
```
http://localhost:4000/some-service/
```

These URLs **will** appear in Fiddler Everywhere: 
```
http://localhost.:4000/some-service/
http://mymachine:4000/some-service/
http://ipv4.fiddler:4000/some-service/
```

### Configuring Proxy in NETCore Application

- Setting Fiddler Everywhere as a proxy on Windows OS

Setup the proxy via the **netsh** tool:
```sh
netsh winhttp set proxy 127.0.0.1:8866
```

To unset the proxy, use the following:
```sh
netsh winhttp reset proxy
```

- Setting Fiddler Everywhere as a proxy on **macOS** and **Linux**

Setup the Fiddler proxy through environment variables
```sh
export http_proxy=http://127.0.0.1:8866
export https_proxy=http://127.0.0.1:8866
```

When Fiddler is no longer used, unset the proxy
```sh
export http_proxy=
export https_proxy=
```


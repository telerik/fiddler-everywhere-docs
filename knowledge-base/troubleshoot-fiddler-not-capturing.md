---
title: Troubleshoot Fiddler Everywhere Not Capturing Traffic
description: "Cases where Fiddler Everywhere might fail to capture your HTTP(S) traffic and steps to resolve them."
type: how-to
slug: troubleshoot-cno-traffic
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product  | All versions of Fiddler Everywhere  |
| Supported OS | Windows, macOS, Linux |


## Description

Once Fiddler Everywhere is up and running, you can find that it can't capture HTTP(S) traffic. This article lists possible reasons for this behavior and guides possible solutions.


## System Capture Not Working

#### Observations

- The Fiddler Everywhere application is up and running.
- The Fiddler root CA is installed.
- The system capturing mode is turned ON (by toggling the **Live Traffic** switch).
- No active filters or rules are hiding the traffic.
- The Live Traffic grid shows _**"It looks like you are unable to capture traffic. You might have a configuration issue - check our troubleshooting page for more information." **_.

#### Troubleshooting and Solutions  

Various reasons can result in Fiddler Everywhere not acting as a system proxy. Below, we list some of the most common scenarios, alongside troubleshooting instructions and possible solutions:

 - [Lack of administrative rights](#lack-of-administrative-rights) to set and unset the system proxy.

 - [Incompatibility with VPN tools](#capture-not-working-alongside-vpn).

 - [Incompatibility with security tools](#capture-not-working-alongside-security-tools) (firewalls, antivirus, zero-trust tooling, security policies).

 - [Incompatibility with other preset system proxies](#capture-not-working-alongside-another-preset-proxy).

 - [Incompatibility with third-party proxy tools](#capture-not-working-alongside-third-party-proxy-tools).



### Lack of Administrative Rights

Fiddler Everywhere requires administrative rights to set and unset the operating system proxy settings.

#### Troubleshooting approach

Troubleshoot the lack of administrative rights through the following steps:

1. Start Fiddler Everywhere with administrative rights.

2. [Start the system capturing mode]({%slug capture-traffic-get-started%}#system-capturing).

3. Open the operating system proxy settings.

4. Observe if Fiddler Everywhere sets the system's manual proxy (by default with the following address: **127.0.0.1:8866**).

Failure to set/unset the Fiddler Everywhere proxy while toggling the system capturing indicates that Fiddler Everywhere lacks administrative rights to work correctly.

#### Solution

To solve the above, reinstall Fiddler Everywhere with administrative rights or consult your system administrator.



### Capture Not Working alongside VPN

Some third-party VPN tools make additional network modifications which can result in Fiddler Everywhere not working correctly as an intermediate proxy. 

#### Troubleshooting approach

1. Test and verify if Fiddler Everywhere captures HTTP(S) traffic while your VPN application is disconnected.

2. Test and verify if Fiddler Everywhere captures HTTP(S) traffic while your VPN application is connected.

If Fiddler successfully captures traffic after the first step but fails to do so after the second, then that confirms that your issue is related to the VPN tooling.

#### Solution - Bypass the VPN servers

You can instruct Fiddler Everywhere to bypass the VPN server endpoints through the following steps explicitly:

1. Disconnect the VPN application.

1. Start Fiddler Everywhere.

1. Go to **Settings** > **Connections** and add the VPN addresses of your VPN servers in the **Bypass Fiddler for URLs that start with** field. 

1. Click the **Save** button to preserve the bypass list.

    ![Bypass VPN server](../images/kb/no-capture/bypass-the-vpn-server.png)

1. Start the VPN application and connect to the VPN network.

1. [Start the system capturing mode]({%slug capture-traffic-get-started%}#system-capturing).

#### Solution - Using Alternative Capturing Modes

The system capturing set and unset the operating system proxy, which can cause a configuration conflict with your VPN tooling. You can substitute the system capturing mode with the listed alternative capturing modes.

- The [dedicated browser capturing mode]({%slug capture-traffic-get-started%}#preconfigured-browser-capturing).

- The [dedicated terminal capturing mode]({%slug capture-traffic-get-started%}#preconfigured-terminal-capturing). 

### Capture Not Working alongside Security Tools

Many modern-day tools automatically strip applications of administrative rights. Some security tools and administrators apply zero-trust policies, often automatically blocklisting all newly installed software. 

#### Troubleshooting approach

The best approach to troubleshooting this scenario is to audit the security tooling and the administrative policies that your company enforces on your machine. Look for zero-trust tooling, antivirus, firewalls, and group network policies that are in some way restricting the currently logged user from the following:

- Restricted rights to modify system settings (including the OS network settings).
- Restricted file system read/write rights.
- Restricted rights to run applications in admin mode.
- Limited access to third-party endpoints.
- Firewall and GPO rules that limits TCP/IP port usage.

The existence of any of the above can prevent Fiddler Everywhere from running correctly.

#### Solution - Elevate Fiddler's Application

Contact your system administrator and ask them to:

- Enable Fiddler Everywhere to run with administrative rights.
- Enable Fiddler Everywhere to set/unset the operating system proxy settings. 
- Open the preferred proxy port (by default, port 8866).
- Verify that the host machine covers [the requirements for running Fiddler Everywhere]({%slug first_steps_windows%}#prerequisites).

#### Solution - Using Alternative Capturing Modes

The system capturing set and unset the operating system proxy, which can cause a configuration conflict with security tooling and administrative policies. You can substitute the system capturing mode with the listed alternative capturing modes.

- The [dedicated browser capturing mode]({%slug capture-traffic-get-started%}#preconfigured-browser-capturing).

- The [dedicated terminal capturing mode]({%slug capture-traffic-get-started%}#preconfigured-terminal-capturing). 



### Capture Not Working Alongside Another Preset Proxy

Some systems use complex proxy configurations through remote servers and scripts like PAC (automatic proxy configurations). These configurations can prevent Fiddler Everywhere from successfully chaining to the upstream proxy. This, in terms results in Fiddler Everywhere not intercepting the system traffic. 

#### Troubleshooting approach

Test if Fiddler Everywhere can capture traffic when the upstream proxy is removed from the OS proxy settings.

#### Solution - Reconfigure the Upstream Proxy

To resolve the issue, try to apply the following solutions:

- Configure the upstream proxy to not limit the Fiddler Everywhere proxy usage through its default address (**127.0.0.1:8866**).

- Configure the upstream proxy not to limit [the Fiddler Everywhere required endpoints]({%slug first_steps_windows%}#prerequisites).

- Ensure that the PAC script (or the alternative proxy script) is in a proper format.

- Contact your network administrators and ask them to verify that the default upstream proxy can be chained (to the Fiddler Everywhere proxy).

#### Solution - Using Alternative Capturing Modes

The system capturing set and unset the operating system proxy, which can cause a configuration conflict with third-party upstream proxies. You can substitute the system capturing mode with the listed alternative capturing modes.

- The [dedicated browser capturing mode]({%slug capture-traffic-get-started%}#preconfigured-browser-capturing).

- The [dedicated terminal capturing mode]({%slug capture-traffic-get-started%}#preconfigured-terminal-capturing). 



### Capture Not Working Alongside Third-Party Proxy Tools

By design, Fiddler Everywhere will respect other upstream proxies, including preset system proxies (including manual proxies or automatically configured), and will automatically chain to them. When Fiddler Everywhere is unset as a proxy, it will revert the system proxy settings to their default. However, that is not true for all third-party proxy tools out in the wild. Some tools might neglect preexisting proxy settings and try to replace them (instead of chaining to them). When a third-party tool removes Fiddler Everywhere as an intermediate proxy, that will immediately cause the Fiddler application not to capture HTTP(S) traffic.

#### Troubleshooting approach

Troubleshoot if a third-party proxy tool meddles with the Fiddler's proxy:

1. Start Fiddler Everywhere.

2. [Start the system capturing mode]({%slug capture-traffic-get-started%}#system-capturing).

3. Verify that system capturing works at that point (for example, by capturing a page like [https://example.com](https://example.com)).

4. Start the third-party proxy tool and enable its system capturing mode.

If Fiddler Everywhere stops capturing at this point, that is an indication that the third-party tool is not chaining properly and instead overwrites the proxy configuration.


#### Solution - Reconfigure the Third-Party Proxy Application

- Check the third-party tool documentation for configuration options related to chaining to upstream proxies.

#### Solution - Set Fiddler as Gateway

- Use the third-party tool settings to set the Fiddler's proxy address (**127.0.0.1:8866**) as the default gateway.

#### Solution - Change Proxy Startup Order

- Run the third-party proxy tool **before** enabling Fiddler's system capture. This way, you will allow Fiddler Everywhere to chain the upstream proxy.

#### Solution - Using Alternative Capturing Modes

The system capturing set and unset the operating system proxy, which can cause a configuration conflict with third-party proxy applications. You can substitute the system capturing mode with the listed alternative capturing modes.

- The [dedicated browser capturing mode]({%slug capture-traffic-get-started%}#preconfigured-browser-capturing).

- The [dedicated terminal capturing mode]({%slug capture-traffic-get-started%}#preconfigured-terminal-capturing). 


### Capture Not Working - All Other Scenarios

If you cannot resolve your issue, then please do not hesitate to contact us. Our support engineers and developers can provide technical support through [the Telerik Support Center](https://www.telerik.com/account/support-center).

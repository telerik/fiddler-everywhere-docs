---
title: Troubleshoot Fiddler Everywhere Not Capturing Traffic
description: "Cases where Fiddler Everywhere might fail to capture your HTTP(S) traffic and steps to resolve them."
type: how-to
slug: troubleshoot-cno-traffic
publish: true
res_type: kb
---

You can encounter a situation where Fiddler Everywhere is active but unable to capture HTTP(S) traffic despite the following observations being true:

- The Fiddler Everywhere application is launched and running.
- The Fiddler root CA (certificate authority) is correctly installed.
- The system capturing mode is enabled by toggling the Live Traffic switch.
- No active filters or rules obstruct the traffic.

In addition to the above, instead of captured traffic, the sessions grid displays the message _"It looks like you are unable to capture traffic. You might have a configuration issue - check our troubleshooting page for more information."_.

In such cases, we recommend referring to the troubleshooting guides below for further help resolving the configuration issue. The guides provide detailed information and guidance to help you identify and resolve any underlying problems affecting the traffic capture functionality of Fiddler Everywhere.

## Troubleshooting and Solutions  

Various reasons can result in Fiddler Everywhere not acting as a system proxy. Below, we list some of the most common scenarios, alongside troubleshooting instructions and possible solutions:

 - [Lack of administrative rights](#lack-of-administrative-rights) to set and unset the system proxy.

 - [Incompatibility with VPN tools](#incompatibility-with-vpn-tools).

 - [Incompatibility with security tools](#incompatibility-with-security-tools) (firewalls, antivirus, zero-trust tooling, security policies).

 - [Incompatibility with other preset system proxies](#incompatibility-with-other-preset-system-proxies).

 - [Incompatibility with third-party proxy tools](#incompatibility-with-third-party-proxy-tools).



## Lack of Administrative Rights

Fiddler Everywhere requires administrative rights to set and unset the operating system proxy settings.

### Troubleshooting approach

Troubleshoot the lack of administrative rights through the following steps:

1. Start Fiddler Everywhere with administrative rights.

2. [Start the system capturing mode]({%slug capture-traffic-get-started%}#system-capturing).

3. Open the operating system proxy settings.

4. Observe if Fiddler Everywhere sets the system's manual proxy (by default with the following address: **127.0.0.1:8866**).

Failure to set/unset the Fiddler Everywhere proxy while toggling the system capturing indicates that Fiddler Everywhere lacks administrative rights to work correctly.

### Solution

To solve the above, reinstall Fiddler Everywhere with administrative rights or consult your system administrator.


## Incompatibility with VPN tools

Some third-party VPN tools make additional network modifications which can result in Fiddler Everywhere not working correctly as an intermediate proxy. 


### Troubleshooting approach

1. Test and verify if Fiddler Everywhere captures HTTP(S) traffic while your VPN application is disconnected.

2. Test and verify if Fiddler Everywhere captures HTTP(S) traffic while your VPN application is connected.

If Fiddler successfully captures traffic after the first step but fails to do so after the second, then that confirms that your issue is related to the VPN tooling.

### Solution - Bypass the VPN servers

You can instruct Fiddler Everywhere to bypass the VPN server endpoints through the following steps explicitly:

1. Disconnect the VPN application.

1. Start Fiddler Everywhere.

1. Go to **Settings** > **Connections** and add the VPN addresses of your VPN servers in the **Bypass Fiddler for URLs that start with** field. 

1. Click the **Save** button to preserve the bypass list.

    ![Bypass VPN server](../images/kb/no-capture/bypass-the-vpn-server.png)

1. Start the VPN application and connect to the VPN network.

1. [Start the system capturing mode]({%slug capture-traffic-get-started%}#system-capturing).

### Solution - Using Alternative Capturing Modes

The system capturing mode can set and unset the operating system proxy, which may result in configuration conflicts with the VPN tooling. To avoid such conflicts, consider the alternative capturing modes provided below as substitutes for the system capturing mode.

- The [dedicated browser capturing mode]({%slug capture-traffic-get-started%}#independent-browser-capturing-browser-capturing).

- The [dedicated terminal capturing mode]({%slug capture-traffic-get-started%}#independent-browser-capturing-terminal-capturing). 

## Incompatibility with security tools

In modern-day environments, it is common for security tools to remove administrative rights from applications automatically. Additionally, administrators may enforce zero-trust policies, often automatically blocklisting all newly installed software like Fiddler Everywhere.

### Troubleshooting approach

To effectively troubleshoot this scenario, it is advisable to thoroughly audit the security tooling and administrative policies implemented on your machine by your company. Take into consideration the following components and procedures that may be impacting the currently logged-in user:

- Zero-trust Tooling: Review any zero-trust tooling or security measures that may restrict certain network access or proxy configurations.
- Antivirus Software: Check if the antivirus software installed on your machine has policies that could potentially interfere with network connections or proxy settings.
- Firewalls: Examine firewall configurations to ensure they are not blocking necessary network connections or proxy usage.
- Group Network Policies: Evaluate group network policies that might restrict network access, proxy configurations, or specific user privileges.
- Restricted rights to modify system settings (including the OS network settings).
- Restricted file system read/write rights.
- Limited access to third-party endpoints.

The existence of any of the above can prevent Fiddler Everywhere from running correctly.

### Solution - Elevate Fiddler's Application

Contact your system administrator and ask them to:

- Enable Fiddler Everywhere to run with administrative rights.
- Enable Fiddler Everywhere to set/unset the operating system proxy settings. 
- Open the preferred proxy port (by default, port 8866).
- Verify that the host machine covers [the requirements for running Fiddler Everywhere]({%slug first_steps_windows%}#prerequisites).

### Solution - Using Alternative Capturing Modes

The system capturing mode can set and unset the operating system proxy, which may result in configuration conflicts with security tooling and administrative policies. To avoid such conflicts, consider the alternative capturing modes provided below as substitutes for the system capturing mode.

- The [dedicated browser capturing mode]({%slug capture-traffic-get-started%}#independent-browser-capturing-browser-capturing).

- The [dedicated terminal capturing mode]({%slug capture-traffic-get-started%}#independent-browser-capturing-terminal-capturing). 


## Incompatibility with other preset system proxies

Some systems use complex proxy configurations through remote servers and scripts like PAC (automatic proxy configurations). These configurations can prevent Fiddler Everywhere from successfully chaining to the upstream proxy. This, in terms, results in Fiddler Everywhere not intercepting the system traffic. 

### Troubleshooting approach

Test if Fiddler Everywhere can capture traffic when the upstream proxy is removed from the OS proxy settings.


### Solution - Reconfigure the Upstream Proxy

To resolve the issue, please consider applying the following solutions:

- Configure the upstream proxy to allow unrestricted usage of the Fiddler Everywhere proxy through its default address (`127.0.0.1:8866`).

- Adjust the configuration of the upstream proxy to remove any limitations on [the required endpoints for Fiddler Everywhere]({%slug first_steps_windows%}#prerequisites).

- Ensure that the PAC script or alternative proxy script is correctly formatted and properly set up.

- Reach out to your network administrators and request their assistance verifying that the default upstream proxy can be successfully chained to the Fiddler Everywhere proxy.

### Solution - Using Alternative Capturing Modes

The system capturing mode can set and unset the operating system proxy, which may result in configuration conflicts with third-party upstream proxies. To avoid such conflicts, consider the alternative capturing modes provided below as substitutes for the system capturing mode.

- The [dedicated browser capturing mode]({%slug capture-traffic-get-started%}#independent-browser-capturing-browser-capturing).

- The [dedicated terminal capturing mode]({%slug capture-traffic-get-started%}#independent-browser-capturing-terminal-capturing). 


## Incompatibility with third-party proxy tools

As part of its design, Fiddler Everywhere respects other upstream proxies, including system proxies or third-party proxy tools. Fiddler automatically chains to these proxies, ensuring seamless integration. Additionally, when Fiddler Everywhere is unset as a proxy, it will revert the system proxy settings to their default state.

However, it's important to note that not all third-party proxy tools follow the same behavior. Some tools may disregard existing proxy settings and try to replace them instead of chaining to them. If a third-party tool removes Fiddler Everywhere as an intermediate proxy, it will immediately interrupt Fiddler's ability to capture HTTP(S) traffic.


### Troubleshooting approach

To troubleshoot if a third-party proxy tool is interfering with Fiddler's proxy, please follow these steps:

- Start Fiddler Everywhere.

- Enable the system capturing mode.

- Confirm that system capturing mode functions correctly by capturing a page like https://example.com.

- Start the third-party proxy tool and activate its system capturing mode.

If Fiddler Everywhere ceases to capture traffic at this point, the third-party tool is **not** correctly chaining the proxy configuration and instead overwriting it. 


### Solution - Change the Proxy Startup Order

Run the third-party proxy tool **before** enabling Fiddler's system capture. This way, you will allow Fiddler Everywhere to chain the upstream proxy.

### Solution - Stop the Third-Party Proxy Tool

Sometimes, a third-party software automatically sets the system proxy (by explicitly overwriting any other proxy configuration, including the one Fiddler Everywhere sets). The solution is to stop that service/software before starting the Fiddler Everywhere application.

### Solution - Reconfigure the Third-Party Proxy Application

Check the third-party tool documentation for configuration options related to chaining to upstream proxies.

### Solution - Set Fiddler as a Gateway

Use the third-party tool settings to set the Fiddler's proxy address (**127.0.0.1:8866**) as the default gateway.

### Solution - Using Alternative Capturing Modes

The system capturing set and unset the operating system proxy, which can cause a configuration conflict with third-party proxy applications. You can substitute the system capturing mode with the listed alternative capturing modes.

- The [dedicated browser capturing mode]({%slug capture-traffic-get-started%}#independent-browser-capturing-browser-capturing).

- The [dedicated terminal capturing mode]({%slug capture-traffic-get-started%}#independent-browser-capturing-terminal-capturing). 


## Capture Not Working - All Other Scenarios

If you cannot resolve your issue, then please do not hesitate to contact us. Our support engineers and developers can provide technical support through [the Telerik Support Center](https://www.telerik.com/account/support-center). When posting a ticket to our support team, consider delivering the following:

- Detailed description of the encountered issue. If possible, provide steps and screenshots that depict the issue reproduction.
- Technical details about your environment, like used operating system, third-party security tools, VPN tools, administrative limitations, etc.
- Add the [Fiddler Everywhere application log files]({%slug fiddler-log-files%}). These files contain crucial information about the application startup, login process, local environment, and possible UI and backend errors.

### Testing macOS Network Access

Specific macOS network configurations or administrative limitations can prevent Fiddler from properly recognizing and using the active network adapter. Use the technique described in [this KB article]({%slug fiddler-test-network-access-macos%}) to investigate possible issues related to macOS network access.

## See Also

* [Accessing and Inspecting Fiddler Everywhere Application's Log Files]({%slug fiddler-log-files%})
* [Resetting Fiddler Everywhere Settings to Default]({%slug how-to-reset-fiddler-everywhere-settings-to-default%})
* [Troubleshooting macOS Proxy Settings]({%slug troubleshoot-mac-proxy-settings%})
* [Troubleshooting macOS Trust Certificate Issues]({%slug troubleshoot-certificate-error%})


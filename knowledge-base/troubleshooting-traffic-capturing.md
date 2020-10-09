---
title: Troubleshoot HTTP and HTTPS capturing with Fiddler Everywhere on macOS
description: An article with troubleshooting tips for traffic capturing with Fiddler Everywhere on macOS
type: how-to
slug: troubleshoot-capturing-traffic
tags: Fiddler Everywhere macOS troubleshoot, macOS Fiddler troubleshooting, Fiddler capturing isssues
publish: true
res_type: kb
---


#### Environment

|   |   |
|---|---|
| Product  | Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |
| Operating System | macOS |

#### Description

Test if **Fiddler Everywhere** is correctly configured to capture HTTPS traffic on macOS. 


## Troubleshooting macOS Capturing

The user can execute a simple **cURL** command in the **macOS** terminal and check the output in the terminal and inside Fiddler Everywhere:

- Open Fiddler Everywhere and ensure that it is configured to capture HTTPS traffic (Settings > HTTPS > Capture HTTPS traffic is checked). There is no need to turn Live Traffic on - it does not matter in this test
- Open a terminal and enter the following command: 

```Console
curl -v --url https://www.example.com/ -x 127.0.0.1:8866
```

The `-x` option sets the Fiddler Everywhere proxy. The `-v` option provides verbose logs. Optionally, you could use `-k` option to disable SSL verification.

- Check the command output. There should be a line related to the Server certificate and under it the certificate should list Fiddler's URL (http://www.fiddler2.com)


<!-- TODO add sample output-->

- Check the Fiddler Everywher application window - a new session should be visible in the Live Traffic tab - the protocol should be HTTPS and there should be no Tunnel to indication in the Host column.

<!-- TODO add sample screenshot of FE -->

If the above is correct the Fiddler Everywhere is configured to capture HTTPS traffic.

- After the above steps, the user should try turning the Live Traffic to **Capturing** mode and open Chrome (use the incognito window to make sure no credentials or cookies are cashed). Then open each of these URLs and see if they are captured inside Fiddler Everywhere:

1) http://httpbin.org (notice this is HTTP)

2) https://www.example.com (notice this is HTTPS and not HTTP)

3) https://www.google.com 

 
- After opening each of the above URLs, check the Live Traffic list and see if the traffic is captured. Additionaly make sure that no active filters are hiding the captured traffic - use the Clear All Filters option to remove the preset filter. If not sure - e.g. there are too many captured sessions and the user cannot find the three URLs above, save the captured sessions and send them to us (File > Save Archive> All Sessions). 
<!-- -TODO support link here -->

## See Also

*	[Troubleshoot Mac Proxy Settings]({%slug troubleshoot-mac-proxy-settings%})
*	[Access and Inspect Fiddler Everywhere log files]({%slug fiddler-log-files%})

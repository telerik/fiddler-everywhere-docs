---
title: Hide CONNECT Tunnels
description: "Hide the proxy CONNECT Tunnels while using Fiddler's rules."
slug: adv_hide_connect_tunnels
position: 40
---

# CONNECT Tunnels

One of the first things you will notice while capturing HTTPS traffic with Fiddler Everywhere (or with other HTTPS proxies) is the presence of multiple HTTP sessions utilizing the CONNECT method. These are the so-called CONNECT Tunnels that the client applications configured to go through the Fiddler proxy are sending to establish a two-way connection. The CONNECT tunnels are used by the Fiddler proxy so that it knows where the requests should be directed - otherwise, the connection will be encrypted, and Fiddler won't be able to direct the request to its target. While the CONNECT Tunnels are crucial for the proper work of an intermediate HTTPS proxy, they bear little information that can be used for web debugging and could cause an additional distraction while handling large portions of captured traffic. With Fiddler Everywhere, you can easily hide the CONNECT Tunnels so that you can see and concentrate only on the sessions that matter.


## Creating a "Hide CONNECT Tunnels" Rule

In this example, we will create a rule named "Hide CONNECT Tunnels" that hides all captured traffic except for traffic generated from the specified host.

Create a "Hide CONNECT Tunnels" rule that sets the following matching conditions and actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

- Create a matching condition that uses the "When **all these conditions** are met **any number of times**". 

- Match by a **Method** that contains **CONNECT** as a string.

- Create a **Do Not Show** action.

    > Important Note that the **Do Not Show** action is final, meaning no other action or active rule placed lower in the rules queue will be executed.

This example rule hides all HTTP sessions that use the **CONNECT** method.

![Creating "Hide CONNECT Tunnels" rule](../../images/advanced/adv-hide-connect-tunnels.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Hide CONNECT Tunnels" rule](../../images/advanced/adv-hide-connect-tunnels-active.png)

The link below provides a ready-to-use rule for download as a FARX file, which you can import through the Rules toolbar.

[A "Hide CONNECT Tunnels" rule as FARX file](https://github.com/telerik/fiddler-everywhere/rules/filters/hide-connect-tunnels)
 
 
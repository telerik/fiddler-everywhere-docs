---
title: Advanced Rules Techniques
description: "Using Fiddler's advanced rules techniques like breakpoints."
slug: rulesbuilder-advanced-techniques
publish: true
position: 30
---


# Advanced Rules Techniques

The **Rules** functionality in Fiddler Everywhere is a sophisticated tool that lets you virtually play with the ongoing traffic in any way possible. With its help, you can easily adjust the ongoing traffic per your requirements by matching all or specific sessions and consequentially applying specific actions that vary from simply highlighting and commenting entries (for easier inspection and analysis) to changing the content and behavior of HTTP Requests (before they reach the target server) or HTTP Responses (before they reach the client application).

Being able to "hack" an HTTP session on the fly provides you with almost unlimited testing and development opportunities. This article will demonstrate some more complex actions that can be used while creating a rule.


## Using Breakpoints

One of the most desired features was the ability to pause the execution of a session before it reaches the server or the client application. Fiddler Everywhere provides that option through the **Set Breakpoint** action and its two sub-actions **Before Sending a Request** and **Before Sending and Response**.

Fiddler Everywhere stands between the client application (that sends a request and receives a response) and a server (that receives a request and returns a response). The breakpoint actions explicitly pause the forwarding of matched requests and responses. You inspect the paused request/response or make complex changes by editing their HTTP Headers and Body through the **Raw** inspector.

### Request Breakpoint

To create a rule that sets a breakpoint for HTTP request, do the following:

1. Select the **Rules** tab and click the **Add Rule** button. As a result, the **Rule Builder**opens.
1. Enter a descriptive rule name.
1. Add a condition or a set of conditions to match sessions.
1. Add the action called **Set Breakpoint** and choose the sub-action **Before Sending a Request**.
1. Click **Save** and then enable the **Rules** tab and the newly created rule.
1. Start capturing traffic.

The following steps demonstrate how the **Before Sending a Request** action works:

- The client application sends an HTTP request.

- The Fiddler Everywhere proxy receives the HTTP request and **pauses** it. At this moment, all sessions that match the condition will be paused. You can select a paused session, load its HTTP request through the **Raw** tab, and modify its HTTP headers or body.

    ![Paused session with request breakpoint](../images/rules/advanced-rules-request-breakpoint.png)

- Once the inspection or modification of the session is completed, resume the request execution. Only at this point is the response forwarded to the server. The session will reach the server with its modified data.

- The server returns a response (received by Fiddler).

- Fiddler forwards the response to the client application.

### Response Breakpoint

To create a rule that sets a breakpoint for HTTP response, do the following:

1. Select the **Rules** tab and click the **Add Rule** button. As a result, the **Rule Builder**opens.
1. Enter a descriptive rule name.
1. Add a condition or a set of conditions to match sessions.
1. Add the action called **Set Breakpoint** and choose the sub-action **Before Sending a Response**.
1. Click **Save** and then enable the **Rules** tab and the newly created rule.
1. Start capturing traffic.

The following steps demonstrate how the **Before Sending a Response** action works:

- The client application sends an HTTP request (received by Fiddler).

- Fiddler forwards the HTTP request to the server.

- The server returns a response (received by Fiddler).

- The Fiddler Everywhere proxy receives the HTTP response and **pauses** it. At this moment, all sessions that match the condition will be paused. You can select a paused session, load its HTTP response through the **Raw** tab, and modify its HTTP headers or body.

- Once the inspection or modification of the session is completed, resume the response execution, and only then will it be forwarded to the client application. The session will reach the client with its modified data.


## Additional Rules Resources

- [Understanding the Matching Conditions and Final vs. Non-Final Actions]({%slug fiddler-rules-actions%})
- [Using predefined actions in the Rules tab]({%slug fiddler-ar-actions%})
- [Redirecting through the Rules tab]({%slug rulesbuilder-redirect-traffic%})
- [Introducing the Rules tab (blog post)](https://www.telerik.com/blogs/introducing-new-rule-builder-fiddler-everywhere)
---
title: Modifying Traffic
description: "Modify the headers and bodies of captured sessions when working with the Telerik Fiddler Everywhere web-debugging HTTP client proxy."
slug: modify-traffic-get-started
publish: true
position: 30
previous_url: /get-started/modify-traffic, /get-started/traffic/modify-traffic
---

# Modifying Traffic

Fiddler Everywhere provides a powerful debugging techniques for editing and mocking the captured traffic.

## Composing Requests

Instead of testing your API or a website through the UI and making multiple clicks, you can reload the desired session in the [**Composer**]({%slug composer-tab%}) tab, make edits to the desired values, and re-execute the request.

To load and modify a session through the **Composer**:

1. Set **Live Traffic** to **Capturing** and make the request. As a result, the session is captured and displayed in the **Live Traffic** list.

1. Select the desired session and right-click to open the context menu. From the context menu, select **Edit in Composer**. Alternatively, select the session and use the keyboard shortcut by pressing the `E` key.

    ![Edit in Composer](../images/composer/edit-in-composer.png)

1. The session opens in a new **Composer** window and then you can change the desired values. For example, change the data payload, modify the headers, test the authentication, and so on.

    ![Change the loaded request values in new Composer windows](../images/composer/edit-in-composer-002.png)

    >tip To modify a header, select it and change the needed key-value pair. You can add a new header by using the top key-value row. By default, the top key-value row is empty and can receive new values. Once you have modified or added a new header, click the confirmation button (a tick) to the right to apply the changes.

1. Click **Execute**.

This approach enables you to modify an existing request in the same way your application does it. In the [**Live Traffic** list]({% slug web-sessions-list %}#live-traffic-list), you can find the newly executed request and the response from the server.

## Using Rules

One of the most powerful features in Fiddler Everywhere resides in the Rules tab. You can create your own rules that change HTTP Requests & Responses on-the-fly based on different criteria. The rules can combine multiple criteria and apply single or multiple actions, allowing you to mock real-life scenarios with few clicks. Learn more about the Rules tab capabiliees in the following article:

- [Mocking Server Responses]({%slug rulesbuilder-get-started%})
- [The Rules tab UI in details]({%slug rules-general%})
- [Explaining final and non-final actions in the Rules tab]({%slug fiddler-rules-actions%})
- [Using predefined actions in the Rules tab]({%slug fiddler-ar-actions%})
- [Redirecting through the Rules tab]({%slug rulesbuilder-redirect-traffic%})

## Additional Resources

- [Composing Requests with Basic Authentication]({%slug basic-authentication-with-fiddler-everywhere%})
- [Composing SOAP Requests]({%slug fiddler-composer-soap%})
- [Capturing and Inspecting iOS Traffic]({%slug capture-mobile-ios-traffic%})
- [Capturing and Inspecting Android Traffic]({%slug capture-mobile-android-traffic%})

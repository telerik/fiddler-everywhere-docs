---
title: Modifying Traffic
description: "Modify the headers and bodies of captured sessions when working with the Telerik Fiddler Everywhere web-debugging HTTP client proxy."
slug: modify-traffic-get-started
publish: true
position: 30
previous_url: /get-started/modify-traffic, /get-started/traffic/modify-traffic, /traffic/modify-traffic
---

# Modifying Traffic

Fiddler Everywhere provides powerful debugging techniques for testing APIs and mocking server and client behavior. Modifying traffic is a crucial part of the Fiddler [Composer](#composing-requests) and [Rules](#using-rules) tabs.


## Composing Requests

Instead of testing your API or a website through the UI and making multiple clicks, you can reload the desired session in the [**Composer**]({%slug composer-tab%}) tab, make edits to the desired values, and re-execute the request.

To load and modify captured session through the **Composer**:

1. Start any [capturing mode]({%slug capture-traffic-get-started%}) with Fiddler Everywhere and initiate the request. As a result, the session is captured and displayed in the **Live Traffic** list.

1. Select the desired session and right-click to open the context menu. From the context menu, select **Edit in Composer**. Alternatively, select the session and use the keyboard shortcut by pressing the `E` key.

    ![Edit in Composer](../images/composer/edit-in-composer.png)

1. The session opens in a new **Composer** window, and then you can change the desired values. For example, change the data payload, modify the headers, test the authentication, etc.

    ![Change the loaded request values in new Composer windows](../images/composer/edit-in-composer-002.png)

    >tip To modify a header, select it and change the needed key-value pair. You can add a new header by using the top key-value row. By default, the top key-value row is empty and can receive new values. Once you have modified or added a new header, click the confirmation button (a tick) to the right to apply the changes.

1. Click **Execute**.

This approach enables you to modify an existing request in the same way your application does it. In the [**Live Traffic** list]({% slug web-sessions-list %}#live-traffic-list), you can find the newly executed request and the response from the server.

### Additional Composer Resources

- [Composing Requests with Basic Authentication]({%slug basic-authentication-with-fiddler-everywhere%})
- [Composing SOAP Requests]({%slug fiddler-composer-soap%})
- [Capturing and Inspecting iOS Traffic]({%slug capture-mobile-ios-traffic%})
- [Capturing and Inspecting Android Traffic]({%slug capture-mobile-android-traffic%})

## Using Rules

One of the most powerful features in Fiddler Everywhere resides in the **Rules** tab. You can create rules that change HTTP Requests & Responses on-the-fly based on different criteria. The rules can combine multiple criteria and apply single or multiple actions, allowing you to mock real-life scenarios with a few clicks. The various combination of matching conditions and actions that can be combined and applied into single or multiple rules enables you to test client and server applications without changing or accessing their codebase. 

To modify captured session through the **Rules**:

1. Start any [capturing mode]({%slug capture-traffic-get-started%}) with Fiddler Everywhere and initiate the request. As a result, the session is captured and displayed in the **Live Traffic** list.

1. Select the desired session and right-click to open the context menu. From the context menu, select **Add New Rule**.

    ![Add new ruel through selecting a session and using the context menu](../images/livetraffic/rb/add-new-rule-context-menu.png)

1. The session data is automatically populated in the **Rules Builder**. You can further modify the matching conditions and the desired actions. 

    ![Automatically loaded session in Rules builder](../images/livetraffic/rb/add-new-rule-loaded-in-rules-builder.png)

1. Click **Save** to preserve the rule.

Fiddler automatically adds the newly created rule on the top of the [**Rules Queue**]({%slug rules-general%}#rules-queue), giving it immediate execution priority (you can demote or promote each rule in the queue). The rule is also automatically activated (the rule switch is toggled on), so any new requests that match the rule will be affected by it. You can also replay the original session through its context menu (**Replay > Reissue Requests**).


### Additional Rules Resources

- [Mocking Server Responses]({%slug rulesbuilder-get-started%})
- [The Rules tab UI in details]({%slug rules-general%})
- [Explaining final and non-final actions in the Rules tab]({%slug fiddler-rules-actions%})
- [Using predefined actions in the Rules tab]({%slug fiddler-ar-actions%})
- [Redirecting through the Rules tab]({%slug rulesbuilder-redirect-traffic%})
- [Creating Manual HTTP Responses]({%slug using-custom-responses%})
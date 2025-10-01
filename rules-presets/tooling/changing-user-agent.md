---
title: Change User-Agent
description: "Changing the User-Agent HTTP Header while using Fiddler's rules."
slug: adv_changing_user_agent
position: 40
---

# Changing the User-Agent Header

The **User-Agent** HTTP Header lets servers identify the application, operating system, vendor, and/or version of the client that sends the request. Usually, each application sends its own specific **User-Agent** string value, but in some cases developers might want to quickly test server responses based on multiple different user agents.

When Fiddler issues a request through its **Composer** it automatically set its own **User-Agent** value. You might observe a similar behavior when using other third-party proxy tools chained to Fiddler.

You can easily create a rule that changes the **User-Agent** for any HTTP request that goes through Fiddler while using the Fiddler's rules.

The following examples show how to create a few different rules named "Change User-Agent" that effectively mock the Chrome browser on Windows and macOS.

## Creating a "Set User-Agent" Rule for a Chrome Browser on Windows

Create a "Set User-Agent Chrome Windows" rule by setting the following actions through the [Rules Builder](slug://modify-traffic-get-started).

1. Create an action that sets the HTTP Request header **user-agent** to the following value:

    ```bash
    Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36`.
    ```

1. Create an action that sets the HTTP Request header **sec-ch-ua-platform** to **"Windows"**.

1. Create an **Update Response Body** action that sets the following regular expression match:
    
    ```javascript
    (<script(?:(?!src).)*?>)
    ```

    and update as:

    ```javascript
    $1!function e(t,r){if(navigator.__defineGetter__?navigator.__defineGetter__("userAgent",function(){return r}):Object.defineProperty&&Object.defineProperty(navigator,"userAgent",{get:function(){return r}}),t.navigator.userAgent!==r){var n={get:function(){return r}};try{Object.defineProperty(t.navigator,"userAgent",n)}catch(i){t.navigator=Object.create(navigator,{userAgent:n})}}}(window,"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36");
    ```

This sample Fiddler rule matches all sessions and explicitly changes the user agent.

![Creating "Set User-Agent Chrome Windows" rule](../../images/advanced/adv-change-ua-chrome-windows.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Set User-Agent Chrome Windows" rule](../../images/advanced/adv-change-ua-chrome-windows-active.png)

Download a ready-to-use <a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules/changing-user-agent-chrome-windows" target="_blank">"Set User-Agent Chrome Windows"</a> rule as a FARX file, which you can import through the Rules toolbar.

## Creating a "Set User-Agent" Rule for a Chrome Browser on macOS

Create a "Set User-Agent Chrome Mac" rule by setting the following actions through the [Rules Builder](slug://modify-traffic-get-started).

1. Create an action that sets the HTTP Request header **user-agent** to the following value: 

    ```bash
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36
    ```

1. Create an action that sets the HTTP Request header **sec-ch-ua-platform** to **"Mac"**.

1. Create an **Update Response Body** action that sets the following regular expression match:

    ```javascript
    (<script(?:(?!src).)*?>)
    ```

    and update as:

    ```javascript
    $1!function e(t,r){if(navigator.__defineGetter__?navigator.__defineGetter__("userAgent",function(){return r}):Object.defineProperty&&Object.defineProperty(navigator,"userAgent",{get:function(){return r}}),t.navigator.userAgent!==r){var n={get:function(){return r}};try{Object.defineProperty(t.navigator,"userAgent",n)}catch(i){t.navigator=Object.create(navigator,{userAgent:n})}}}(window,"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36");
    ```

This sample Fiddler rule matches all sessions and explicitly changes the user agent to mock a Chrome browser on macOS.

![Creating "Set User-Agent Chrome Mac" rule](../../images/advanced/adv-change-ua-chrome-mac.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Set User-Agent Chrome Mac" rule](../../images/advanced/adv-change-ua-chrome-mac-active.png)

Download a ready-to-use <a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules/changing-user-agent-chrome-macos" target="_blank">"Set User-Agent Chrome Mac"</a> rule as a FARX file, which you can import through the Rules toolbar.

## See Also

* [Learn more about the Rules functionality in Fiddler Everywhere here...](slug://modify-traffic-get-started)
* [Learn more about all rules presets in Fiddler Everywhere here...](slug://adv_techniques_fiddler)
* [Learn more on how to organize your rules here...](slug://rulesbuilder-get-started)
* [Learn more about the matching conditions here...](slug://fiddler-rules-actions#conditions)
* [Learn more about the supported actions here...](slug://fiddler-rules-actions#actions)
* [Learn more about final and non-final rules here...](slug://fiddler-rules-actions#final-and-non-final-actions)
* [Learn more about using breakpoints here...](slug://rulesbuilder-breakpoints)
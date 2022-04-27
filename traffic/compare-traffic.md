---
title: Comparing Traffic
description: "Compare two captured sessions when working with the Telerik Fiddler Everywhere web-debugging HTTP client proxy."
slug: fe-compare-sessions
publish: true
position: 35
---

# Comparing Traffic

>tip The **Compare Sessions (BETA)** feature is under active development and subject to additional changes and improvements in future releases.

Fiddler Everywhere provides a comparing option for detailed differentiation of two captured sessions.

To compare traffic through the **Live Traffic** list:

1. Set **Live Traffic** to **Capturing** and make the requests. As a result, the sessions are captured and displayed in the **Live Traffic** list.

1. Select two sessions that you want to compare.

1. Select the **Compare** option from the context menu and choose the **Compare in Fiddler Everywhere** nested option.
    
    ![Compare through the context menu](../images//livetraffic/compare/compare-context-menu.png)

1. Inspect both sessions in a new **Compare Sessions (BETA**) tab.

    ![Compare Sessions tab](../images/livetraffic/compare/compare-tab-001.png)


Fiddler Everywhere loads both sessions side-by-side with the session with a lower ID to the left (primary session) and the session with the higher ID to the right (secondary session). The differences are highlighted in the session inspectors by a red background highlight for the removed content from the primary session and a green background highlight for newly added content in the secondary session.

## Additional Resources

* [Capturing Options with Fiddler Everywhere]({%slug capture-traffic-get-started%})
- [Inspecting Captured Traffic]({%slug inspecting-traffic-get-started%}).
- [Modifying Traffic]({%slug modify-traffic-get-started%})
- [Composing Requests with Basic Authentication]({%slug basic-authentication-with-fiddler-everywhere%})
- [Composing SOAP Requests]({%slug fiddler-composer-soap%})
- [Capturing and Inspecting iOS Traffic]({%slug capture-mobile-ios-traffic%})
- [Capturing and Inspecting Android Traffic]({%slug capture-mobile-android-traffic%})
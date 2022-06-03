---
title: Comparing Traffic
description: "Compare two captured sessions when working with the Telerik Fiddler Everywhere web-debugging HTTP client proxy."
slug: fe-compare-sessions
publish: true
position: 35
---

# Comparing Traffic

>tip The **Compare Sessions (BETA)** feature is under active development and subject to additional changes and improvements in future releases.


## Comparing Sessions

Fiddler Everywhere provides a comparing option for detailed differentiation of two captured sessions.

To compare sessions from the **Live Traffic** list:

1. Set **Live Traffic** to **Capturing** and make the requests. As a result, the sessions are captured and displayed in the **Live Traffic** list.

1. Select two sessions that you want to compare.

1. Select the **Compare** option from the context menu and choose the **Compare in Fiddler Everywhere** nested option. Note that the **Compare** option is active only when **two** sessions are selected.

    ![Compare through the context menu](../images/livetraffic/compare/compare-context-menu.png)

1. Inspect both sessions in a new **Compare Sessions (BETA**) tab.

    ![Compare Sessions tab](../images/livetraffic/compare/compare-tab-001.png)


Fiddler Everywhere loads both sessions side-by-side with the session with a lower ID to the left (named **Group 1**) and the session with the higher ID to the right (named **Group 2**). The differences are highlighted in the session inspectors by a red background highlight for the removed content from the primary session and a green background highlight for newly added content in the secondary session. Additional sessions can be added to both groups allowing simultaneously to compare multiple sessions.


## Adding Sessions to the Compare Groups

You can add more sessions to the compare groups through the context menu.

1. Set **Live Traffic** to **Capturing** and make the requests. As a result, the sessions are captured and displayed in the **Live Traffic** list.

1. Select one or more sessions that you want to compare.

1. Select the **Add to compare group** option from the context menu and select the compare group where the session should be added.

    ![Add to compare group](../images/livetraffic/compare/compare-context-menu-add-to-group.png)


## Comparing Options

The **Compare Sessions (BETA)** tab provides the following options to customize your comparing criteria.

- **Match sessions by**&mdash;Highlights unmatched sessions with default criteria set to match by **URL**. The possible match options are as follows:
    - **URL** match to highlight sessions with different URLs.
    - **ID** match where ID is the Fiddler Everywhere unique identificator for each captured session.
    - **Full** will match only when both session's responses and requests are identical. This is usually possible only when used alongside **ignore Headers** and all time-related headers are stripped off.

    ![Match sessions options](../images/livetraffic/compare/compare-options-match-sessions.png)

- **Ignore Headers**&mdash;You can use the popup to create an ignore list of specific requests and response headers from the matching.
    
    ![Ignore Headers popup](../images/livetraffic/compare/compare-options-ignore-headers-popup.png)

## Additional Resources

* [Capturing Options with Fiddler Everywhere]({%slug capture-traffic-get-started%})
- [Inspecting Captured Traffic]({%slug inspecting-traffic-get-started%}).
- [Modifying Traffic]({%slug modify-traffic-get-started%})
- [Composing Requests with Basic Authentication]({%slug basic-authentication-with-fiddler-everywhere%})
- [Composing SOAP Requests]({%slug fiddler-composer-soap%})
- [Capturing and Inspecting iOS Traffic]({%slug capture-mobile-ios-traffic%})
- [Capturing and Inspecting Android Traffic]({%slug capture-mobile-android-traffic%})
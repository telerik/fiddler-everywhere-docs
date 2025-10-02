---
title: Inspecting Traffic
description: "Inspect captured HTTPS traffic through the Live Traffic tab in the Fiddler Everywhere proxy tool."
slug: inspecting-traffic-get-started
publish: true
position: 1
previous_url: /get-started/inspect-traffic, /get-started/traffic/inspect-traffic, /traffic/inspect-traffic
---

# Inspecting Traffic

The core function of Fiddler Everywhere is to capture HTTPS requests and responses and to visualize its content through a cognitive UI. The application provides means not only to inspect the captured HTTPS data (such as HTTP Requests and Responses) but also to overview complex statistical and analytical data, to compare different sessions, and to save captured traffic for further analysis and collaboration.

## Inspecting HTTPS Traffic

The ongoing HTTP traffic shows in the **Live Traffic grid**, which contains multiple columns. To inspect the HTTP Request and Response headers and bodies, follow these steps:

1. Capture HTTP(S) traffic while using your preferred [capturing mode](slug://capture-traffic-get-started).
1. Double-click on a captured session.

The session content immediately loads in the Fiddler's **Inspectors**. The application automatically decides which inspector is best suited to display the request and response of the double-clicked session. Alternatively, you can use a single click on a session to preserve the last shown inspector.

[Deep-dive into the Fiddler's inspectors tab here ...](slug://inspector-types)

## Overview Traffic Statistics

To extract information about the captured sessions, go to the **Live Traffic** grid, where each request/response entry (session) shows in a row with multiple columns fields. There you can extract valuable data such as the returned status code, the host and the URL, the type of the used protocol (HTTP or HTTPS), the body size in bytes, and the HTTP method (GET or POST). The output traffic can be filtered, exported, commented on, and shared for further and detailed inspection.

To open the structured information about the session in the [**Overview** tab](slug://overview-tab), follow these steps:

1. Capture HTTP(S) traffic while using your preferred [capturing mode](slug://capture-traffic-get-started). Alternatively, you can load previously saved session snapshots from the **Snapshots** list.
1. Select a session, and switch to the **Overview** tab.

[Deep-dive into the Fiddler's Overview tab here ...](slug://overview-tab)

## Compare Sessions

You can compare two or more captured sessions for detailed differentiation and side-by-side analysis. Use the **Compare Sessions** tab in Fiddler Everywhere as follows:

1. Select two sessions or more sessions to compare.
1. Use the **Compare** option from the context menu.

Fiddler Everywhere loads the selected sessions side-by-side with the session with a lower ID to the left (called **Group 1**) and a higher ID to the right (called **Group 2**). Each compared session will highlight differences from its counterpart.

[Deep-dive into the Fiddler's `Compare Sessions`` tab here ...](slug://fe-compare-sessions)

## Snapshots

Fiddler Everywhere provides a section called the **Snapshots** that is a tree-based list to store and create a collection of previously captured HTTPS sessions.

You can save (and then share) a snapshot of captured traffic (for example, a selected session or multiple selected sessions) through one of the save options within the user interface. The inspection of sessions often happens with teammates or external collaborators. You can share selected or multiple sessions directly from the sessions grid or using the save **Snapshots** tree.

[Learn more about saving and sharing with the Fiddler's Snapshots tree here ...](slug://fe-organize-sessions)

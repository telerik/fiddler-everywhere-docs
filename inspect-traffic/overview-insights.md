---
title: Session Overview
description: "Using the `Overview` tab in Fiddler Everywhere for receiving and inspecting statistical data related to HTTP session timings, sizes, and other technical data."
slug: overview-tab
publish: true
position: 20
previous_url: /user-guide/live-traffic/overview, /user-guide/overview
---

# Session Overview

The **Overview** tab in Fiddler Everywhere provides structured information and statistical data for the captured traffic. This section allows you to deep-dive, compare and analyze the timings, sizes and other contextual data for one or more HTTP sessions.

The **Overview** tab contains a set of widgets, which are dynamically changing depending on the number of selected sessions:

- [Session Details](#session-details)
- [Timings](#timings)&mdash;Contains a detailed timeview of single or multiple selected sessions.
- [Sizes](#sizes)&mdash;Contains a representative chart and technical information related to the size of a single or miltuple selected sessions.
- [Statistics](#statistics)&mdash;Contains a statistical data for the selected sessions.
- [Request Details](#request-details)&mdash;Contains details about the HTTP Request for a selected session.
- [Response Details](#response-details)&mdash;Contains details about the HTTP Response for a selected session.

## Session Details

The **Session Details** widget lists technical details including:

* Session's URL
* Protocol
* Session state
* Session ID (within the Fiddler's traffic grid)

The widget is available only when a single session is selected.

![Session Details widget](../images/overview/overview-session-details.png)

## Timings

The **Timings** widget visually represents the timeline and the durations needed to execute the selected sessions. The widget dynamically changes based on whether the selection incvludes a single or multiple sessions.

### Timings (Single Session)

When a single session is selected, the **Timings** widget displays two sections:

* **Timeline** section that contains a detailed graph that shows timestamps of each session event (including event related to the Fiddler proxy) and, a chart representation of the timings related to the sessions' CONNECT, HTTP Request, and HTTP Response (plus overall of all three combined).

* **Duration** section that visualizes and compares the selected sessions based on their duration.


### Timings (Multiple Sessions)

When multiple sessions are selected, the **Timings** widget displays two sections:

* **Timeline** section that visualizes the order of execution and the times for each session.
* **Duration** section that visualizes and compares the selected sessions based on their duration.

The maximum length of the URL is 30 symbols. To visualize a tooltip with the entire session URL plus the fast copy option, click the eye icon at the end of the wrapped URL. 

### Timing Events Explained

The timeline secti9on in the **TImeline*8 widget (when a single session is selected) contains the following events:


- **Client Begin Request**&mdash;The time (in milliseconds) between the current and the previous event. The timestamp that indicates when the event happened is available in the [**Request Details**](#request-details) widget.

- **FGot Request Headers**&mdash;The time (in milliseconds) between the current and the previous event. The timestamp that indicates when the event happened is available in the [**Request Details**](#request-details) widget.

- **Client Done Request**&mdash;The time (in milliseconds) between the current and the previous event. The timestamp that indicates when the event happened is available in the [**Request Details**](#request-details) widget.


- **Fiddler Begin Request**&mdash;The time (in milliseconds) between the current and the previous event. The timestamp that indicates when the event happened is available in the [**Request Details**](#request-details) widget.

- **Server Got Request**&mdash;The time (in milliseconds) between the current and the previous event. The timestamp that indicates when the event happened is available in the [**Request Details**](#request-details) widget.


- **Server Begin Response**&mdash;The time (in milliseconds) between the current and the previous response event. The timestamp that indicates when the event happened is available in the [**Request Details**](#response-details) widget.

- **Got Response Headers**&mdash;The time (in milliseconds) between the current and the previous response event. The timestamp that indicates when the event happened is available in the [**Request Details**](#response-details) widget.

- **Server Done Response**&mdash;The time (in milliseconds) between the current and the previous response event. The timestamp that indicates when the event happened is available in the [**Request Details**](#response-details) widget.

- **Client Begin Response**&mdash;The time (in milliseconds) between the current and the previous response event. The timestamp that indicates when the event happened is available in the [**Request Details**](#response-details) widget.

- **Client Done Response** &mdash;The time (in milliseconds) between the current and the previous response event. The timestamp that indicates when the event happened is available in the [**Request Details**](#response-details) widget.

Under the list of session lines, you will find the **Request** (light blue) and **Response** (orange) footers with total timings in milliseconds (**ms**) or seconds (**s**)  for all listed sessions. For example, if five sessions are selected from the sessions grid, the displayed time in the **Request** and **Response** footers is the total time for all five selected requests or responses.

![Timings widget](../images/overview/overview-timings.png)

## Sizes

The **Sizes** widget provides a visual representation of the size of a single session or a selection of multiple sessions. Each Session is listed on a separate line and is presented with a URL, which corresponds to the URL column in the sessions grid, and a chart that shows the sizes of the headers and the body of the Request and Response, each included in a single chart.

The maximum length of the URL is 30 symbols. To visualize a tooltip with the entire session URL plus the fast copy option, click the eye icon at the end of the wrapped URL. 

**Tracked session sizes** Provides the following options:

- **Request Headers**&mdash;The size of all request headers in bytes or kilobytes.

- **Request Body**&mdash;The size of all request bodies in bytes or kilobytes.

- **Response Headers**&mdash;The size of all response headers in bytes or kilobytes.

- **Response Body**&mdash;The size of all response bodies in bytes or kilobytes.


Under the list of session lines, you will find the **Request Headers** (dark blue), **Request Body** (light blue), **Response Headers** (red), and **Response Body** (orange) footers with the total size in kilobytes (**kB**) or bytes (**B**) for all listed sessions.

![Sizes widget](../images/overview/overview-sizes.png)

## Statistics

The **Statistics** widget contains a table with structured information for multiple selected sessions. The widget is only available when multiple sessions are selected (collapsed and inactive for a single session selection).

- **Session Count**&mdash;The number of selected sessions.

- **Headers Sent**&mdash;The size of the sent request headers in bytes.

- **Body Sent**&mdash;The size of the sent request bodies in bytes.

- **Headers Received**&mdash;The size of the received response headers in bytes.

- **Body Received**&mdash;The size of the received response bodies in bytes.

- **Started At**&mdash;The date and time when the earliest client request is established. Corresponds to the **Client Begin Request** timing.

- **Completed At**&mdash;The date and time when the latest client response finishes. Corresponds to the **Client Done Response** timing.

- **Aggregate Duration**&mdash;The total aggregate duration for all selected sessions in milliseconds.

- **DNS Time**&mdash;The aggregate DNS time for all selected sessions in milliseconds.

- **Connect Time**&mdash;The aggregate TCP connect time for all selected sessions in milliseconds.

- **Handshake Time**&mdash;The aggregate HTTPS handshake time for all selected sessions in milliseconds.

- **Requests per Host**&mdash;A list of the hosts and the number of requests to each.

- **Responses by Code**&mdash;A list of the received HTTP response status codes and the number of appearances.

- **Response Size by Type**&mdash;A list of the received response types and their aggregate size.

![Response Details](../images/overview/overview-statisticsl.png)


## Request Details

The **Request Details** widget contains a table with the following information:

- **URL**&mdash;The URL address of the selected Session.

- **Method**&mdash;The HTTP request method.

- **Client IP**&mdash;Indicates the client IP that sent this Request. The IP will often show the loopback address (`0.0.0.0`), but it will be different if multiple computers on the network are pointed to a single Fiddler Everywhere instance.

**Remote IP**&mdash;Indicates the server's IP address used for this Request.

- **Protocol**&mdash;The protocol type (HTTP or HTTPS) used by the Session.

- **TLS Version**&mdash;The version of the used cryptographic protocols (TLS or SSL).

- **Sizes** displays the following options:
    - **Body**&mdash;The size of the request body in bytes.
    - **Headers**&mdash;The size of the request headers in bytes.

- **Timings** &mdash;A list by execution order with timestamps for each triggered request event.

![Response Details](../images/overview/overview-request-details.png)

## Response Details

The **Response Details** widget contains a table with the following information:

- **Status**&mdash;The HTTP response status code and status message.

- **TLS Version**&mdash;The version of the used cryptographic protocols (TLS or SSL).

- **Sizes**
    - **Body**&mdash;The size of the response body in bytes.
    - **Headers**&mdash;The size of the response headers in bytes.
    - **Total**&mdash;The total size of the response in bytes.

- **Times**&mdash;A list by execution order with timestamps or times (in milliseconds) for each triggered response event.

![Response Details](../images/overview/overview-response-details.png)

## Session Details

- **Duration** - The total time spent for the Session in milliseconds (**Client Done Response** - **Client Begin Request**).

- **Gateway Determination Time**&mdash;The time (in milliseconds) required to determine which getaway must handle the request.

- **DNS Time**&mdash;The time (in milliseconds) required for a DNS lookup. Average DNS lookup times are between 20 and 120 milliseconds.

- **TCP Connect Time** - The number of milliseconds spent waiting for the server to set up a TCP/IP connection.

- **HTTPS Handshake Time**  - The number of milliseconds elapsed while performing the HTTPS handshake with the server.

![Session Details](../images/overview/overview-session-details.png)
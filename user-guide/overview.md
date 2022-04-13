---
title: Overview Tab
description: "Learn how to use the Overview tab in the Fiddler Everywhere web-debugging HTTP-proxy client."
slug: overview-tab
publish: true
position: 36
previous_url: /user-guide/live-traffic/overview
---

# Overview Tab

The **Overview** tab provides options for getting structured information and statistical data for captured sessions. It is located in the [**Live Traffic** tab]({%slug web-sessions-list%}) and all entries are available in the [**Sessions** list]({%slug saved-sessions-tab%}).

**Overview** contains a set of widgets, which are dynamically changing depending on the number of selected sessions:

- [Timings](#timings)&mdash;Available for selecting both a single session and a selection of multiple sessions.
- [Sizes](#sizes)&mdash;Available for selecting both a single session and a selection of multiple sessions.
- [Statistics](#statistics)&mdash;Available for multiple sessions only.
- [Request Details](#request-details)&mdash;Available for a single session only.
- [Response Details](#response-details)&mdash;Available for a single session only.

## Timings

The **Timings** widget provides a visual representation of the time needed to execute a single session or select multiple sessions. Each Session is listed on a separate line and is presented with a URL that corresponds to the URL column in [the **Live Traffic** list]({%slug web-sessions-list%}#live-traffic-list) and a chart of the request and response timings.

The maximum length of the URL is 30 symbols. To visualize a tooltip with the entire session URL, click the three dots at the end of the wrapped URL. The **Timings** chart splits into two main parts&mdash;the blue section of the chart shows timings related to the Request, and the orange section of the charts shows timings related to the Response. Each sub-chart area has a tooltip with descriptive information about the visualized timing.

**Tracked Request Timings** provides the following options:

- **Gateway Determination Time**&mdash;The time (in milliseconds) required to determine the gateway. All values over 1000ms are unusual and suggest an issue.

- **DNS Time**&mdash;The time (in milliseconds) required for a DNS lookup. Average DNS lookup times are between 20 and 120ms.

- **TCP Connect Time**&mdash;The time (in milliseconds) required to establish a TCP/IP connection. A value around 21000ms suggests that the target is unreachable, and the Windows OS took 21 seconds to confirm the issue.

- **HTTPS Handshake Time**&mdash;The time (in milliseconds) required to finish an HTTPS handshake. While capturing HTTPS traffic, you will see what the client and the server are using to communicate with Fiddler Everywhere. This can be different from what they would use if the Fiddler Everywhere proxy were not in the middle. To see the CONNECT tunnels without the Fiddler Everywhere interference, disable the [**Capture HTTPS traffic** option]({%slug decrypt-https-traffic%}#capture-https-traffic).

- **Client Connected**&mdash;The time (in milliseconds) between the current and the previous event. The timestamp that indicates when the event happened is available in the [**Request Details**](#request-details) widget.

- **Client Begin Request**&mdash;The time (in milliseconds) between the current and the previous event. The timestamp that indicates when the event happened is available in the [**Request Details**](#request-details) widget.

- **Fiddler Got Request Headers**&mdash;The time (in milliseconds) between the current and the previous event. The timestamp that indicates when the event happened is available in the [**Request Details**](#request-details) widget.

- **Client Done Request**&mdash;The time (in milliseconds) between the current and the previous event. The timestamp that indicates when the event happened is available in the [**Request Details**](#request-details) widget.

- **Server Connected**&mdash;The time (in milliseconds) between the current and the previous event. The timestamp that indicates when the event happened is available in the [**Request Details**](#request-details) widget.

- **Fiddler Begin Request**&mdash;The time (in milliseconds) between the current and the previous event. The timestamp that indicates when the event happened is available in the [**Request Details**](#request-details) widget.

- **Server Got Request**&mdash;The time (in milliseconds) between the current and the previous event. The timestamp that indicates when the event happened is available in the [**Request Details**](#request-details) widget.

The **Tracked Response Timings** provides the following options:

- **Server Begin Response**&mdash;The time (in milliseconds) between the current and the previous response event. The timestamp that indicates when the event happened is available in the [**Request Details**](#response-details) widget.

- **Fiddler Got Response Headers**&mdash;The time (in milliseconds) between the current and the previous response event. The timestamp that indicates when the event happened is available in the [**Request Details**](#response-details) widget.

- **Server Done Response**&mdash;The time (in milliseconds) between the current and the previous response event. The timestamp that indicates when the event happened is available in the [**Request Details**](#response-details) widget.

- **Client Begin Response**&mdash;The time (in milliseconds) between the current and the previous response event. The timestamp that indicates when the event happened is available in the [**Request Details**](#response-details) widget.

- **Client Done Response** &mdash;The time (in milliseconds) between the current and the previous response event. The timestamp that indicates when the event happened is available in the [**Request Details**](#response-details) widget.

Under the list of session lines, you will find the **Request** (light blue) and **Response** (orange) footers with total timings in milliseconds (**ms**) or seconds (**s**)  for all listed sessions. For example, if five sessions are selected from the **Live Traffic** list, the displayed time in the **Request** and **Response** footers is the total time taken for all five selected requests or responses.

![Timings widget](../images/overview/overview-timings.png)

## Sizes

The **Sizes** widget provides a visual representation of the size of a single session or a selection of multiple sessions. Each Session is listed on a separate line and is presented with a URL, which corresponds to the URL column in [the **Live Traffic** list]({%slug web-sessions-list%}#live-traffic-list), and a chart that shows the sizes of the headers and the body of the Request and Response, each included in a single chart.

The maximum length of the URL is 30 symbols. To visualize a tooltip with the entire session URL, click the three dots at the end of the wrapped URL.

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

- **Started At**&mdash;The date and time when the earliest client request is established. Corresponds to the **Client Begin Request** request timing.

- **Completed At**&mdash;The date and time when the latest client response finishes. Corresponds to the **Client Done Response** response timing.

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

- **Remote IP**&mdash;Indicates the IP address of the server used for this Request.

- **Protocol**&mdash;The protocol type (HTTP or HTTPS) used by the Session.

- **SSL Version**&mdash;The version of the used cryptographic protocols (TSL or SSL).

- **Sizes** displays the following options:
    - **Body**&mdash;The size of the request body in bytes.
    - **Headers**&mdash;The size of the request headers in bytes.

- **Timings** &mdash;A list by execution order with timestamps for each triggered request event.

![Response Details](../images/overview/overview-request-details.png)

## Response Details

The **Response Details** widget contains a table with the following information:

- **Status**&mdash;The HTTP response status code and status message.

- **Sizes**
    - **Body**&mdash;The size of the response body in bytes.
    - **Headers**&mdash;The size of the response headers in bytes.

- **Timings**&mdash;A list by execution order with timestamps or times (in milliseconds) for each triggered response event.

![Response Details](../images/overview/overview-response-details.png)

## Session Details

- **Duration** - The total time spent for the Session in milliseconds (Client Done Response - Client Begin Request).

- **TCP Connect Time** - The number of milliseconds spent waiting for the server to establish a TCP/IP connection.

- **HTTPS Handshake Time**  - The number of milliseconds elapsed while performing the HTTPS handshake with the server.

![Session Details](../images/overview/overview-session-details.png)
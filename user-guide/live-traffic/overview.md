---
title: Overview
description: Basic UI instructions for working with the Overview tab in the Fiddler Everywhere application
slug: overview-tab
publish: true
position: 15
---


# Overview Tab

The **Overview** tab provides an easy way for the user to get structured information and different statistic data for one or more captured sessions. The tab is available for captured session in the [**Live Traffic** tab]({%slug web-sessions-list%}) and for all entries in the [**Sessions** list]({%slug saved-sessions-tab%}).
The **Overview** tab has several widgets:

When a single session is selected, the following widgets should be visible:

- [Timings](#timings)
- [Sizes](#sizes)
- [Statistics](#statistics) (available for multiple sessions selection only)
- [Request Details](#request-details) (available for single session selection only)
- [Response Details](#response-details) (available for single session selection only)


## Timings

The **Timings** widget provides a visual representation of the time needed to execute a single session or a selection of multiple sessions. Each session is listed on a separate line and is presented with a URL (corresponds to the URL column in [the Live Traffic list]({%slug web-sessions-list%}#live-traffic-list)) and a chart of the request and response timings. 

The URL maximum length is 30 symbols. Use the three dots at the end of the wrapped URL to visualize a tooltip with the entire session URL. The timings chart is split into two main parts - the blue section of chart is shwoing timings related to the request, and the orange section of the charts is showing timings related to the response. Each sub-chart section has a tooltip with descriptive information about the visualized timing.

**_Tracked Request Timings_**
- **Gateway Determination Time** - The time (in milliseconds) required to determine the gateway. **_Tip:_** All values over 1000ms are unusual and suggest an issue.
- **DNS Time** - The time (in milliseconds) required for a DNS lookup. **_Tip:_** Average DNS lookup times are between 20 and 120ms.
- **TCP Connect Time** - The time (in milliseconds) required to establish a TCP/IP connection. **_Tip:_** A value around 21000ms suggests that the target is unreachable, and the Windows OS took 21 seconds to confirm the issue.
- **HTTPS Handshake Time** - The time (in milliseconds) required to finish a HTTPS handshake. **_Tip:_** While capturing HTTPS Fiddler Everywhere acts as man-in-the-middle, which means that you’ll see what the client and server are using to talk to Fiddler Everywhere. This could be different than what they’d use if the Fiddler Everywhere proxy was not in the middle. To see the CONNECT tunnels without the FIddler Everywhre interferience, you should disable the [**Capture HTTPS traffic** option]({%slug decrypt-https-traffic%}#capture-https-traffic).
- **Client Connected**   <!--What is this measuring   ????? Why is this not a timestamp but a ms value -->
- **Client Begin Request** <!-- What is this measuring ????? Why is this not a timestamp but a ms value -->
- **Fiddler Got Request Headers** <!-- What is this measuring ????? Why is this not a timestamp but a ms value -->
- **Client Done Request** <!-- What is this measuring ????? Why is this not a timestamp but a ms value -->
- **Server Connected** <!-- What is this measuring ????? Why is this not a timestamp but a ms value -->
- **Fiddler Begin Request** <!-- What is this measuring ????? Why is this not a timestamp but a ms value -->
- **Server Got Request** <!-- What is this measuring ????? Why is this not a timestamp but a ms value -->

**_Tracked Response Timings_**
- **Server Begin Response** <!-- What is this measuring ????? Why is this not a timestamp but a ms value -->
- **Fiddler Got Response Headers** <!-- What is this measuring ????? Why is this not a timestamp but a ms value -->
- **Server Done Response** <!-- What is this measuring ????? Why is this not a timestamp but a ms value -->
- **Client Begin Response** <!-- What is this measuring ????? Why is this not a timestamp but a ms value -->
- **Client Done Response**  <!-- What is this measuring ????? Why is this not a timestamp but a ms value -->


Below the list of session lines, you will find two footers called **Request** (light blue) and **Response** (orange) with total timings in milliseconds (**ms**) or in seconds (**s**)  for all listed sessions. For example, if five sessions are selected from the Live Traffic list, the displayed time in the **Request** and **Response** footers is the total time taken for all five selected requests/responses.

![Timings widget](../../images/overview/overview-timings.png)

<!-- JIRA Description below

??? The header must contain the information for the total time that it took for execution, i.e. from beginning of the request till the end of the response. The header must have a tooltip describing what is this value. The time must be the same as the duration time in the sessions grid. In case multiple sessions are selected, the header must show the time from start of the first request till the end of the last received response.

??? When a single session is selected, an arrow must be shown on the lef of the URL. Expanding it must open a waterfall presentation of each available timing steps. NOTE: For each session the steps might be different.

??? When multiple sessions are selected we should not have an expander for the moment.

??? The labels for Request and Response must show the full time required to execute each of the step. I.e. from the moment when request started till the end of the request. When multiple sessions are selected we can show the time for execution from first request till the end of the latest request (similar for response) or we can hide the values from the labels.

 -->


## Sizes

The **Sizes** widget provides a visual representation of the size of a single session or a selection of multiple sessions. Each session is listed on a separate line and is presented with a URL (corresponds to the URL column in [the Live Traffic list]({%slug web-sessions-list%}#live-traffic-list)) and a chart that shows sizes of the headers and body of request and response, each included in a single chart. 

The URL maximum length is 30 symbols. Use the three dots at the end of the wrapped URL to visualize a tooltip with the entire session URL.

**_Tracked session sizes_**
- **Request Headers** - The size of all request headers in bytes or kilobytes. 
- **Request Body** - The size of all request bodies in bytes or kilobytes.
- **Response Headers** - The size of all response headers in bytes or kilobytes.
- **Response Body** - The size of all response bodies in bytes or kilobytes.


Below the list of session lines, you will find fpur footers called **Request Headers** (dark blue), **Request Body** (light blue), **Response Headers** (red) and **Response Body** (orange) with the total size in kilobytes (**kB**) or bytes (**B**) for all listed sessions.

![Sizes widget](../../images/overview/overview-sizes.png)

<!--

??? The header must contain the information for the total size. The header must have a tooltip describing what is this value.

The labels for Request Headers, Request Body, Response Headers and Response Body must show the actual size. When multiple sessions are selected we can show the sum of each one in the label or we can hide the values from the labels.

Each chart part must have tooltips with information what is this, for example for the request headers it should be Size of request headers: 200bytes.
When multiple sessions are selected, the chart sizes must be adjusted based on the largest one. I.e. others should be shown as percentage of this size, so they should be shorter in terms of the used chart.

-->


## Statistics

The **Statistics** widget contains a table with structured information for multiple selected sessions. The widget is not available (collapsed and inactive) when a single session is selected.

- **Session Count** - The number of selected sessions
- **Headers Sent** - The size of the sent request headers in bytes.
- **Body Sent** - The size of the sent request bodies in bytes.
- **Headers Received** - The size of the received response headers in bytes.
- **Body Received** - The size of the received response bodies in bytes.
- **Started At** - The date and time when the earliest client request is established. Corresponds to **Client Begin Request** request timing.
- **Completed At** - The date and time when the latest client response is finished. Corresponds to **Client Done Response** response timing.
- **Aggregate Duration** - The total aggregate duration for all selected session in miliseconds.
- **DNS Time** - The aggregate DNS time for all selected session in miliseconds.
- **Connect Time** - The aggregate TCP connect time for all selected session in miliseconds.
- **Handshake Time** - The aggregate HTTPS handshake time for all selected session in miliseconds.
- **Requests Per Host** - A list of the hosts and the number of request to each of them.
- **Responses By Code** - A list of the received HTTP response status codes and the number of appearance.
- **Response Size By Type** - A list of the received response types and their aggregate size.

## Request Details

The Request Details widget must contain a table with the following information (NOTE: Some of the items should be bold and alone on a row, to differentiate the information before and after this line):

- **URL** - The URL address of the selected session.
- **Method** - The HTTP trequest method
- **Client IP** - Indicates the client IP that sent this request. **_Tip:_** Most of the time the IP will show the loopback address (0.0.0.0) but it will be different if multiple computers on the network are pointed to a single Fiddler Everywhere instance.
- **Remote IP** - Indicates the IP address of the server used for this request.
- **Protocol** - The protocol type (HTTP or HTTPS) used by the session.
- **SSL Version** - <!-- When is this value different from 0 -->
- **Sizes**
    - Request Size
    - Body Size
    - Headers Size
- **DateTime** - the full data and time in local timestamp <!-- Is that shown anywhere or is this removed from the final UI ->
- **Timings** <!-- all timings we have for the request, the same that are shown in the timings widget -->

## Response Details

The Response Details widget must contain a table with the following information (NOTE: Some of the items should be bold and alone on a row, to differentiate the information before and after this line):

- **Status** 
- **Sizes**
    - Request Size
    - Body Size
    - Headers Size
- **Timings** <!-- all timings we have for the request, the same that are shown in the timings widget -->


<!-- Are those implemented !? -->
- **TTFB** - Time to first response byte.
- **TTLB** - Time to the last response byte
- **CompressionSavings** - If the response is compressed using Content-Encoding: GZIP or DEFLATE, the number of bytes saved by compression. Show only if the response is compressed
- **CompressionSavings%** - If the response is compressed using Content-Encoding: GZIP or DEFLATE, the percentage of the original response size that was saved. Show only if the response is compressed
- **Image**  Show only if the response is image
    Dimensions - The width and height of an image response (e.g. 120, 100).
    Pixel Count - The number of pixels contained in an image response (e.g. 12000).
    Bytes/Pixel - The computed number of bytes used for each pixel of the image (e.g. 0.90). Larger numbers in this column suggest that the image would benefit from optimization.
    AspectRatio - The aspect ratio of an image response (e.g. 1.20).
    RGB - A hexadecimal representation of the percentage of red, green, and blue pixels in the image.
    GeoLocation - If a JPEG image contains geographic location information, it is displayed here

<!-- 

Is any of those below missing from the 2.0 implementation !? -
Statistics

The Statistics widget must contain a table with the following information (NOTE: Some of the items should be bold and alone on a row, to differentiate the information before and after this line):

Request Count

Unique Hosts - number showing the hosts that have been called

Bytes Sent

Bytes Received

Timings (called Performance in the mocks, decide which one is more appropriate):

Requests started at

Responses completed at

Sequence (clock) duration

Aggregate Session duration

DNS Lookup time

TCP/IP Connect duration

HTTPS Handshake duration

Response codes

<list the number of times each response code is received, for example: HTTP/200: 139, on the next line - HTTP/404: 12>

Response Bytes (by Content-Type):

<list the sum of bytes for each content-type is received, for example: video/webm: 3,068,820, on the next line - image/webp: 1,554,654>

Requests per Host:

<list the number of times a request to specific host is sent, for example: www.youtube.com: 26, on the next line - www.gstatic.com: 9>

->
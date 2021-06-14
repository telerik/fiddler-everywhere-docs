---
title: Overview Tab
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

The **Timings** widget provides a visual representation of the time needed to execute a single session or a selection of multiple sessions. Each session is listed on a separate line and is presented with a URL (corresponds to the URL column in [the Live Traffic list]({%slug web-sessions-list%}#live-traffic-list)) and a chart presentation of the request and response timings.

The session URL maximum length is 30 symbols. Use the three dots at the end of the wrapped URL to visualize a tooltip with the entire session URL. The timings chart is split into two main parts - the blue section of chart is related to the request, and the orange section of the charts is related to the response. Each sub chart section has a tooltip with descriptive information about the visualized timing.

Full list of tracked timing events (both request and response timings).

- Gateway Determination Time
- DNS Time
- TCP Connect Time
- HTTPS Handshake Time
- Client Connected
- Client Begin Request
- Fiddler Got Request Headers
- Client Done Request
- Server Connected
- Fiddler Begin Request
- Server Got Request
- Server Begin Response
- Fiddler Got Response Headers
- Server Done Response
- Client Begin Response
- Client Done Response


<!-- JIRA Description below

??? The header must contain the information for the total time that it took for execution, i.e. from beginning of the request till the end of the response. The header must have a tooltip describing what is this value. The time must be the same as the duration time in the sessions grid. In case multiple sessions are selected, the header must show the time from start of the first request till the end of the last received response.

??? When a single session is selected, an arrow must be shown on the lef of the URL. Expanding it must open a waterfall presentation of each available timing steps. NOTE: For each session the steps might be different.

??? When multiple sessions are selected we should not have an expander for the moment.

??? The labels for Request and Response must show the full time required to execute each of the step. I.e. from the moment when request started till the end of the request. When multiple sessions are selected we can show the time for execution from first request till the end of the latest request (similar for response) or we can hide the values from the labels.

 -->


## Sizes

This widget must show sizes of the headers and body of request and response, each included in a single chart. The header must contain the information for the total size. The header must have a tooltip describing what is this value.
Each session should be presented with a URL, with three dots at the end if the length is above 30 symbols (check if this number is okay based on the implementation). 
The labels for Request Headers, Request Body, Response Headers and Response Body must show the actual size. When multiple sessions are selected we can show the sum of each one in the label or we can hide the values from the labels.
Each chart part must have tooltips with information what is this, for example for the request headers it should be Size of request headers: 200bytes.
When multiple sessions are selected, the chart sizes must be adjusted based on the largest one. I.e. others should be shown as percentage of this size, so they should be shorter in terms of the used chart.

```
Request Headers

Request Body

Response Headers

Response Body
```

## Request Details

The Request Details widget must contain a table with the following information (NOTE: Some of the items should be bold and alone on a row, to differentiate the information before and after this line):

URL

Method

Client IP

Remote IP

Protocol

SSL Version

Sizes

Request Size

Body Size

Headers Size

DateTime - the full data and time in local timestamp

Timings

<all timings we have for the request, the same that are shown in the timings widget>

## Response Details

The Response Details widget must contain a table with the following information (NOTE: Some of the items should be bold and alone on a row, to differentiate the information before and after this line):

Status Code

Status Text (consider combining it with Status Code) - The status text portion of the HTTP response headers. For instance, for a HTTP/200 response, this column will typically display OK.

Sizes

Response Size

Body Size

Headers Size

Timings

<all timings we have for the response, the same that are shown in the timings widget>

TTFB - Time to first response byte.

TTLB - Time to the last response byte

CompressionSavings - If the response is compressed using Content-Encoding: GZIP or DEFLATE, the number of bytes saved by compression. Show only if the response is compressed

CompressionSavings% - If the response is compressed using Content-Encoding: GZIP or DEFLATE, the percentage of the original response size that was saved. Show only if the response is compressed

Image  Show only if the response is image

Dimensions - The width and height of an image response (e.g. 120, 100).

Pixel Count - The number of pixels contained in an image response (e.g. 12000).

Bytes/Pixel - The computed number of bytes used for each pixel of the image (e.g. 0.90). Larger numbers in this column suggest that the image would benefit from optimization.

AspectRatio - The aspect ratio of an image response (e.g. 1.20).

RGB - A hexadecimal representation of the percentage of red, green, and blue pixels in the image.

GeoLocation - If a JPEG image contains geographic location information, it is displayed here

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
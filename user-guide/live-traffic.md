---
title: Live Traffic Section
description: "Learn how to use the Live Traffic section in the Fiddler Everywhere web-debugging HTTP-proxy client."
slug: web-sessions-list
publish: true
position: 32
previous_url: /user-guide/toolbar/decode-content, /user-guide/toolbar, /user-guide/live-traffic/web-sessions/web-sessions-toolbar, /user-guide/live-traffic/live-traffic
---

# Live Traffic Section

The **Live Traffic** section provides the most essential features of Fiddler Everywhere.

**Live Traffic** displays a summary of each captured session in the **Live Traffic** list. It also provides functionalities to work with these sessions through the **Live Traffic** toolbar, the [**Inspectors**]({%slug inspector-types%}) types, and the corresponding [**Rules**]({%slug rules-general%}) tab. The feature enables the saving and sharing of sessions, editing of issued requests, marking, commenting sessions, and applying rules.

## Defining a Session

A (web) session represents a single transaction between a client and a server, sometimes known as a request/response pair. Each session appears as a single entry in **Live Traffic**. Each session object has a **Request** and a **Response**, representing the data which the client has sent to the server and the data which has been returned by the server to the client. The session object also maintains a set of flags that record metadata about the session, and a timers object that stores timestamps logged during the processing of the session.

![Live Traffic toolbar and list](../images/livetraffic/websessions/websessions-list-all.png)

## Live Traffic Toolbar

The toolbar of the **Live Traffic** section provides various functionalities such as modes for streaming, decoding of content, filtering by various criteria, and saving and sharing of sessions.

To start capturing traffic, enable **Live Traffic** by switching to the **Capturing** mode. To go into the **Paused** mode, use the **Off** switch state to pause the traffic capturing.

![Live Traffic Toolbar](../images/livetraffic/websessions/websessions-toolbar-all.png)

The **Live Traffic** toolbar provides the following functionalities:

- [Streaming](#streaming)
- [Advanced filters](#advanced-filters)
- [Clearing all filters](#clearing-all-filters)
- [Saving](#saving)
- [Sharing](#sharing)
- [Removing all](#removing-all)
- [Searching](#searching)

### Streaming

By default, Fiddler Everywhere uses the buffering mode, which means that the responses are fully collected before any part is sent to the client. Buffering alters the responses&mdash;for example, an image won't begin to download until the containing page download is complete. With the streaming mode, the server responses are immediately returned to the client as it is downloaded. In the streaming mode, tampering with the response body is not possible.

The streaming mode is useful for low-level network timing scenarios&mdash;for example, by design, some browsers will parse partially downloaded HTML, which will start the download of external resources in parallel before the remote server has finished delivering the content. The streaming mode is also useful if a site delivers audio or video streams as Fiddler Everywhere cannot buffer such constant streams.

![Buffering mode vs Streaming Mode](../images/livetraffic/websessions/websessions-toolbar-streaming-mode.png)

To toggle between the buffering and the streaming mode, click the **Stream** button.

### Advanced Filters

To apply filters based on the **Request** and **Response** headers, use the **Advanced Filters**. Only sessions that are covering the filter criteria will appear in the **Live Traffic** list.

The **Advanced Filters** entries use the **AND** logical operator. Each value complies with the **EXACT** match.

To set the advanced filters:

1. Click the **Filter** button to open the advanced filters popup windows.
2. The **Advanced Filters** window allows you to set specific criteria that will filter the captured traffic. Set the filter rules and click **Apply**.

    ![Advanced filters popup](../images/livetraffic/websessions/websessions-toolbar-filter-popup.png)


Currently, the **Advanced Filters** entries are using the **AND** logical operator. Each value is complying with the **EXACT** match.

>tip Alternatively, you can apply filters through the **more** option (three vertical dots) on each Live Traffic column (for example, apply a filter for the _Host_ column ). The column filtering allows you to use the AND and OR logical operators (for two lines) and multiple comparison rules (for example, **Is equal to**, **contains**, **ends with**, etc.). Learn more about [individual column sorting and filtering options](#sort-and-filter-traffic).


### Clearing All Filters

To reset all the filters applied through the advanced filters feature or to each column, use **Clear All Filters**.

### Saving

To save captured sessions, use the **Save** button, which will automatically save all captured traffic. To save only specific sessions, select the desired ones and use the advanced saving options from [the context menu]({%slug web-sessions-list%}#save).

To save sessions for later or prepare sessions for sharing:

1. Click the **Save** button. As a result, a **Save Sessions** prompt window appears.
1. In the **Save Sessions** prompt window, enter a valid name and choose a folder to store the session.
1. (Optional) Use the **password protection** switch to enable encryption and set a password. Only users with knowledge of the password will be able to open the entry.
1. Click **Save**. The saved session immediately loads in the **Sessions** list.
1. Double-click the saved session to load it in a new **Composer** tab. Note that encrypted sessions will prompt for a password before loading.

### Sharing

Sharing sessions dramatically improves collaboration, and Fiddler Everywhere provides the following options to export and share sessions:

- Sharing through the **Share** button from a saved session entry in [the **Sessions** list]({%slug saved-sessions-tab%}#sharing-sessions)).
- Sharing through the **Share** option from [the **Live Traffic** list context menu]({%slug web-sessions-list%}#share).
- Sharing through the **Share** button from the **Live Traffic** list toolbar. The **Live Traffic** toolbar comes with a **Share** button that will save in a file the currently displayed sessions, captured from **Live Traffic**, and then will share them through an explicitly provided email.

To share a session through the toolbar:

1. Click the **Share** button. As a result, the **Save Session** prompt window appears.
1. In the **Save Sessions** prompt window, enter a valid name and choose a folder to store the session.
1. In the **Share Sessions** prompt window, enter a valid email and click **Share**. Entering notes is optional.


### Removing All

To remove all captured sessions, use the **Remove All** button, which will automatically remove all captured traffic from the **Live Traffic** list. To remove only specific sessions, select the desired ones and use the remove options from [the context menu]({%slug web-sessions-list%}#remove).

### Searching

To search for specific values in the URL and the headers of all sessions, use the **Search** text input. The search action will immediately filter and show all sessions, which contain the search terms.

## Live Traffic List

The **Live Traffic** list displays a list of web sessions with a summary of each captured session.

![Live Traffic](../images/livetraffic/websessions/websessions-list-columns.png)

Many operations begin by selecting one or more entries in the **Live Traffic** and then activating other features.

- To select more than one session, hold the **Ctrl** (**Command** on Mac) or **Shift** keys while clicking the desired rows.
- Double-click or press **Enter** (**Return** on Mac) to activate the default inspectors for a single selected session.

When the **Inspectors** are activated, they will automatically decide which inspector type is best suited to display the request and response of the selected session.

### List Icons

The **Live Traffic List** uses icons to provide additional context for each recorded session. To trigger an explanatory tooltip, hover over a **Live Traffic** list entry icon.

The following table displays the icons, which **Live Traffic** supports for its list:

- ![Generic document icon](../images/livetraffic/icons/generic-document.svg) - Represents a generic successful response.
- ![Uploading icon](../images/livetraffic/icons/uploading.svg) - Uploading content for a session in progress (the request is being sent to the server).
- ![Upload paused icon](../images/livetraffic/icons/upload-paused.svg) - Uploading paused for session in progress.
- ![Downloading icon](../images/livetraffic/icons/downloading.svg) - Downloading content for session in progress (the response is being read from the server).
- ![Downloading paused icon](../images/livetraffic/icons/download-paused.svg) - Downloading paused for session in progress.
- ![Aborted icon](../images/livetraffic/icons/aborted.svg) - The session was aborted by the client, Fiddler, or the Server.
- ![Error icon](../images/livetraffic/icons/error.svg) - The response was a server error.
- ![Unauthorized icon](../images/livetraffic/icons/unauthorized.svg) - The response returned status code 401 Unauthorized.
- ![Redirect icon](../images/livetraffic/icons/redirect.svg) - The response redirect status code 300, 301, 302, 303 or 307.
- ![WebSocket icon](../images/livetraffic/icons/websocket.svg) - A tunnel is used for WebSocket traffic.
- ![HTTPS tunnel icon](../images/livetraffic/icons/https-tunnel.svg) - The request used the **HTTP CONNECT** method - establishes a tunnel used for HTTPS traffic.
- ![RPC tunnel icon](../images/livetraffic/icons/rpc.svg) - A tunnel used for RPC traffic.
- ![No Content icon](../images/livetraffic/icons/no-content.svg) - No content loaded.
- ![Not modified icon](../images/livetraffic/icons/not-modified.svg) - Not modified.
- ![Partial content icon](../images/livetraffic/icons/partial.svg) - Partial content.
- ![Image icon](../images/livetraffic/icons/image.svg) - The response was an image.
- ![JavaScript icon](../images/livetraffic/icons/javascript.svg) - The response was a JavaScript file.
- ![CSS icon](../images/livetraffic/icons/css.svg) - The response was a CSS file.
- ![HTML icon](../images/livetraffic/icons/html.svg) - The response was an HTML file.
- ![Flash icon](../images/livetraffic/icons/flash.svg) - The response was a Flash file.
- ![XML icon](../images/livetraffic/icons/xml.svg) - The response was an XML file.
- ![Silverlight icon](../images/livetraffic/icons/silverlight.svg) - The response was a Silverlight file.
- ![Audio icon](../images/livetraffic/icons/audio.svg) - The response was an audio file.
- ![Video icon](../images/livetraffic/icons/video.svg) - The response was a video file.
- ![Font icon](../images/livetraffic/icons/font.svg) - The response was a font file.
- ![JSON icon](../images/livetraffic/icons/json.svg) - The response was a JSON file.
- ![POST method icon](../images/livetraffic/icons/post.svg) - The request used the POST method.


## Columns

The following table lists the **Live Traffic** columns and the key information they display.

|Columns  |Key Data
|:---     |:---
|**\#**   |A unique identification number generated by Fiddler Everywhere.
|**Result**|The HTTP response [status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).
|**Protocol**|The protocol type (HTTP or HTTPS) used by the session.
|**Host** |The hostname and the port of the server to which the request was sent. The column also indicates requests with **CONNECT** method with the **Tunnel to** value ([**CONNECT** tunnels in Fiddler](https://textslashplain.com/2015/11/19/understanding-connect-tunnels/)).
|**Path** |The path refers to the exact location of a page, post, file, or another asset. The path resides after the hostname and is separated by a forward slash (`/`).
|**URL**  |The URL contains the protocol, the hostname, the port, and the path from the request.
|**Method**|The HTTP method used by the request that was made (**GET**, **POST**, **PUT**, and so on).
|**Process**|The local OS process from which the traffic originated&mdash;for example, `chrome:8212` indicates a Google Chrome browser instance.
|**Client IP**|Indicates the client IP that sent this request. Mostly applicable when multiple computers on a network are pointed to a single Fiddler instance.
|**Remote IP**|Indicates the IP address of the server used for this request.
|**Body Size**|The number of bytes in the response body.
|**Caching**|Values from the **Expires** and **Cache-Control** headers of the response.
|**Content-Type**|The **Content-Type** header from the response.
|**Time** |Indicates when the session was executed in an `HH:MM:SS:ms` format.
|**Date** |Indicates the date when the session was executed in a `MM:DD:YYYY` format.
|**Duration**|Indicates the duration (in milliseconds) that took for the session to complete.
|**Rules Modified**|Indicates if the session is modified by active rules from the **Rules** tab.
|**Comments**|Shows the custom comments added by you or the author of a shared session.

## Traffic Sorting and Filtering

By default, the captured traffic is sorted in the order sessions appear during the traffic capturing, that is, sorted by the unique identification number column, and no active filters are applied. You can use the built-in [sorting](#sorting-options) and [filtering](#filtering-options) options to optimize the outcome.

### Sorting Options

To create a custom sorting order, click the desired column. For example, click the **URL** column to sort alphabetically based on the URL, or click the **Body Size** column to sort based on the session size in bytes. The default sorting order is based on the unique identification number (order of appearance).

### Filtering Options

Each column comes with a **more** button (three vertical dots), which opens a popup with additional **Filter** and **Columns** submenus.

The **Filter** submenu enables you to apply filters to the currently selected column only&mdash;for example, filter all the traffic by the **host** name or by a specific **status code**. Columns with active filters will have a blue filter indicator. You can clear active filters through the **Filter** popup (for the filtered column) or through the global [**Clear All Filters** button](#clear-all-filters).

![Filter context submenu](../images/livetraffic/columns/dots-filter.png)


Use the **Columns** submenu to select which column will be visible in the **Live Traffic** list. By default, the following columns are visible:
- **URL**
- **Result**
- **Method**
- **Process**
- **Remote IP**
- **Body Size**
- **Comments**

Refer to the [KB article "How to View Web Session Summary"]({%slug how-to-view-web-session-summary%}) for detailed information about each column type.


![Columns context submenu](../images/livetraffic/columns/dots-columns.png)

## Context Menu Options

The context menu for the **Live Traffic** exposes actions that you can apply for one or more sessions. To show the context menu, right-click (Windows OS), or press **Control** and mouse-click (macOS).

![Live Traffic context menu](../images/livetraffic/websessions/websessions-list-context-menu.png)

### Editing in the Composer

The **Edit in Composer** context menu option loads the selected request in a new composer window where it can be edited, saved for later usage and sharing, and reissued.

### Saving

To save selected sessions, use the **Save** context menu option. The saved sessions will appear in the **Sessions** list to the left of the Fiddler Everywhere interface and from there you can later re-open, export, and share them.

- **Selected sessions**&mdash;Saves all chosen sessions; can be accessed with the keyboard by pressing `S`.
- **Unselected sessions**&mdash;Saves all unselected Sessions; can be accessed with the keyboard by pressing `Shift` +`Cmd` +`S` (on Mac), or `Shift`+`S` (on Windows).
- **All Sessions**&mdash;Saves all captured traffic; can be accessed with the keyboard by pressing `Cmd`+`S` (on Mac), or `Ctrl`+`S` (on Windows).

All options will display a **Save** prompt window. To save the desired sessions:

1. Select the sessions, open the context menu, and click the **Save** option.
1. Enter your session name and choose the folder that will store the entry.
1. (Optional) Use the **password protection** switch to enable encryption and set a password. Only users with knowledge of the password will be able to open the entry.
1. Click **Save**. The saved session immediately loads in the **Sessions** list.
1. Double-click the saved session to load it in a new **Composer** tab. Note that encrypted sessions will prompt for a password before loading.

Alternatively, you can save all captured traffic [through the **Save** button from the toolbar]({%slug web-sessions-list%}#save).

### Sharing

The **Share** context menu option enables the sharing of sessions. Before any session is shared, it is saved as an entry in the **Sessions** list. Then, the entry can be transmitted through the email.

- **Selected sessions**&mdash;Saves and shares all selected sessions.
- **Unselected sessions**&mdash;Saves and shares all unselected sessions.
- **All Sessions**&mdash;Saves and shares all captured traffic.

All options will initially display a **Save** and then a **Share** prompt window.

1. Select the sessions, open the context menu, and click the **Share** option.
1. The selected sessions are being saved. Enter your session name and click **Save and proceed**.
1. The **Share** prompt window appears. Enter a valid email and, optionally, add notes. Once ready, click **Share**. Note that when sharing an encrypted session, the recipient will need the password to access it.

Alternatively, you can share captured traffic [through the **Share** button from the toolbar]({%slug web-sessions-list%}#share).

### Exporting

The **Export** context menu option allows you to export the captured traffic in various formats such as SAZ, HTTPArchive, WCAT, MeddlerScript, cURLScript, and more.

- **Selected sessions**&mdash;Saves and shares all selected sessions.
- **Unselected sessions**&mdash;Saves and shares all unselected sessions.
- **All Sessions**&mdash;Saves and shares all captured traffic.

### Removing

To delete sessions from your **Live Traffic** list, use the **Remove** context menu options.

- **Selected sessions**&mdash;Removes all selected sessions; can be accessed with the keyboard by pressing `Cmd`+`Back` (on Mac), `Del` (on Windows).
- **Unselected sessions**&mdash;Removes all unselected sessions; can be accessed with the keyboard by pressing `Shift`+`Cmd`+`Back` (on Mac), or `Shift`+`Del` (on Windows).
- **All Sessions**&mdash;Removes all captured traffic; can be accessed with the keyboard by pressing `Cmd`+`X` (on Mac), or `Ctrl`+`X` (on Windows).

### Commenting

To add comments for desired sessions, use the **Comment** context menu option.

1. Select the sessions, open the context menu, and click the **Comment** option, which can be accessed with the keyboard by pressing `M`.
1. A **Comment** dialog appears. Enter the comment and click **Ok**.
1. The text is added to the comment field for the selected sessions.

### Marking

To apply colors or to strike out selected sessions, use the **Mark** context menu option.

1. Select the sessions, open the context menu, and click the **Mark** option.
1. Click the preferred marking style to apply it.

### Replaying

To replay previously captured sessions, use the **Replay** context menu option, which can be accessed with the keyboard by pressing `R`.

### Selecting

To select sessions directly related to the currently selected session, use the **Select** context menu option. You choose **parent**, **children**, and **duplicate** sessions.

- **Parent request** selects the session that is a parent of the currently selected session; can be accessed with the keyboard by pressing `P`.
- **Children requests** selects the sessions that are children of the currently selected session; can be accessed with the keyboard by pressing `C`.
- **Duplicate request** selects the session that is identical to the currently selected session; can be accessed with the keyboard by pressing `D`.

### Copying

To place session information in the clipboard, use the **Copy** context menu option, which supports the following options:

- **URL** provides the session URL; can be accessed with the keyboard by pressing `Cmd`+`U` (on Mac), or `Ctrl`+`U` (on Windows).
- **Full Summary** provides verbose session details; can be accessed with the keyboard by pressing `Cmd`+`C` (on Mac), or `Ctrl`+`C` (on Windows).

The following example demonstrates how to copy a URL.

```
http://0.0.0.0:4000/fiddler-everywhere/images/livetraffic/websessions/websessions-list-share-options.png
```

The following example demonstrates how to the full information.

```
#   RESULT  PROTOCOL    HOST    URL METHOD  BODY    CACHING CONTENT-TYPE    PROCESS COMMENTS
277 200 HTTP    0.0.0.0:4000    /fiddler-everywhere/images/livetraffic/websessions/websessions-list-share-options.png   GET 207,094 private, max-age=0, proxy-revalidate, no-store, no-cache, must-revalidate   image/png; charset=utf-8        
```

### Adding New Rules

You can use a captured session entry to mock some server behavior. For similar cases, you can use the session URL alongside the [**Rules** tab]({%slug rules-general%}). Creating rules allows you to test complex scenarios and various mock responses.

To add a new rule:

1. Select the desired session entry and right-click to open the context menu. Select **Add New Rule**.
2. A new rule is automatically created. The rule will use the URL from the selected session entry and, by default, will apply the initial response through the **Return manually crafted response** action option.

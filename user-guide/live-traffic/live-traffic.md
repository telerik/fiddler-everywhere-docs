---
title: Live Traffic
description: UI instructions for working with the Live Traffic tab in the Fiddler Everywhere application
slug: web-sessions-list
publish: true
position: 10
previous_url: /user-guide/toolbar/decode-content, /user-guide/toolbar, /user-guide/live-traffic/web-sessions/web-sessions-toolbar
---

# Live Traffic Tab

The __Live Traffic__ tab is an essential feature of Fiddler Everywhere. It display a summary of each captured session (in the [**Live Traffic list**](#live-traffic-list)) and provides functionalities to work with these sessions (via the [**Live Traffic toolbar**](#live-traffic-toolbar), the [**Inspectors**]({%slug inspector-types%}) tabs, and the interconnected [**Rules tab**]({%slug rules-general%}). The section also enables sessions saving and sharing, editing issued requests, marking, commenting sessions, and applying rules.

>tip A **Session** (also mentioned as a **web session**) represents a single transaction between a client and a server, sometimes known as for request/response pair. Each session appears as a single entry in the Live Traffic (refer to the images below). Each Session object has a **Request** and a **Response**, representing what the client sent to the server and what the server returned to the client. The Session object also maintains a set of Flags that record metadata about the session and a Timers object that stores timestamps logged during the Session processing.

![Live Traffic toolbar and list](../../images/livetraffic/websessions/websessions-list-all.png)

## Live Traffic Toolbar

The Live Traffic toolbar provides various functionalities like streaming mode, decoding content, filtering by different criteria, saving, and sharing sessions.


To start capturing traffic, you need to enable __Live Traffic__ switch to **Capturing** mode. Use the off switch state to **pause** the traffic capturing (**Paused** mode).

The Live Traffic toolbar provides the following functionalities:

- [Stream](#stream)
- [Advanced Filters](#advanced-filters)
- [Clear All Filters](#clear-all-filters)
- [Save](#save)
- [Share](#share)
- [Remove All](#remove-all)
- [Search](#search)


![Live Traffic Toolbar](../../images/livetraffic/websessions/websessions-toolbar-all.png)

### Stream

By default, Fiddler Everywhere uses __buffering mode__, which means that the responses are fully collected before any part is sent to the client. Buffering alters the responses (for example, an image won't begin to download until the containing page download is complete). With __streaming mode__, the server's responses are immediately returned to the client as it is downloaded. In streaming mode, tampering with the response body is not possible.

1. Click on the __Stream__ button to toggle between the streaming and buffering modes.

    Streaming mode is useful for low-level network timing scenarios (for example, by design, some browsers will parse partially-downloaded HTML. That would start downloading external resources in parallel before the remote server has finished delivering the content).
    
    ![Buffering mode vs Streaming Mode](../../images/livetraffic/websessions/websessions-toolbar-streaming-mode.png)

    Streaming mode is also useful in cases where a site delivers audio or video streams. These kinds of never-ending streams can't be buffered by Fiddler Everywhere.

### Advanced Filters

Use the __Advanced Filters__ to apply filters based on the Request and Response headers. Only sessions that are covering the filter criteria will appear in the Live Traffic list. 

1. Click on the filter button to open the advanced filters popup windows.

2. The __Advanced Filters__ window allows you to set specific criteria that will filter the captured traffic. Set the filter rules and click __Apply__.

    ![Advanced filters popup](../../images/livetraffic/websessions/websessions-toolbar-filter-popup.png)

Currently, the __Advanced Filters__ entries are using **AND** logical operator. Each value is complying with the **EXACT** match.

>tip Alternatively, you can apply filters through the _more_ option on each Live Traffic column (e.g., apply a filter for _Host_ column). The column filtering allows using AND and OR logical operators (for two lines), and multiple comparison rules (for example, like **Is equal to**, **contains**, **ends with**, etc.).

### Clear All Filters

Use the __Clear All Filters__ to reset all filters applied by __Advanced Filters__ and filters applied for each column (see [the columns section](#-live-traffic-columns))


### Save

Use the __Save__ button to save sessions for later use or prepare sessions for sharing.

1. Click on the __Save__ button.

2. A __Save Sessions__ prompt windows appear. Enter a valid name and click __Save__.

    ![Save prompt window](../../images/livetraffic/websessions/websessions-toolbar-save-prompt.png)

3. The current entry (of sessions) appears in the __Sessions__ list.

>important The __Save__ button will automatically save all captured traffic. If you want to keep only specific sessions, you can select the wanted sessions and use [the context menu]({%slug web-sessions-list%}#save) for advanced save options.

### Share

Sharing sessions greatly improves collaboration, and Fiddler Everywhere provides several options to export and share sessions:

- Sharing via the __Share__ button from a saved session entry in [the __Sessions__ list]({%slug saved-sessions-tab%}#sharing-sessions)).
- Sharing via the __Share__ option from [the __Live Traffic__ list context menu]({%slug web-sessions-list%}#share).
- Sharing via the __Share__ button from the __Live Traffic__ list toolbar (see details below).

The toolbar comes with a __Share__ button that will save the currently displayed sessions (captured from __Live Traffic__) in a file and then shares them through email (provided explicitly).

1. Click on the __Share__ button.

2. The __Save Session__ prompt window appears. You need to save the sessions before they could be shared.

    ![Saving before traffic could be shared](../../images/livetraffic/websessions/websessions-toolbar-share-saveprompt.png)

3. The __Share Sessions__ prompt window appears. Enter a valid email (mandatory) and notes (optional) and click on the __Share__ button.

    ![Share prompt window](../../images/livetraffic/websessions/websessions-toolbar-share-shareprompt.png)


### Remove All

Use the __Remove All__ button to remove __all__ captured traffic from the __Live Traffic__ list. To remove specific selected sessions, use the [context menu]({%slug web-sessions-list%}#remove)


### Search

Use the __Search__ text input to search for specific values in the URL and the Headers of all sessions. The search action will immediately filter and show all sessions that are containing the search term.


## Live Traffic List

The Live Traffic list is an essential feature of Fiddler Everywhere - it displays a list of web sessions with a summary of each session that the Fiddler Everywhere client has captured.

![Live Traffic](../../images/livetraffic/websessions/websessions-list-columns.png)

Many operations begin by selecting one or more entries in the Live Traffic and then activating other features.
- To select more than one Session, hold the __Ctrl__ (__Command__ on Mac) or __Shift__ keys while clicking on the desired rows.
- Double-click or press __Enter__ (__Return__ on Mac) to activate the default inspectors for a single selected Session.

When the Inspectors are activated, they will automatically decide which Inspector is best suited to display the selected session's request and response.


### Live Traffic List Icons

The **Live Traffic List** uses the icons listed below to provide additional context for each recorded session. Hover on an icon on an entry in the Live Traffic list to trigger an explanatory tooltip.

- ![Generic document icon](../../images/livetraffic/icons/generic-document.png) - Represents a generic successful response.
- ![Uploading icon](../../images/livetraffic/icons/uploading.png) - Uploading content for a session in progress (the request is being sent to the server).
- ![Upload paused icon](../../images/livetraffic/icons/upload-paused.png) - Uploading paused for session in progress.
- ![Downloading icon](../../images/livetraffic/icons/downloading.png) - Downloading content for session in progress (the response is being read from the server).
- ![Downloading paused icon](../../images/livetraffic/icons/download-paused.png) - Downloading paused for session in progress.
- ![Aborted icon](../../images/livetraffic/icons/aborted.png) - The session was aborted by the client, Fiddler, or the Server.
- ![Error icon](../../images/livetraffic/icons/error.png) - The response was a server error.
- ![Unauthorized icon](../../images/livetraffic/icons/unauthorized.png) - The response returned status code 401 Unauthorized.
- ![Redirect icon](../../images/livetraffic/icons/redirect.png) - The response returned status code 300, 301, 302, 303 or 307 redirect.
- ![WebSocket tunnel icon](../../images/livetraffic/icons/websocket-tunnel.png) - A tunnel used for WebSocket traffic.
- ![HTTPS tunnel icon](../../images/livetraffic/icons/https-tunnel.png) - The request used the **HTTP CONNECT** method - establishes a tunnel used for HTTPS traffic.
- ![RPC tunnel icon](../../images/livetraffic/icons/rpc-tunnel.png) - A tunnel used for RPC traffic.
- ![No Content icon](../../images/livetraffic/icons/no-content.png) - No content loaded.
- ![Not modified icon](../../images/livetraffic/icons/not-modified.png) - Not modified.
- ![Partial content icon](../../images/livetraffic/icons/partial-content.png) - Partial content.
- ![Image icon](../../images/livetraffic/icons/image.png) - The response was an image.
- ![JavaScript icon](../../images/livetraffic/icons/javascript.png) - The response was a JavaScript file.
- ![CSS icon](../../images/livetraffic/icons/css.png) - The response was a CSS file.
- ![HTML icon](../../images/livetraffic/icons/html.png) - The response was an HTML file.
- ![Flash icon](../../images/livetraffic/icons/flash.png) - The response was a Flash file.
- ![XML icon](../../images/livetraffic/icons/xml.png) - The response was an XML file.
- ![Silverlight icon](../../images/livetraffic/icons/silverlight.png) - The response was a Silverlight file.
- ![Audio icon](../../images/livetraffic/icons/audio.png) - The response was an audio file.
- ![Video icon](../../images/livetraffic/icons/video.png) - The response was a video file.
- ![Font icon](../../images/livetraffic/icons/font.png) - The response was a font file.
- ![JSON icon](../../images/livetraffic/icons/json.png) - The response was a JSON file.
- ![POST method icon](../../images/livetraffic/icons/post-method-request.png) - The request used the POST method.

## Live Traffic Columns

Certain key information is displayed in the columns of Live Traffic, including:

- __\#__ - An unique identification number generated by Fiddler Everywhere.
- __Result__ - The HTTP response [status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).
- __Protocol__ - The protocol type (HTTP or HTTPS) used by the session.
- __Host__ - The hostname and the port of the server to which the request was sent. The column also indicates requests with **CONNECT** method with **Tunnel to** value (learn more about [CONNECT tunnels in Fiddler](https://textslashplain.com/2015/11/19/understanding-connect-tunnels/)).
- __Path__ - The path refers to the exact location of a page, post, file, or other asset. The path resides after the hostname and is separated by “/” (forward slash).
- __URL__ - The URL contains the protocol, the hostname, the port and the path from the request.
- __Method__ - The HTTP Method used by the made request (GET, POST, PUT, etc.).
- __Process__ - The local OS process from which the traffic originated (for example _chrome:8212_ indicates a Google Chrome browser instance).
- __Client IP__ - Indicates the client IP that sent this request. Mostly useful when multiple computers on a network are pointed to a single Fiddler instance.
- __Remote IP__ - Indicates the IP address of the server used for this request.
- __Body Size__ - The number of bytes in the response body.
- __Caching__ - Values from the Response's **Expires** and **Cache-Control** headers.
- __Content-Type__ - The **Content-Type** header from the response.
- __Time__ - Indicates the time when the session was executed in **HH:MM:SS:ms** format.
- __Date__ - Indicates the date when the session was executed in **MM:DD:YYYY** format.
- __Duration__ - Indicates the duration in miliseconds that took for the session to complete.
- __Comments__ A field for showing the custom comments added by you (or the author of a shared session).


### Live Traffic Sorting

By default, the captured traffic is sorted in the order they appear during the traffic capturing (sort by the unique identification number column). Create a custom sorting order by clicking on the desired column. For example, click on the **URL** column to sort alphabetically based on the URL, or click on the **Body Size** column to sort based on the bytes' session size.

### Filter and Columns Options

Each column comes with a **more** button (three vertical dots), which opens a popup with additional **Filter**  and **Columns** submenus. 

Use the **Filter** submenu to apply filters for the currently selected column only (e.g., filter all the traffic by _host_ name or by a specific _status code_). Columns with active filters will have a blue filter indicator. You can clear active filters via the **Filter** popup (for the filtered column) or use the global [__Clear All Filters__ button](#clear-all-filters).

![Filter context submenu](../../images/livetraffic/columns/dots-filter.png)

Use the **Columns** submenu to select which column should be visible in the **Live Traffic** list. By default, all columns are visible. Refer to the [KB article "How to View Web Session Summary"]({%slug how-to-view-web-session-summary%}) for detailed information about each column type.

![Columns context submenu](../../images/livetraffic/columns/dots-columns.png)

## Live Traffic Context Menu

The context menu for the Live Traffic exposes several actions that can be applied for a Session or multiple Sessions. To show the context menu, press right-click on Windows (__Control__ + mouse click on Mac).

![Live Traffic context menu](../../images/livetraffic/websessions/websessions-list-context-menu.png)

### Edit in Composer

The context menu option __Edit in Composer__ loads the selected request in a new Composer window where it can be edited, saved (for later usage and sharing), and reissued.

### Save

The context menu option __Save__ provides the means to save selected sessions. The saved sessions will appear in the __Sessions__ (the list to the left of the Fiddler Everywhere interface) from where they can be re-opened later, exported, and shared.

- __Selected sessions__ - Saves all selected sessions. Keyboard shortcut: __S__.
- __Unselected sessions__ - Saves all unselected sessions. Keyboard shortcut: __Shift__ + __Cmd__ + __S__ (Mac)  __Shift__ + __S__ (Windows).
- __All Sessions__ - Saves all captured traffic (Keyboard shortcut: __S__). Keyboard shortcut: __Cmd__ + __S__ (Mac)  __Ctrl__ + __S__ (Windows).

All three options will display a save prompt.

1. Select the sessions, open the context menu, and click on the __Save__ option.
2. Enter your session name and click __Save__
3. The saved sessions are immediately loaded in the __Sessions__ list.
4. Double-click on the saved session to load it in the __Live Traffic__ list.

>tip Alternatively, you can save all captured traffic [via the __Save__ button from the toolbar]({%slug web-sessions-list%}#save)

### Share

The context menu option __Share__ enables the sharing of sessions. Before any session is shared, it is saved as an entry in the __Sessions__ list. Then the entry can be shared via email.

- __Selected sessions__ - Saves & shares all selected sessions.
- __Unselected sessions__ - Saves & shares all unselected sessions.
- __All Sessions__ - Saves and shares all captured traffic.

All three options will initially display a save prompt and then a share prompt window.

1. Select the sessions, open the context menu,  and click on the __Share__ option.
2. The selected sessions are being saved. Enter your session name and click __Save and proceed__
3. The share screen prompt window appears. Enter valid email and optionally add notes. Once ready, click __Share__.

>important Fiddler Everywhere has a quota limit for creating snapshots of sessions. Refer to the FIddler Everywhere plans page for details.

>tip Alternatively, you can share captured traffic [via the __Share__ button from the toolbar]({%slug web-sessions-list%}#share)


### Export

The context menu option __Export__ allows you to export the captured trafcic in different known formats (like SAZ, HTTPArchive, WCAT, MeddlerScript, cURLScript and others).

- __Selected sessions__ - Saves & shares all selected sessions.
- __Unselected sessions__ - Saves & shares all unselected sessions.
- __All Sessions__ - Saves and shares all captured traffic.


### Remove

Use the __Remove__ context menu options to delete sessions from your __Live Traffic__ list. 

- __Selected sessions__ - Removes all selected sessions. Keyboard shortcut: __Cmd__ + __Back__ (Mac), __Del__ (Windows).
- __Unselected sessions__ - Removes all unselected sessions. Keyboard shortcut: __Shift__ + __Cmd__ + __Back__ (Mac), __Shift__ + __Del__ (Windows).
- __All Sessions__ - Removes all captured traffic. Keyboard shortcut: __Cmd__ + __X__ (Mac), __Ctrl__ + __X__ (Windows).

### Comment

Use the __Comment__ context menu option to add comments for the associated sessions. 

1. Select the sessions, open the context menu, and click on the __Comment__ option. Keyboard shortcut: __M__.
2. A __Comment__ dialog appears. Enter the comment and click __Ok__. 
3. The text is added to the comment field for the selected sessions.

### Mark

Use the __Mark__ context menu option to apply different colors or to strikeout selected sessions.

1. Select the sessions, open the context menu, and click on the __Mark__ option.
2. Click on the preferred marking style to apply it.

### Replay

Use the __Replay__ context menu option to replay previously captured sessions.  Keyboard shortcut: __R__.

### Select

Use the __Select__ context menu option to select sessions directly related to the currently selected session. The possibilities are to choose  __parent__, __children__, and __duplicate__ sessions.

- __Parent request__ Selects the session that is a parent of the currently selected session. Keyboard shortcut: __P__
- __Children requests__ Select the sessions that are children of the currently selected session. Keyboard shortcut: __C__
- __Duplicate request__ Selects the session that is duplicated to the currently selected session. Keyboard shortcut: __D__

### Copy

Use the __Copy__ context menu option to place session information in the clipboard. The copied information options are:

- __URL__ Provides the session URL. Keyboard shortcut:__Cmd__ + __U__ (Mac), __Ctrl__ + __U__ (Windows)
- __FUll Summary__ Provides verbose session details. Keyboard shortcut: __Cmd__ + __C__ (Mac), __Ctrl__ + __C__ (Windows)


_Example for copying URL_
```
http://0.0.0.0:4000/fiddler-everywhere/images/livetraffic/websessions/websessions-list-share-options.png
```

_Example for copying full info_
```
#   RESULT  PROTOCOL    HOST    URL METHOD  BODY    CACHING CONTENT-TYPE    PROCESS COMMENTS
277 200 HTTP    0.0.0.0:4000    /fiddler-everywhere/images/livetraffic/websessions/websessions-list-share-options.png   GET 207,094 private, max-age=0, proxy-revalidate, no-store, no-cache, must-revalidate   image/png; charset=utf-8        
```

### Add New Rule

A captured session entry can be used to mock some server behavior. For similar cases, the session URL can be used alongside the [Rules tab]({%slug rules-general%}). Creating rules allows you to test complex scenarios and various mock responses.

1. Select the desired session entry and make a right-click to open the context menu. From the context menu, select **Add New Rule**.

2. New rule is automatically created. The rule will use the URL from the selected session entry and, by default, will apply the initial response via the **Return manually crafted response** action option.


## Additional Resources

- [Rules tab]({%slug rules-general%})
- [Inspectors types]({%slug inspector-types%})
- [Composer tab]({%slug composer-tab%})
- [Modify traffic]({%slug modify-traffic-get-started%})
- [Mock server response]({%slug rulesbuilder-get-started%})

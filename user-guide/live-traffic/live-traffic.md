---
title: Live Traffic
slug: web-sessions-list
tags: Fiddler Live Traffic, sniffed traffic, captured web traffic, sessions, fiddler sessions, share sessions, http sessions, 
publish: true
position: 10
---

## Live Traffic

The __Live Traffic__ tab is one of the most important feature of Fiddler Everywhere. It display a short summary of each captured session (in the __Live Traffic list__) and provides functionalities to work with these sessions (via the __Live Traffic toolbar__ and the Inspectors tabs). Fiddler Everywhere enables sessions saving and sharing.

>tip A **session** (also mentioned as **web session**) represents a single transaction between a client and a server, sometimes known as request/response pair. Each Session appears as a single entry in the Live Traffic (refer to the images below). Each Session object has a Request and a Response, representing what the client sent to the server and what the server returned to the client. The Session object also maintains a set of Flags that record metadata about the Session, and a Timers object that stores timestamps logged in the course of processing the Session.

![Live Traffic toolbar and list](../../images/livetraffic/websessions/websessions-toolbar-list-full.png)

## Live Traffic Toolbar

The Live Traffic toolbar provides various functionalities like streaming mode, decoding content, filtering by criteria, saving, and sharing sessions.
![Live Traffic Toolbar](../../images/livetraffic/websessions/websessions-toolbar-all.png)

To start capturing, you need to enable __Live Traffic__ switch to **Capturing** mode. Use the off switch state to **pause** the traffic capturing.
![Enabling Live Traffic](../../images/livetraffic/websessions/websessions-live-traffic-capturing.png)

#### Stream

By default, Fiddler Everywhere uses __buffering mode__, which means that the responses are fully collected before any part is sent to the client. Buffering alters the responses (for example, an image won't begin to download until the containing page download is complete). With __streaming mode__, the server's responses are immediately returned to the client as it is downloaded. In streaming mode, tampering with the response body is not possible.

1. Click on the __Stream__ button to enable/disable the streaming mode.

    ![Stream Toggle button](../../images/livetraffic/websessions/websessions-toolbar-stream-toggle.png)

    Streaming mode is useful for low-level network timing scenarios (for example, by design some browsers will parse partially-downloaded HTML, and that would start downloading external resources in parallel before the remote server has finished delivering the content).
    ![Buffering mode vs Streaming Mode](../../images/livetraffic/websessions/websessions-toolbar-streaming-mode.png)

    Streaming mode is also useful in cases where a site delivers audo or video streams. These kind of never-ending streams can't be buffered by Fiddler Everywhere.

#### Decode

Use __Decode__ toggle button to remove all HTTP content and Transfer encoding from requests and responses.

1. Click on the __Toggle__ button to enable/disable decoding the encoded content.
    
    ![Decode Toggle button](../../images/livetraffic/websessions/websessions-toolbar-decode-toggle.png)

_Example HTTP response with_ *Decode* _toggled to OFF_
![Decode OFF](../../images/livetraffic/websessions/websessions-toolbar-decode-off.png)

_Example HTTP response with_ *Decode* _toggled to ON_
![Decode ON](../../images/livetraffic/websessions/websessions-toolbar-decode-on.png)

#### Filter

Use __Filter__ to apply advanced filters based on the Request and Response headers. Only sessions that are covering the filter criteria will appear in the Live Traffic list.

1. Click on the filter button to open the advanced filters popup windows.

    ![Filter sessions button](../../images/livetraffic/websessions/websessions-toolbar-filter.png)

2. The advanced filters windows allow you to set specific criteria that will filter the captured traffic. Set the filter rules and click __Apply__.

    ![Advanced filters popup](../../images/livetraffic/websessions/websessions-toolbar-filter-popup.png)

#### Save

Use __Save__ buttton to save sessions for later use or to prepare sessions for sharing.

1. Click on the __Save__ button.

2. A __Save Sessions__ prompt windows appears. Enter valid name and click __Save__.

    ![Save prompt window](../../images/livetraffic/websessions/websessions-toolbar-save-prompt.png)

3. The current sessions entry appears in __Sessions__ list.

>important The __Save__ button will automatically save all captured traffic. If you want to save only specific sessions, you can select the wanted sessions and use [the context menu]({%slug web-sessions-list%}#save) for advanced save options.

#### Share

Sharing sessions greatly improves colaboration and Fiddler Everywhere provides several options to export and share sessions:

- Sharing [via __Share__ button from the __Live Traffic__ list toolbar](#share-live-traffic-sessions).
- Sharing [via __Share__ button from the toolbar of already saved session (in __Saved Sessions__)](#share-previosly-saved-sessions).
- Sharing [via __Share__ option from the __Live Traffic__ list context menu]({%slug web-sessions-list%}#share).
- Sharing by exporting saved sessions in __SAZ__ format ([via context menu in __Saved Sessions__]({%slug saved-sessions-tab%}#export)).
- Sharing by exporting in different session formats ([via __File menu__]({%slug  file-menu%}#export-sessions))

This article demonstrates how to share sessions using the first two options. See the linked articles for examples on how to use exporting or sharing via the context menu.

#### Share Sessions

The toolbar comes with __Share__ button that will save the currently displayed sessions (captured from __Live Traffic__) in a file, and then shares them through email (provided explicitly).

1. Click on the __Share__ button.
2. The __Save Session__ prompt window appears. You need to save the sessions before they could be shared.

    ![Saving before traffic coulod be shared](../../images/livetraffic/websessions/websessions-toolbar-share-saveprompt.png)

3. The __Share Sessions__ prompt window appears. Enter a valid email (mandatory) and notes (optional) and click on __Share__ button.

    ![Share prompt window](../../images/livetraffic/websessions/websessions-toolbar-share-shareprompt.png)


To share Previosly Saved Sessions

1. Double-click on the saved sessions entry from __Sessions__ list.

2. The selected entry opens in a new tab. Click on the __Share__ button.

    ![Loading previosly saved sessions](../../images/livetraffic/websessions/websessions-toolbar-share-savedshare.png)

3. The __Share Sessions__ prompt window appears. Enter a valid email (mandatory) and notes (optional) and click on __Share__ button.

#### Remove All

The __Remove All__ button is removing __all__ currently captured traffic from the __Live Traffic__ list. To remove specific sessions only use the [context menu]({%slug web-sessions-list%}#remove)

## Live Traffic List

The Live Traffic is an essential feature of Fiddler Everywhere - it displays a list of web sessions with summary of each session that the Fiddler Everywhere client has captured.
![Live Traffic](../../images/livetraffic/websessions/websessions-list-all.png)

Many operations begin by selecting one or more entries in the Live Traffic and then activating other features.
- To select more than one Sessions, hold the __Ctrl__ (__Command__ on Mac) or __Shift__ keys while clicking on the desired rows.
- Double-click or press __Enter__ (__Return__ on Mac) to activate the default inspectors for a single selected Session.

When the Inspectors are activated, they will automatically decide which Inspector is best suited to display the selected session's request and response.

#### Live Traffic Columns

Certain key information is displayed in the columns of the Live Traffic, including:

- __\#__ - An identification number generated by Fiddler Everywhere
- __Result__ - The status code from the response
- __Protocol__ - The protocol (HTTP/HTTPS/FTP) used by the Session
- __Host__ - The hostname and the port of the server to which the request was sent
- __URL__ - The URL path, file, and query string from the request
- __Method__ - The HTTP Method used by the request (GET, POST, etc.)
- __Body__ - The number of bytes in the response body
- __Caching__ - Values from the Response's Expires and Cache-Control headers
- __Content-Type__ The Content-Type header from the response
- __Process__ The local OS process from which the traffic originated
- __Comments__ Field for showing the custom comments added by you (or the author of a shared session).


#### Live Traffic Context Menu

The context menu for the Live Traffic exposes several actions that can be applied for a Session or multiple Sessions.To show the context menu, press right-click on Windows (__Control__ + mouse click on Mac).

![Live Traffic context menu](../../images/livetraffic/websessions/websessions-list-context-menu.png)

#### Edit in Composer

The context menu option __Edit in Composer__ loads the selected recust into the composer windows where it can be editted and reissued.

#### Save

The context menu option __Save__ provides the means to save selected sessions. The saved sessions will appear in the __Sessions__ (the list to the left of Fiddler Everywhere interface) from where they can be re-opened later, exported, and shared.

- __Selected sessions__ - Saves all selected sessions. Keyboard shortcut: __S__.
- __Unselected sessions__ - Saves all unselected sessions. Keyboard shortcut: __Shift__ + __Cmd__ + __S__ (Mac)  __Shift__ + __S__ (Windows).
- __All Sessions__ - Saves all captured traffic (Keyboard shortcut: __S__). Keyboard shortcut: __Cmd__ + __S__ (Mac)  __Ctrl__ + __S__ (Windows).

All three options will display a save prompt.

1.  Select the sessions, open the context menu, and click on __Save__ option.
2. Enter your session name and click __Save__
3. The saved sessions are immediately loaded in the __Sessions__ list.
4. Double-click on the saved session to load it in the __Live Traffic__ list.

>tip Alternatively, you can save all captured traffic [via the __Save__ button from the toolbar]({%slug web-sessions-list%}#save)

#### Share

The context menu option __Share__ enables the sharing of sessions. Before any session is shared, it is saved as an entry in the __Sessions__ list. Then the entry can be shared via email.

- __Selected sessions__ - Saves & shares all selected sessions.
- __Unselected sessions__ - Saves & shares all unselected sessions.
- __All Sessions__ - Saves and shares all captured traffic.

All three options will initially display a save prompt and then a share prompt window.

1. Select the sessions, open the context menu,  and click on __Share__ option.
2. The selected sessions are being saved. Enter your session name and click __Save and proceed__
3. The share screen prompt window appears. Enter valid email and optionally add notes. Once ready, click __Share__.

>important Fiddler Everywhere has a quota limit for creating snapshots of sessions. Refer to the FIddler Everywhere plans page for details.

>tip Alternatively, you can share captured traffic [via the __Share__ button from the toolbar]({%slug web-sessions-list%}#share)

#### Remove

Use the __Remove__ context menu options to delete sessions from your __Live Traffic__ list. 

- __Selected sessions__ - Removes all selected sessions. Keyboard shortcut: __Cmd__ + __Back__ (Mac), __Del__ (Windows).
- __Unselected sessions__ - Removes all unselected sessions. Keyboard shortcut: __Shift__ + __Cmd__ + __Back__ (Mac), __Shift__ + __Del__ (Windows).
- __All Sessions__ - Removes all captured traffic. Keyboard shortcut: __Cmd__ + __X__ (Mac), __Ctrl__ + __X__ (Windows).

#### Comment

Use the __Comment__ context menu option to add comments for the associated sessions. 

1. Select the sessions, open the context menu, and click on the __Comment__ option. Keyboard shortcut: __M__.
2. A __Comment__ dialog appears. Enter the comment and click __Ok__. 
3. The text is added to the comment field for the selected sessions.

#### Mark

Use the __Mark__ context menu option to apply different colors or to strikeout selected sessions.

1. Select the sessions, open the context menu, and click on __Mark__ option.
2. Click on the preferred marking style to apply it.

#### Replay

Use the __Replay__ context menu option to replay previously captured sessions.  Keyboard shortcut: __R__.

#### Select

Use the __Select__ context menu option to select sessions that are directly related to the currently selected session. The options are to select __parent__, __children__, and __duplicate__ sessions.

- __Parent request__ Selects the session that is a parent of the currently selected session. Keyboard shortcut: __P__
- __Children requests__ Selects the sessions that are children of the currently selected session. Keyboard shortcut: __C__
- __Duplicaterequest__ Selects the session that is a duplicate to the currently selected session. Keyboard shortcut: __D__

#### Copy

Use the __Copy__ context menu option to place a session information in the clipboard. The copied information options are:

- __URL__ Provides the session URL. Keyboard shortcut:__Cmd__ + __U__ (Mac), __Ctrl__ + __U__ (Windows)
- __FUll Summary__ Provides verbose session details. Keyboard shortcut: __Cmd__ + __C__ (Mac), __Ctrl__ + __C__ (Windows)


_Example for copying URL_
```
http://0.0.0.0:4000/fiddler-everywhere/images/livetraffic/websessions/websessions-list-share-options.png
```

_Example for copying full info_
```
#	RESULT	PROTOCOL	HOST	URL	METHOD	BODY	CACHING	CONTENT-TYPE	PROCESS	COMMENTS
277	200	HTTP	0.0.0.0:4000	/fiddler-everywhere/images/livetraffic/websessions/websessions-list-share-options.png	GET	207,094	private, max-age=0, proxy-revalidate, no-store, no-cache, must-revalidate	image/png; charset=utf-8		
```

#### Add New Rule

Use the __Add new rule__ option to apply an autoresponder rule for the selected sessions.

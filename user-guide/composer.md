---
title: Composer
slug: composer-tab
tags: create API request, Fiddler's Composer, headers, body, GET, HTTP request methods, HTTP response
publish: true
position: 50
---

## Composer

The __Composer__ tab enables you to manually create, edit, send and test HTTP and HTTPS requests. You can make a new request from scratch or edit a request already captured by Fiddler Everywhere. To get started, open the **Composer** tab next to the [**Live Traffic**]({%slug web-sessions-list%}) tab. You can also open a new Composer tab by clicking on the **New Request** button in the [**Requests**]({%slug saved-requests-tab%}) tab (the button with the **+** sign). The Composer tab has the Request Composer and the Request Inspector.

The __Composer__ contains several major sections used to construct a request, to observe the response, and to save, replay and share previosly composed requests.

1. The top section contains a drop-down for selecting: 
    - A [__HTTP Methods__](#http-methods) to specify the request method (for exmaple, GET, POST, etc.)
    - A [__URL field__](#url-field) to enter the endpoint URL.
    - A drop-down to select the used [__HTTP version__](#http-version-selection). Default version is **HTTP 1.1**.
    - An [__Execute__](#execute-button) button. Action button to execute the composed request.
    - A [__Save__](#save-button) button. To save your composed request in the [**Requests**]({%slug saved-requests-tab%}) list.

2. The mid-section provides options to further modify your request via:
    - [__Headers__](#headers) section. Allows you to add and modify the request's HTTP headers.
    - [__Params__](#params) section. Allows you to add and modify the request's parameters.
    - [__Raw__](#raw) section. Read-only represenation of the composed request.
    - [__Body__](#body) section. Allows you to modify the request's body. Supports different known formats (for example like JSON, form-data, XML, text, etc.)

3. The bottom section is a [__response inspector__](#response-inspector), which shows the response from the executed request.

4. The **Requests** list (to the left) is the place to save composed request for later usage. From the **Requests** list, the saved requests entry could also be easily shared with collaborators.

![Composer User Interface](../images/composer/composer.png)

>important Fiddler's Composer is adding by default its `User-Agent` so that it sends HTTPS request correctly. You could remove the default `User-Agent` header but notice that this could break composing a secure request (HTTPS). The default key-value

## HTTP Methods

The __Composer__ supports creating a request while using one of the following HTTP methods:

- __GET__ - Requests a representation of the specified resource. Requests using GET should only retrieve data.
- __PUT__ - replaces all current representations of the target resource with the request payload.
- __POST__ - Used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
- __DELETE__ - Deletes the specified resource.
- __HEAD__ - Asks for a response identical to a __GET__ request, but without the response body.
- __TRACE__ - Performs a message loop-back test along the path to the target resource.
- __SEARCH__ - Used by a client to ask the server to perform a query operation (described by the request payload) over some set of data scoped to the effective request URI.
- __PROPFIND__ - Retrieves properties defined on the resource identified by the Request-URI.
- __PATCH__ - Used to apply partial modifications to a resource.
- __MKCOL__ - The method may be included in the scope of a transaction by submitting a Transaction Header with a lock token that corresponds to that transaction.
- __MOVE__ - Used to move a resource to the location specified by a request Uniform Resource Identifier (URI
- __LOCK__ - Used to take out a lock of any access type on a resource so that another principal will not modify the resource while it is being edited.
- __UNLOCK__ - Used to remove the lock on the resource at the request Uniform Resource Identifier (URI).
- __OPTIONS__ - Used to describe the communication options for the target resource.

![HTTP Methods](../images/composer/composer-http-methods.png)

## URL Field

The  __URL field__ is the place to endpoint URL for the composed request.

![URL Address textview](../images/composer/composer-addresss-bar.png)

## HTTP Version

From the __HTTP Version__ drop-down, you can select the following HTTP versions:
- __HTTP 2.0__
- __HTTP 1.2__
- __HTTP 1.1__
- __HTTP 1.0__
- __HTTP 0.9__

![HTTP Versions drop-down](../images/composer/composer-http-version.png)

## Execute Button

Use this button to effectively execute the composed request. After successfull exectuon the [**Response inspector**](#response-inspector) will be populated with the received response content.

![Execute Button](../images/composer/composer-execute-btn.png)

## Save Button

Use this button to save the composed request in the [**Requests**]({%slug saved-requests-tab%}) list. Notice that if you are editing already saved request entry, then the changes will overwrite the previous version of that entry. To save the edits as an entirely new netry use the drop-down option and select **Save as** (available only for already saved requests).

![Save Button](../images/composer/composer-save-btn.png)

## Headers, Params, Raw and Body

The middle section is allowing you to further modify your request by adding your custom __Headers__, __Params__, __Body__, and observing the composed request via the __Raw__ view (read-only).

### Headers

The **Headers** section enables you to add/modify your request headers (e.g., `Content-Type`, `Authorization`, etc.). By default a key-value UI is activated (you could change it to raw UI via the drop-down in the top-right corner of the section).

1. Add a new header by entering the header key-value pair and then clicking on the **tick**.
2. The new header is now part of your request's headers. The header can now be disabled/enabled (using the tick to the left) or completely deleted (using the **Delete** icon to the right).

![Added header](../images/composer/composer-headers-after.png)

>important Most of the servers using newer versions of TLS will require a **User-Agent** header to be set. By default, Fiddler Everywhere will a **User-Agent** key set with value **Fiddler Everywhere** and description **_Lets servers and network peers identify the application, operating system, vendor, and version of the requesting user agent_**. The header is non-mandatory, but keep in mind that without valid **User-Agent**, some requests to secure servers might fail.

### Params

The **Params** section enables you to add query parameters to your request URL easily. Adds any key-value pair appended through the  __Params__ view to the request URL. By default a key-value UI is activated (you could change it to raw UI via the drop-down in the top-right corner of the section).

1. Add new query params by entering the params key-value pair and then clicking on the **tick**.
2. The new query params is now added to your API endpoint URL. The params can now be disabled/enabled (using the tick to the left) or completely deleted (using the **Delete** icon to the right).

![Added Params](../images/composer/composer-params-after.png)


### Body

The **Body** section enables you to manually specify the data that should be sent with the request. By default a key-value UI is activated (you could change it to raw UI via the drop-down in the top-right corner of the section).. The **Body** comes with several specific editors as follows:

- Text
- JSON
- XML
- HTML
- Form-Data
- x-www-form-urlencoded

![Adding Body with form-data](../images/composer/composer-body-form-data.png)

### Raw

The view is a raw text representation of the composed request. This view is non-editable (read-only).

![Raw view of the written request](../images/composer/composer-raw-view.png)

## Response Inspector

With the __Response Inspector__, you can inspect the received response (from the executed request). The inspector provides several views to visualize different parts of the request in specific formats. Find detailed information on each inspector type in the dedicated article about [__Inspector Types__]({%slug inspector-types%})

![Response inspectors](../images/composer/composer-response-inspectors.png)

## Edit in Composer

A session previosly captured in the [Live Traffic]({%slug web-sessions-list%}) could be loaded in the Composer for applying further modifications.

1. Select the desired session entry and make a right-click to open the context menu. From the context menu, select **Edit in Composer**. Alternatively, select the session and use the keyboard shortcut by pressing key **E**.

    ![Edit in Composer](../images/composer/edit-in-composer.png)

2. The session opens in a new Composer window and then you could change the desired values. For example, change the data payload, modify the headers, test the authentication, etc.

    ![Change the loaded request values in new Composer windows](../images/composer/edit-in-composer-002.png)


   

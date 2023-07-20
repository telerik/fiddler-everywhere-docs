---
title: Composer Tab
description: "Learn how to use the Composer tab in the Fiddler Everywhere web-debugging HTTP-proxy client."
slug: composer-tab
---

# Composer Tab


The **Composer** tab enables you to manually create a new HTTP or HTTPS request from scratch and edit an existing captured request, as well as send and test them. This article explains the user interface that creates the Fiddler Everywhere's Composer. [Learn more about how to use the Composer here...]({%slug composer-get-started%})

To get started, open the **Composer** tab from the same pane. Alternatively, you can open a new **Composer** tab by clicking the **New Request** (**+**) button in the [**Requests**]({%slug saved-requests-tab%}) tab or by using the **Edit in Composer** option from the [**Live Traffic** context menu](#editing-in-the-composer).

The **Composer** tab houses the **Request Composer** and the **Request Inspector**, and contains major sections to construct a request, to observe the response, and to save, replay and share previously composed requests.

The top section contains a toolbar with the following functionalities:
  - The [**HTTP Methods**](#http-methods) is a drop-down where you can specify the request method&mdas;for example, GET, POST, and so on.
  - The [**URL field**](#url-field) enables you to enter the endpoint URL.
  - The [**HTTP version**](#http-version-selection) is a drop-down where you can select the HTTP version. By default, the selected version is **HTTP 1.1**.
  - The [**Execute**](#execute-button) button is an action button for executing the composed request.
  - The [**Save**](#save-button) button enables you to save your composed request in the [**Requests**]({%slug saved-requests-tab%}) list.

The mid-section provides options to further modify your request through the following options:
  - The [**Headers**](#headers) section allows you to add and modify the HTTP headers of the request.
  - The [**Params**](#params) section allows you to add and modify the request parameters.
  - The [**Raw**](#raw) section is a read-only representation of the composed request.
  - The [**Body**](#body) section allows you to modify the request body and supports various formats such as JSON, form-data, XML, text, and more.

The bottom section is a [**response inspector**](#response-inspector), which shows the response from the executed request.

In the **Requests** list to the left you can save the composed request for later usage. From the **Requests** list, you can share the entry of saved requests with collaborators.

By default, the **Composer** automatically adds headers like `User-Agent`, `Host`, and `Content-Length` so that the HTTPS request is sent correctly. You can remove the default `User-Agent` header but note that this may break the composition of a secure (HTTPS) request.


## HTTP Methods

The **Composer** supports the creation of a request with the following HTTP methods:

- **GET**&mdash;Requests a representation of the specified resource. Requests using GET have to retrieve data only.
- **PUT**&mdash;Replaces all current representations of the target resource with the request payload.
- **POST**&mdash;Submits an entity to the specified resource, often causing a change in the state or side effects on the server.
- **DELETE**&mdash;Deletes the specified resource.
- **HEAD**&mdash;Asks for a response identical to a **GET** request, but without the response body.
- **TRACE**&mdash;Performs a message loop-back test along the path to the target resource.
- **SEARCH**&mdash;Used by a client to ask the server to perform a query operation, described by the request payload, over a set of data scoped to the effective request Uniform Resource Identifier (URI).
- **PROPFIND**&mdash;Retrieves properties defined on the resource and identified by the Request-URI.
- **PATCH**&mdash;Applies partial modifications to a resource.
- **MKCOL**&mdash;You can include the method in the scope of a transaction by submitting a **Transaction Header** with a lock token that corresponds to that transaction.
- **MOVE**&mdash;Used to move a resource to the location that is specified by a request URI.
- **LOCK**&mdash;Used to take out a lock of any access type on a resource so that another principal will not modify the resource while it is being edited.
- **UNLOCK**&mdash;Used to remove the lock on the resource at the request URI.
- **OPTIONS**&mdash;Used to describe the communication options for the target resource.

## URL Field

The  **URL field** is the place where you enter an endpoint URL for the composed request.

  ![URL Address textview](../images/composer/composer-addresss-bar.png)

## HTTP Version

The **HTTP Version** drop-down list renders the following HTTP versions:

- **HTTP 2.0**

- **HTTP 1.2**

- **HTTP 1.1**

- **HTTP 1.0**

- **HTTP 0.9**

  ![HTTP Versions drop-down](../images/composer/composer-http-version.png)

## Execute Button

The **Execute** button enables you to effectively execute the composed request. After a successful execution, the [**Response inspector**](#response-inspector) will be populated with the received response content.

  ![Execute Button](../images/composer/composer-execute-btn.png)

## Save Button

The **Save** button enables you to save the composed request in the [**Requests**]({%slug saved-requests-tab%}) list. Note that if you are editing an already saved request entry, the changes will overwrite the previous version of that entry. To save the edits as an entirely new entry, use the drop-down option and click **Save as** (available for already saved requests only).

  ![Save Button](../images/composer/composer-save-btn.png)

## Headers, Params, Raw, and Body

The middle section allows you to modify your request by adding your custom **Headers**, **Params**, and **Body**, and observing the composed request through the read-only **Raw** view.

### Headers

The **Headers** section enables you to add or modify your request headers&mdash;for example, `Content-Type`, `Authorization`, and so on. By default, a key-value UI is activated.

To change it to raw UI through the drop-down in the top-right corner of the section:

1. Add a new header by entering the header key-value pair. Click the **tick**.

2. The new header is now part of your request headers. The header can now be disabled or enabled by using the tick to the left, or completely deleted by using the **Delete** icon to the right.

  ![Added header](../images/composer/composer-headers-after.png)

Most of the servers using newer versions of TLS will require you to set an **User-Agent** header. By default, Fiddler Everywhere will a **User-Agent** key set with the **Fiddler Everywhere** value and the **Lets servers and network peers identify the application, operating system, vendor, and version of the requesting user agent** description. The header is not mandatory, yet keep in mind that without a valid **User-Agent**, some requests for securing servers might fail.

>tip The request execution includes only checked headers. Unchecked headers won't be included in the request execution but are saved as part of the composed request (so you can activate them at a later time).

### Params

The **Params** section enables you to add query parameters to your request URL and enables you to add any key-value pair appended through the **Params** view to the request URL. By default, a key-value UI is activated.

You can change it to raw UI through the drop-down in the top-right corner of the section:

1. Add new query parameters by entering the params key-value pair. Click the **tick**.

2. The new query parameters are now added to your API endpoint URL. The params can now be disabled or enabled by using the tick to the left, or completely deleted by using the **Delete** icon to the right.

  ![Added Params](../images/composer/composer-params-after.png)


### Body

The **Body** section enables you to manually specify the data that has to be sent with the request. By default, a key-value UI is activated and you can change it to raw UI through the drop-down in the top-right corner of the section.

The **Body** delivers the following specific editors:

- Text&mdash;suitable for a plain text input (formatted as **text/plain**)
- JSON&mdash;suitable for a JSON-formatted input
- XML&mdash;suitable for a XML-formatted input
- HTML&mdash;suitable for a HTML-formatted input
- Form-Data&mdash;suitable for inputting key-value pairs formatted as [**multipart/form-data**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)
- x-www-form-urlencoded&mdash;&mdash;suitable for inputting key-value pairs formatted as [**application/x-www-form-urlencoded**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)
- JavaScript&mdash;suitable for JavaScript/TypeScript code. Supports the MIME types as described [here](https://mimesniff.spec.whatwg.org/#javascript-mime-type)

### Raw

The **Raw** view is a raw text representation of the composed request. It is read-only and cannot be edited.

  ![Raw view of the written request](../images/composer/composer-raw-view.png)

## Response Inspector

With the **Response Inspector**, you can inspect the received response from the executed request. The inspector provides a set of views to visualize different parts of the request in specific formats. For detailed information on each inspector type, refer to the article about [the **Inspector** types Fiddler Everywhere provides]({%slug inspector-types%}).

  ![Response inspectors](../images/composer/composer-response-inspectors.png)

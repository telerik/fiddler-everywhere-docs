---
title: Composing API Requests
description: "Create, modify, and execute API requests with the Composer feature of the Fiddler web-debugging HTTP proxy application."
slug: composer-get-started
publish: true
position: 10
previous_url: /get-started/create-api-request, /get-started/api/create-api-request, /api/create-api-request, /user-guide/composer
---

# Composing API Requests 

The **Composer** in Fiddler Everywhere allows you to create requests to REST and SOAP API endpoints. Requests to local and online APIs enable you to check and debug various endpoints, inspect and analyze requests and responses, and quickly retrieve and receive data. To load the **Composer**:

1. Start Fiddler Everywhere and open the **Home** Pane.

1. Follow the **Composer** flow from the **Compose API Request** section.

OR

1. Start Fiddler Everywhere and open the **Composer** pane.

As a result, Fiddler loads the **Composer** screen where you can compose and execute HTTP requests and organize them in collections through the **Requests** tree.

## Compose API Request

1. Use the **+** button to create a new **Composer** tab. Alternatively, you can directly use the main **Composer** tab.

1. Select **HTTP method** and enter the endpoint URL.

    ![Select HTTP method and enter URL](../images/composer/comp-method-and-url.png)

1. Select the HTTP protocol version with the drop-down menu to the left of the **Execute** button.

    ![Select HTTP version](../images/composer/comp-http-version.png)

1. (Optional) Enter additional headers, parameters, and body if required. For example, common scenarios are to enter an authorization header, a **Content-type** header, or custom body data. Note that the request execution includes only checked headers.

    >important By default, the Fiddler Everywhere client will add a `User-Agent` header with the `Fiddler Everywhere` value. This header lets servers and network peers identify the application, the operating system, the vendor, or the version of the requesting user agent.

1. Click **Execute** to send the composed API request. 

Once the API request executes, you can inspect its HTTP Response in the Composer's **Response inspector** tab. Like the inspectors in the **Traffic** pane, the **Response** inspector provides multiple views such as **Headers**, **Raw**, **JSON**, and so on.


## Edit Captured API Request

1. Start Fiddler Everywhere and open the **Traffic** pane.

1. Capture a session (or open a session from the saved save **Sessions** tree) and use the **Edit in Composer** option from the context menu.

As a result, the session loads as an HTTP Request in the Fiddler's Composer, where you can make atomic modifications to its structure. The **Composer** has a flexible user interface that allows you to switch between **Structured** and **Raw** content (refer to the screenshots below) and between **Table** or **Bulk** style inspectors.


* Using the **Structured** mode
    ![structured mode in Composer](../images/composer/composer-structured.png)

* Using the **Raw** mode
    ![raw mode in Composer](../images/composer/composer-raw.png)

## Save API Request

You can save the API request through the following steps.

- Open the **Composer** pane.

- [Compose your API request](#compose-api-request)

- Click the **Save** button. 

Saved requests are loaded as a collection in the **Requests** list and can be reused or shared with collaborators at any later moment.

![Creating API request](../images/composer/comp-pane-all.png)



## Share Requests Collection

With Fiddler Everywhere, you can quickly share a collection of saved API requests.

- Open the **Request** list.

- Select a collection of saved API requests.

- Use the context menu to share the collection with collaborators.

![Share API requests](../images/composer/comp-requests-share.png)

## Save API Request

You can save the API request through the following steps.

- Open the **Composer** pane.

- [Compose your API request](#compose-api-request)

- Click the **Save** button. 

Saved requests are loaded as a collection in the **Requests** list and can be reused or shared with collaborators at any later moment.


## Share Requests Collection

With Fiddler Everywhere, you can quickly share a collection of saved API requests.

- Open the **Request** list.

- Select a collection of saved API requests.

- Use the context menu to share the collection with collaborators.

![Share API requests](../images/composer/comp-requests-share.png)

[Learn more about the Requests collection here...]({%slug composer-collections-get-started%})


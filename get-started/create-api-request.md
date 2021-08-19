---
title: Create API Request
description: Using the Fiddler's Composer to createa and test API requests
slug: composer-get-started
publish: true
position: 80
---

# Create API Request

The **Composer** inside Fiddler Everywhere allows you to create requests to APIs. Requests made to local and online APIs will enable you to check and debug various endpoints, inspect and analyze requests and responses, and to retrieve and receive data quickly.

Create your first API request by following these steps:

1. Select an appropriate **HTTP method** and enter the endpoint URL. The Composer supports **GET**, **POST**, **PUT**, **DELETE**, **TRACE**, **SEARCH** and **PROPFIND** methods.The **Composer** allows you also to change the version of the HTTP protocol through a drop-down menu to the left of the **Execute** button.

2. (**_Optional_**) If required, enter additional headers, params, and body. For example, common scenarios are to enter an authorization header, a `Content-type` header, or custom body data. 

    >important By default, the Fiddler Everywhere client will add a `User-Agent` header with the value __Fiddler Everywhere__. This header lets servers and network peers identify the application, operating system, vendor, and/or version of the requesting user agent.

    >tip Use the **Raw** view to inspect in detail the request that will be sent to the server. The view is read-only.

3. Click **Execute** to send the composed API request.

4. Inspect the result in the Composer's **Response inspector**. Like the inspectors for the **Live Traffic** tab, the **Response** inspector for the Composer provides multiple views (for example, *Headers*, *Raw*, *JSON*, etc.).

5. (**_Optional_**) You can save the request by clicking the **Save** button (to the right of **Execute**). Saved requests are loaded in a collection in the **Requests list** and can be reused or shared with collaborators.

![Creating API request](../images/composer/create-api-request.png)

## Additional Resources

- [Inspect captured traffic]({%slug inspecting-traffic-get-started%}).
- [Create an API request through the Composer]({%slug composer-get-started%})
- [Modify traffic]({%slug modify-traffic-get-started%})
- [Mock server response]({%slug rulesbuilder-get-started%})
- [Organize requests]({%slug composer-collections-get-started%})
- [Share captured traffic with collaborators]({%slug collaboration-get-started%}).

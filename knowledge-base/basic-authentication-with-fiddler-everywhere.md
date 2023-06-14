---
title: Composing Basic Authentication Requests
description: "Learn what the steps for the basic authentication with Fiddler Everywhere are."
type: how-to
slug: basic-authentication-with-fiddler-everywhere
publish: true
res_type: kb
---


## Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.1 and above  |

## Description

In the context of an HTTP transaction, **Basic Access Authentication** is a method for an HTTP user agent (for example, a web browser) to provide a user name and password when making a request. In **Basic HTTP Authentication**, a request contains a header field in the form of `Authorization: Basic <base64 string>` where credentials are the **Base64** encoding of `username` and `password` joined by a single colon (`:`).

How can I create a request for APIs that require authentication in Fiddler Everywhere?

## Solution

Create a request for APIs that require authentication by using the [**Composer**]({%slug composer-tab%}) and check the complete example of the suggested approach.

### Creating a Basic Authentication Request

The following steps provide an overview of the procedure for creating a basic authentication request:

1. Select the [**Composer**]({%slug composer-tab%}) tab.

1. Set the HTTP/HTTPS method to **GET** and add the URL in the URL field.

1. Create an object in the request **Body** and the `user` and `passwd` variables and their values. In this object, `user` and `passwd` are the predefined variables for the **Basic Authentication**.

1. Add an `Authorization` key to the header:

    - Encode the value of the `<username>:<password>` string with a [**Base64 converter**](https://www.base64decode.org/) and note the encoded value.

    - In the **Headers** tab, set the **Key** to `Authorization` and add the encoded `<username>:<password>` under **Value**.

    - Add a **Description** for the key. Click the **tick** to add the `Authorization` key.

### Basic Authentication Request Example

1. In the [**Composer**]({%slug composer-tab%}) tab, set the HTTP/HTTPS method to **GET** and add [https://httpbin.org/basic-auth/user1/pass1](https://httpbin.org/basic-auth/user1/pass1) in the URL field.

   The [https://httpbin.org/basic-auth/user1/pass1](https://httpbin.org/basic-auth/user1/pass1) URL includes the following fields:

      * The [`httpbin.org`](https://httpbin.org/) HTTP request and response service.

      * The authentication scheme [**basic-auth**](https://tools.ietf.org/html/rfc7617).

      * The values of the `user` and `passwd` variables: `user1` and `pass1`.

  ![Composer URL Field](../images/kb/url-field-of-composer-with-http-method.png)

1. Create a JSON object in the **Body** tab:

   The predefined variables for **Basic Authentication** are `user` and `passwd`. Set their values to `user1` and `pass1`, respectively.

   ![JSON Body](../images/kb/body-of-composer-with-username-password.png)

1. Add the Authorization key in the **Headers** tab:

   * Encode the value of the `<username>:<password>` string with a **Base64 converter**. The resulting string from the encoding of **user1:pass1** is `dXNlcjE6cGFzczE=`.

   * In **Headers** tab, set the **Key** to `Authorization`.

   * Set the **Value** to `Basic dXNlcjE6cGFzczE=`.

   * Add a **Description** for the key, and select the **tick** to add the Authorization key.

   ![Authorization Key](../images/kb/authorization-key-added-to-the-headers-tab.png)

After performing all the above steps, select **Execute** that is located at the right side of the URL field to send the request.

Clicking the **Execute** button adds two more keys to the **Headers** tab named `Host` and `Content-Length`:

![Added Keys to the Headers Tab](../images/kb/added-keys-to-the-headers-tab.png)

Following the above steps will create **Basic Authentication** with Fiddler Everywhere. To check, go through the **Response Inspector** section of the **Composer**. A successful request will return **status 200** from the server along with the server-specific payload:

![Response Inspector](../images/kb/authentication-to-true-in-response-inspector.png)

The above response is [HTTPBin](https://httpbin.org) specific as it was used to create the **Basic Authentication**.


## Contact us

Suppose you have more questions or need assistance for testing authentication scenario through Fiddler Everywhere, then you can reach out to our support team through the [**Contact Support**]({%slug file-menu%}#contact-support) option.
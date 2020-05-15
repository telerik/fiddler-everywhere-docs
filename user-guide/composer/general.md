---
title: General
slug: composer-tab
tags: HTTP composer, send request, headers, body, GET, POST, Fiddler Composer
publish: true
position: 10
---

# Composer

The __Composer__ tab enables you to manually build and send HTTP, HTTPS, and FTP requests.

## Get Started

The __Composer__ contains three major sections that are used to construct a request and observe the response.

1. The top section contains a drop-down for selecting __HTTP Methods__, an __URL textfield__, a drop-down to select the used __HTTP version__, and an __Execute__ button.
2. The mid-section is  a __request composer__ that provides options to further modify your request via __Headears__, __Body__, __Params__, or __Raw__ views.
3. The bottom section is a __response inspector__, which shows the response from the made request.

![Composer User Interface](../../images/composer/composer-sections.png)

## HTTP Methods

The __Composer__ supports creating a request while using one of the following HTTP methods:

1. __GET__
2. __PUT__
3. __POST__
4. __DELETE__
5. __HEAD__
6. __TRACE__
7. __SEARCH__
8. __PROPFIND__

![HTTP Methods](../../images/composer/composer-http-methods.png)

## URL TextField

The  __URL Textfiled__ is the place to endpoint URL for the composed request.
![URL Address textview](../../images/composer/composer-addresss-bar.png)

## HTTP Version selection

From the __HTTP Version__ drop-down, you can select the following HTTP versions:
1. __HTTP 2.0__
2. __HTTP 1.2__
3. __HTTP 1.1__
4. __HTTP 1.0__
5. __HTTP 0.9__

![HTTP Versions drop-down](../../images/composer/composer-http-version.png)

## Request Composer

The __Request Composer__ is allowing you to further modify your request by adding your custom __Headers__, __Params__, __Body__ and observing the composed request via the __Raw__ view.

### Headers

Enables you to add/modify your request headers (e.g., like `Content-Type`, `Authorization`, etc.). 
 - Add a new header by entering the header key-value pair and then clicking the tick.
 ![Adding header](../../images/composer/composer-headers-before.png)
 - The new header is added to your request. The header can now be disabled/enabled or completely deleted.
  ![Added header](../../images/composer/composer-headers-after.png)

>important Most of the servers using newer versions of TLS will require a **User-Agent** header to be set. By default, Fiddler Everywhere will a **User-Agent** key set with value **Fiddler Everywhere** and description **_Lets servers and network peers identify the application, operating system, vendor, and version of the requesting user agent_**. The header is non-mandatory, but keep in mind that without valid **User-Agent** some requests to secure servers might fail.
![Default User-Agent](../../images/composer/composer-user-agent.png)

### Params

Enables you to add query parameters to your request URL easily. Any key-value pair added through the  __Params__ view will be automatically added to the request URL.
 - Add new query params by entering the params key-value pair and then clicking the tick.
 ![Adding header](../../images/composer/composer-params-before.png)
 - The new query params are added to your request URL. The params can now be disabled/enabled or completely deleted.
 ![Adding header](../../images/composer/composer-params-after.png)


### Body

Enables you to manually specify the data that should be sent with the request.

### Raw

The view is a raw representation of the composed request. This view is non-editable.
![Raw view of the written request](../../images/composer/composer-raw-view.png)

## Response Inspector

With the __Response Inspector__, you can inspect the received response (from the executed request). The inspector provides several views to visualize different parts of the request in specific formats. Find detailed information on each inspector type in the dedicated article about [__Inspector Types__]({%slug inspector-types%})

![Response inspectors](../../images/composer/composer-response-inspectors.png)
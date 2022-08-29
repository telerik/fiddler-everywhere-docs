---
title: Bypassing the Fiddler Everywhere proxy
description: "Learn how to set a list of endpoints that should bypass the Fiddler Everywhere proxy and directly use the upstream proxy."
type: how-to
slug: fiddler-bypass-list
publish: true
res_type: kb
---


## Environment

|   |   |
|---|---|
| Product   | Fiddler Everywhere |
| Product Version | 1.0.0 and above  |



## Description


Q: I would like certain services, client applications, or specific endpoints to bypass the Fiddler Everywhere proxy and directly use the upstream proxy. How can I achieve that?

Q: An HTTPS service (like iTunes) stopped working due to certificate pinning/SSL errors. How can I prevent that services from going through the Fiddler proxy?

Q: The iTunes on my iOS device is not working when Fiddler Everywhere is being set as a proxy. How to resolve that issue?

Q: I am using a service that pollutes my Fiddler Everywhere captured traffic. How to prevent this traffic from being caught from Fiddler Everywhere in the first place?



## Solution


All the described issues above have a common solution - bypassing Fiddler so that the specific application endpoints use the default connection directly. As a result, any request to these endpoints will go straight through the upstream proxy, effectively bypassing Fiddler, and they won't use the Fiddler Everywhere certificate. The immediate effect is that Fiddler Everywhere won't capture traffic from the bypassed endpoints. Still, at the same time, the bypassed services will continue to work while using the default internet connection.


- Open Fiddler Everywhere on the host machine and go to **Settings > Connections**.
- In the **Bypass Fiddler for URLS that starts with:** field, add the endpoints that you would like to bypass, separated by a comma:
    _Example for bypassing the Apple endpoints (for services that are using certificate pinning)_
    ```
    *.apple.com, *.itunes.com, *mzstatic.com
    ```
- Click **Save** to persist the change.

![Example bypass list](../images//kb//bypass/bypass-endpoints.png)
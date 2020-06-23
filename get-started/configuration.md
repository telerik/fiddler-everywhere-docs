---
title: Configuration
slug: configuration-get-started
tags: configuration, getting started
publish: true
position: 30
---

## HTTPS Configuration

By default, the Fiddler Everywhere client intercepts insecure traffic (**HTTP**) only and needs an account with administrative rights to capture secure traffic (**HTTPS**). The Fiddler Everywhere client acts as a man-in-the-middle (against the HTTPS traffic). To achieve that, the proxy must generate a root certificate and use that root certificate to create multiple end-entity certificates, one for each intercepted HTTPS site. 

Generate and trust the root certificate via the options provided in [**_Settings > HTTPS_**]({%slug decrypt-https-traffic%}) section. Generate and trust the root certificate via the options provided in [**_Settings > HTTPS_**]({%slug decrypt-https-traffic%}) section. For more details on how to enable HTTPS capturing
 on different operating systems, see the links below:

- For __Windows OS__ follow the steps described in [HTTPS capturing for Windows]({%slug decrypt-https-traffic%}#https-capturing-for-windows) documenation section.

- For __Mac OS__ follow the steps described in [HTTPS capturing for Windows]({%slug decrypt-https-traffic%}#https-capturing-for-mac-os) documenation section.

- For __Linux OS__ follow the steps described in [HTTPS capturing for Windows]({%slug decrypt-https-traffic%}#https-capturing-for-linux) documenation section.

## Network Settings

The **Connections** submenu located in [**_Settings >  Connections_**]({%slug connections-submenu%}) exposes options to control network-related settings With the initial setup Fiddler Everywhere uses port **8866** and acts as a system proxy on startup. Additionally, the client can be configured to listen for requests from other computers or devices (for example, an Android device). 

## Proxy Configuration

Advanced proxy configuration can set via the **Gateway** submenu in [**_Settings > Gateway_**]({%slug gateway-submenu%}). The default behavior is for Fiddler Everywhere to use the system proxy. Alternatively, the client exposes options to [set the upstream proxy with proxy bypass list]({%slug gateway-submenu%}#manual-proxy-configuration) or to directly [send all traffic to the origin server]({%slug gateway-submenu%}#no-proxy) option.

## Next Steps

Once the client is configured, you can start using its features. Learn how to [capture traffic]({%slug capture-traffic-get-started%}), [inspect traffic]({%slug inspecting-traffic-get-started%}), edit traffic, mock a server response, create an API request, or how to share captured sessions with teammates.
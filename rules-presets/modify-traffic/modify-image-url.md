---
title: Modify Image Endpoint
description: "Modify an image API endpoint while using Fiddler's rules."
slug: adv_modify_image_url
position: 20
---


# Modifying Endpoints

Apart from mapping request to different host destinations (that wil returnd an entirely new responses), Fiddler can be used to modify the ongoing traffic by changing API endpoints through thier  paths, or by changing and substituting parts of the HTTP requests and response headers and bodies. This article will showcase how to create a rule that **modifies an API endpoint that returns an image**.


## Creating a "Modify Image Endpoint" Rule

Create a "Modify Image Endpoint" rule by setting the following actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

- Create a matching condition that uses the "When **all these conditions** are met **any number of times**". 

- Match by a **URL** that uses a string value to match the desired URL (for demonstration purposes, we match **googlelogo** fomr the following URL `https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png``).

- Match by a **Method** equal to **GET**.

- Create an **Update URL** action and set the desired new target URL (for demonstration purposes, `https://www.gstatic.com/ac/cb/youtube_logo_v2.svg`).

![Creating "Modify Image Endpoint" rule](../../images/advanced/adv-modify-image-endpoint-local.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Modify Image Endpoint" rule](../../images/advanced/adv-modify-image-endpoint-local-active.png)

Download a ready-to-use <a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules/modify-image-endpoint-local" target="_blank">"Modify Image Endpoint"</a> rule as a FARX file, which you can import through the Rules toolbar.

 
 
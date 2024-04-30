---
title: Mark Scripts and JSON Files
description: "Marking JavaScript sessions and JSON files while using Fiddler's rules."
slug: adv_marking_scripts_jsons
position: 20
---

# Marking Scripts and JSON Files


The Fiddler Everywhere user interface can be dynamically changed based on your preferences. You can highlight matched sessions through the **Mark Sessions** action, which allows you to set the background and the text color. This article will showcase how to highlight all sessions that are returing JavaScript or JSON files.

## Creating a "Mark Scripts and JSONs" Rule

Create an "Mark Scripts and JSONs" rule by setting the following actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

- Create a matching condition that uses the "When **all these conditions** are met **any number of times**". 

- Match by a **Response Header**  with key **Content-Type** and value that matches regular expression for **javascript|json**.

- Match by **Method**  of type **GET**.

- Create a **Mark Session** action and set the preferred background and foreground (text) colors.

![Creating "Mark Scripts and JSONs" rule](../../images/advanced/mark-scripts-and-jsons.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Mark Scripts and JSONs" rule](../../images/advanced/mark-scripts-and-jsons-active.png)

>tip You can create the rule and then use the **Play** button to immediately apply the new UI effect to all captured sessions in the Live Traffic grid.

The link below provides a ready-to-use rule for download as a FARX file, which you can import through the Rules toolbar.

[A "Mark Scripts and JSONs" rule as FARX file](https://github.com/telerik/fiddler-everywhere/rules/tooling/mark-scripts-and-jsons)
 

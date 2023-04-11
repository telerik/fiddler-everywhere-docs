---
title: Fiddler Everywhere - Preconfigured Terminal Instance
description: "Capture HTTPS traffic from the Fiddler's preconfigured terminal instance while using sandboxed proxy environment"
type: how-to
slug: fiddler-preconfigured-terminal
publish: true
res_type: kb
---

# Fiddler Everywhere as a Sandboxed Proxy

Fiddler Everywhere evolved from the concept of being a web-debugging tool that acts as a system proxy. Nowadays, the term proxy tool is way too narrow to describe the many possibilities that Fiddler opens - a correct depiction is one of a Swiss-knife proxy tool for meddling with HTTP(S) traffic daily. The complexity of Fiddler's functionalities implies that there is a learning curve to using Fiddler to its full potential. However, the team behind Fiddler Everywhere works in the opposite direction. It aims to make the tool easier to use and more intuitive (apart from being a cross-platform tool, the UI is the other distinction with the old Fiddler Classic, which, let's face it, is hard to use with not so-modern user interface). 

While reviewing the user's feedback, it quickly became apparent that setting Fiddler as a system proxy is overkill for many users. Users wanted to work with sandboxed environments that would allow them to quickly test their HTTP(S) requests without changing the system network settings.  

Using sandboxed proxy tooling solves several issues:

- Quickly test scenarios in a preferred sandboxed instance.
- No need to modify the system settings of the Fiddler Everywhere host machine.
- No need to revert global environment variables once your work is done.

The above arguments are good enough for the core Fiddler Everywhere team and led to the appearance of exiting new features - [the preconfigured browser capturing](https://www.telerik.com/blogs/introducing-preconfigured-browser-capturing-fiddler-everywhere) and the topic of this article - [**the preconfigured terminal capturing**](#fiddlers-preconfigured-terminal).


## Fiddler's Preconfigured Terminal

https://docs.telerik.com/fiddler-everywhere/knowledge-base/capturing-traffic-from-terminal#capturing-traffic-from-preconfigured-terminal


## Quick Demos with Node, Fetch, and cURL

Once the default terminal starts, you can immediately start testing your applications. Below, you will find basic demonstrations depicting how Fiddler's Terminal captures traffic from a Node.js app that uses the `https` library, from an app that uses the **Fetch** API, and from a cURL request.

## What's Next

Built-in support for Fiddler proxy with Python applications is in active development and is just around the corner. Do you have other ideas on further improving the preconfigured terminal option? Don't hesitate to contact us [leave your feedback or directly let us know about the features you would like to see in Fiddler Everywhere](https://feedback.telerik.com/fiddler-everywhere).
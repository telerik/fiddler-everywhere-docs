---
title: Fiddler Everywhere - Preconfigured Terminal Instance
description: "Capture HTTPS traffic from the Fiddler's preconfigured terminal instance while using sandboxed proxy environment"
type: how-to
slug: fiddler-preconfigured-terminal
publish: true
res_type: kb
---

# Fiddler Everywhere - Sandboxed Tooling

Fiddler Everywhere evolved from the concept of being a web-debugging tool that acts as a system proxy. Nowadays the term proxy tool is way to narrow to describe the many possibilities that Fiddler opens - more correct depiction is one of a swiss-knife proxy tool for meddling with HTTP(S) traffic. The complexity of Fiddler's functionalities implicates that there is a learning curve to using Fiddler as its full potential. However, the team behind Fiddler Everywhere works in the opposite direction and aims to make the tool easier to use and more intuitive (which apart from being a cross-platform tool is the other distinction with the old Fiddler Classic which, let's face it, is hard to use and with not so-modern user interface). 

While going through user's feedback it quickly became apparent that for many users setting Fiddler as a system proxy is an overkill. Users wanted to work with sandboxed environments that will allow them to quickly test their HTTP(S) requests without having to actually change the system network settings.  

Using sandboxed proxy tooling solves several issues:

- Quickly test scenario in prefered sandboxed instance.
- No need to modify the system settings of the Fiddler Everywhere host machine.
- No need to revert global environment variables once your work is done.

The above arguments were good enough for the core Fiddler Everywhere's team and led to the apperiance of exiting features - the preconfigured browser capturing and the preconfigured terminal capturing.
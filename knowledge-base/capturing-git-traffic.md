---
title: Capturing Git Traffic
description: "Learn how to capture Gittraffic while using the Fiddler Everywhere web-debugging tool."
type: how-to
slug: how-to-capture-git-traffic
publish: true
res_type: kb
---


## Environment

|   |   |
|---|---|
| Product version | Fiddler Everywhere 1.0.0 and above  |
| 3rd-party tools | [GIT](https://git-scm.com/), [GitHub](https://github.com/) |
| Supported OS | macOS, Linux, Windows |


## Description

I want to capture the traffic generated from the Git source control while making pull & push requests and cloning repositories. How to configure Git to go through the Fiddler Everywhere proxy?


## Solution

git config --global http.proxy http://127.0.0.1:8866 

// then export Fiddler as PEM and do

git config --global http.sslCAInfo %DESKTOP%\FiddlerRootCertificate.pem

// or (insecure)

git -c http.sslVerify=false clone https://github.com/telerik/fiddler-everywhere-docs

=======================

// checking current Git configuration
git config --get-regexp http.* 

// resetting
git config --global --unset http.proxy http://127.0.0.1:8866
git config --global --unset http.sslcainfo
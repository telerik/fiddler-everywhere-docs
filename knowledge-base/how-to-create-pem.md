---
title: Creating PEM certificate
description: "Learn how to convert the exported CRT file to a PEM certificate."
type: how-to
slug: how-to-create-pem
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |  Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |
| 3rd-party tool | [OpenSSL](https://www.openssl.org/) |
| Supported OS | Linux |

## Description

Third-party tools (like Docker) and some operating systems (some Linux distributions) accept trust certificates in PEM format. How to generate Fiddler's CA in PEM format?

## Exporting Fiddler's CA as PEM

You can use the built-in functionality to export the Fiddler Everywhere CA in PEM format:

- Open **Settings > HTTPS > Advanced Settings**.
- From the drop-down menu choose **Export Root Certificate (PEM/ASCII format)**.

Then manually install and trust the exported PEM in the third-party tool while following the tool's official guidelines. 

>tip Some Linux distributions are also expecting PEM instead of CRT. You can convert the certificate to PEM and then follow the base instructions for [installing and trusting the root certificate on Linux](slug://first_steps_linux#trusting-the-root-certificate).


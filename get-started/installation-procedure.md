---
title: Installation & Update
description: "Learn more about how to install Fiddler Everywhere and its root certificate, and check out the available options for logging into the tool and updating it."
previous_url: /getting-started/installation, /installation/installation-procedure, /get-started/configuration 
slug: installation
position: 10
---

# Installation and Update

This article provides additional information related to the installation of Fiddler Everywhere and of its root certificate as well as lists the available options for logging into the tool and updating it.

The step-by-step tutorials for getting up and running with Fiddler Everywhere are:

* [First Steps with Fiddler Everywhere on Windows]({% slug first_steps_windows %})
* [First Steps with Fiddler Everywhere on macOS]({% slug first_steps_macos %})
* [First Steps with Fiddler Everywhere on Linux]({% slug first_steps_linux %})

## Installing Fiddler Everywhere

As Fiddler Everywhere is a cross-platform web-debugging proxy, which is available for Windows, macOS, and Linux, you need to follow the respective approach for installing the tool.

The installation options of Fiddler Everywhere for each platform are part of the getting started step-by-step tutorials:

* [First Steps on Windows (Installing Fiddler Everywhere on Your Machine)]({% slug first_steps_windows %}#installing-fiddler-everywhere-on-your-machine)
* [First Steps on macOS (Installing Fiddler Everywhere on Your Machine)]({% slug first_steps_macos %}#installing-fiddler-everywhere-on-your-machine)
* [First Steps on Linux (Installing Fiddler Everywhere on Your Machine)]({% slug first_steps_linux %}#installing-fiddler-everywhere-on-your-machine)

## Logging In with Your Account

Signing in is mandatory for both commercial and trial Fiddler Everywhere users. To sign up to Fiddler Everywhere, you can either create a Fiddler account or use an existing Google account.

The following getting started step-by-step tutorials provide detailed instructions on creating a new Fiddler account:

* [First Steps on Windows (Creating Your Fiddler Account)]({% slug first_steps_windows %}#creating-your-fiddler-account)
* [First Steps on macOS (Creating Your Fiddler Account)]({% slug first_steps_macos %}#creating-your-fiddler-account)
* [First Steps on Linux (Creating Your Fiddler Account)]({% slug first_steps_linux %}#creating-your-fiddler-account)

However, if you want to directly sign in with your Google account, perform the following steps:

1. Launch the Fiddler Everywhere client.
1. Select **Sign in with Google** and authenticate on the Google Authentication page.
1. After you successfully sign up, choose whether you want to become a trial user or purchase a subscription plan by selecting either the **Start Free Trial** or the **BUY NOW** link.

## Installing the Root Certificate

By default, the Fiddler Everywhere client intercepts insecure (HTTP) traffic only and requires an account with administrative rights to capture secure (HTTPS) traffic. To enable the capturing and decrypting of HTTPS traffic, you need to explicitly install a root trust certificate.

The following getting started step-by-step tutorials provide detailed instructions on trusting the root certificate:

* [First Steps on Windows (Trusting the Root Certificate)]({% slug first_steps_windows %}#trusting-the-root-certificate)
* [First Steps on macOS (Trusting the Root Certificate)]({% slug first_steps_macos %}#trusting-the-root-certificate)
* [First Steps on Linux (Trusting the Root Certificate)]({% slug first_steps_linux %}#trusting-the-root-certificate)

## Updating Fiddler Everywhere

Fiddler Everywhere versions 1.1.0 and later support predefined OS proxy settings for direct Internet access. If your system accesses the Internet through a predefined proxy, make sure you have the latest version of Fiddler Everywhere.

To update Fiddler Everywhere to its latest version:

1. Start Fiddler Everywhere.
1. From the main menu, choose **Help** > **Check for Update**. If a later version is available, a notification will ask you to confirm that you want to download and install it.
1. Fiddler Everywhere will restart and automatically update to the latest version.

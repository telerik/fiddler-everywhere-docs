---
title: Repro Playback 
description: "Playback previously captured HTTPS traffic to reproduce the exact behavior from a specific moment."
slug: repro-playback
publish: true
position: 40
---

# Repro Playback

A typical flow for developers and support engineers is to find a way to reproduce a described case or issue (that a customer or a colleague might experience). In the context of ongoing HTTPS traffic, that could present a challenge as the issue is often related to a specific environment, client, or even timestamps. 

With Fiddler Everywhere, you can easily playback previously captured HTTPS traffic by creating the so-called "repro playback" set of rules. This way, you can easily reproduce the issue or share websites that are not available on the Internet, such as a development site or an internal application.

## Creating a Repro Playback Rules

To create the set of rules that will later playback the captured traffic, execute the following steps:

- Open Fiddler Everywhere and start the preferred capturing mode (for example, the browser capturing mode).
- Capture the targeted traffic. 
    For example, let's assume that you are using the browser capturing mode and your targeted traffic is the landing page called "This is Fiddler!" (the page automatically loads once the preconfigured browser instance starts and its address is from a local server that loads `https://this.is.fiddler`)
- Back in Fiddler Everywhere, open the **Live Traffic** section and then select all sessions related to the captured traffic.At this point, Fiddler Everywhere will automatically create a new rule group that contains a dedicated rule for each selected session as follows:
    - Each `CONNECT` session will be represented by a rule that uses the **Return CONNECT Tunnel** action.
    - Each other session will be represented by a rule that uses the **Return Manual Response** action. By default, the content of the **Return Manual Response** action will be identical to the one from the captured session.

## Using the Repro Playback Rules

Once the repro playback rule group is created, you can execute the playback and effectively reproduce the previously observed behavior by executing the following steps:

- Select and toggle ON the **Rules** tab.
- Select and toggle ON [the previously created repro playback rule group](#creating-a-repro-playback-rules).
- Open Fiddler Everywhere and start the preferred capturing mode (for example, the browser capturing mode).
- Load the same URL(s) as done in the original capture (in our case, that would be the landing page `https://this.is.fiddler`) 

After the above, the content of the newly captured HTTPS sessions will be exactly the same as the one set in the repro playback sessions alongside any possible deviations, differences, or modifications that are not present online but only in the playback traffic.

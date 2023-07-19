---
title: Organizing Traffic
description: "Use the `Sessions` tree to save, organize and share snapshots of captured traffic."
slug: fe-organize-sessions
publish: true
position: 50
---

# Organizing Traffic

In addition to the core capturing and inspection capabilities, Fiddler Everywhere provides options to save, share and organize already captured sessions. The section that enables you to achieve the above is called the **Sessions** tree. To open the **Sessions** follow these steps:

1. Start Fiddler Everywhere.
1. Open the **Traffic** pane.
1. Expand the **Sessions** tree located to the left.

The **Sessions** tree in Fiddler Everywhere provides the option to save, organize, modify, inspect, encrypt, and share previously captured traffic. The section is part of a collapsible panel that you can hide/show to optimize your working space.


## Saving in Fiddler Everywhere

To save snapshots of captured traffic (single or multiple sessions) to the **Sessions** tree, use the saving and sharing options of the **Live Traffic** grid. All saved entries are automatically sorted in alphabetical order.

Save a snapshot of captured HTTPS traffic through the following steps:

1. Capture HTTPS traffic through your preferred capturing mode.

1. Select one or more sessions.

1. Use the context menu or the keyboard shortcuts `Ctrl + S` (Windows) or `Cmd + S` (macOS) to invoke the **save** dialog.

1. Complete the save by:

    - Assign a name for the snapshot.

    - (Optional) Encrypt the snapshot by adding password protection.

    - Choose save destination. The snapshots can be stored locally or in the cloud.


[Learn more on how to save captured traffic in Fiddler Everywhere here...]({%slug fiddler-saving%})

## Sharing in Fiddler Everywhere

Already saved snapshots of captured traffic can be shared directly within the **Sessions** tree.

1. Select the saved snapshot from within the **Sessions** tree.

1. Use the context menu or the keyboard shortcuts `Ctrl + Shift + =` (Windows) or `Cmd + Shift + =` (macOS) to invoke the **share** dialog.

1. Complete the share by:

    - Adding one or more collaborator's emails.

    - (Optional) Adding a descriptive comment.


You can share a snapshot of newly captured HTTPS traffic through the following steps:

1. Capture HTTPS traffic through your [preferred capturing mode]({%slug capture-traffic-get-started%}).

1. Select one or more sessions.

1. Use **Share** option from the context menu.

1. Save the sessions (share sessions will be explicitly stored in the cloud).

1. Complete the share by:

    - Adding one or more collaborator's emails.

    - (Optional) Adding a descriptive comment.


[Learn more on how to share captured traffic in Fiddler Everywhere here...]({%slug fiddler-sharing%})


## Exporting and Importing Traffic in Known Formats

Apart from the built-in saving and sharing functionalities, you can also export and import snapshots of captured traffic in multiple known formats like Fiddler Archive (SAZ), WCAT Script, MeddlerScript, cURL, Raw files, HTTPArchive v1.1, and HTTPArchive v1.2.

[Learn more on how to export and import traffic in different known formats here...]({%slug fiddler-export-and-import%})

>tip Fiddler Everywhere native format for saving sessions (and additional Fiddler-specific data) is called SAZ, which stands for [**Sessions Archive ZIP**]({%slug fiddler-saz-format%}) and is also known as Fiddler Archive. 
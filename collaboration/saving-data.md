---
title: Saving HTTPS Traffic
description: "Saving snapshots of captured traffic, API requests, and rules with the Fiddler Everywhere web-debugging proxy application."
slug: fiddler-saving
publish: true
position: 10
previous_url: /user-guide/sessions-list
---

# Saving Traffic in Fiddler Everywhere

With Fiddler Everywhere, you can capture and generate data like HTTPS sessions, composed API requests, and rules. It's only natural that the application provides user interface options to save, organize and share the information so it can be reused later. This article covers the saving capabilities of Fiddler Everywhere as follows:

- [Saving session's snapshots](#saving-sessions-snapshots)&mdash;Options to save single or multiple captured HTTPS sessions as local/cloud snapshots in the save **Sessions** tree.

- [Saving API requests collections](#saving-api-requests)&mdash;Options to save single or multiple composed API requests as local/cloud collections in the **Requests** list.

- [Saving rules](#saving-rules)&mdash;Options to save single or multiple rules within the **Rules** tab.


>tip The save options in Fiddler Everywhere allow you to use local and cloud save, organize your traffic snapshots in collections, and collaborate easily with a few clicks. It is important to note that Fiddler Everywhere also provides straightforward [export/import options]({%slug fiddler-export-and-import%}), which are not interconnected with the application user interface.


## Saving Session's Snapshots

The save **Sessions** tree in Fiddler Everywhere lets you store snapshots of previously captured traffic. The section is part of a collapsible panel that you can hide/show to optimize your working space. 

Save session snapshots to the save **Sessions** tree as follows:

- Use the **Save** option from the more option within the **Live Traffic** grid toolbar.

    !["Save" in the toolbar](../images/collaboration/save-toolbar.png)

OR

- Use the **Save** option from the **Live Traffic** grid context menu

    !["Save" option from the context menu](../images/collaboration/save-context-menu.png)

### Working with Saved Snapshots

You can select, inspect, modify, and share snapshots of previously saved session snapshots with collaborators. The snapshots can be saved locally or in the cloud. You can apply the following actions to a saved session snapshot:

- Single-click to select a session snapshot from the save **Sessions** tree.

- Double-click to open a saved session snapshot from the save **Sessions** tree in a new tab. Only users with the password can open the session entry for encrypted snapshots.

- Right-click to load the context menu of a selected session snapshot. The context menu provides multiple options for managing, exporting, and modifying the saved session entry. 

- Set a password to encrypt and protect your snapshot. The context menu provides options for setting, changing, and removing passwords for the saved session snapshot.

- Use the UI buttons next to a saved session snapshot to **manage users** (cloud session entries only), **share**, or **delete** saved session entries.

    ![Snapshot UI options](../images/collaboration/save-session-ui-buttons.png)
0
- Use the UI buttons at the top to **import** session snapshots or access previously **shared sessions** snapshots.

    ![Sessions list UI options](../images/collaboration/save-sessions-list-button.png)

    
## Saving API Requests

The **Composer** in Fiddler Everywhere is a powerful tool that allows you to execute custom API requests. You can also store these requests in a collection in the **Requests** list.

To save composed API requests, follow these steps:

- Open the **Requests** pane.

- Compose your API request in the **Composer**.

- Click the **Save** button in the top-right corner of the **Composer**. 

    ![Save an API request collection](../images/collaboration/save-requests-composer.png)

- Input the request name, select the destination collection, and confirm through the **Save** button
.

## Saving Rules

All rules in Fiddler Everywhere are automatically saved in your **Rules** list immediately after creation through the **Rules Builder**.
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

- [Saving session's snapshots](#saving-sessions-snapshots)&mdash;Options to save single or multiple captured HTTPS sessions as local/cloud snapshots in the save **Snapshots** tree.

- [Automated save of session's snapshots](#automated-save-and-export)&mdash;Options to save and export data automatically and periodically as SAZ files.

- [Saving API requests collections](#saving-api-requests)&mdash;Options to save single or multiple composed API requests as local/cloud collections in the **Requests** list.

- [Saving rules](#saving-rules)&mdash;Options to save single or multiple rules within the **Rules** tab.

The save options in Fiddler Everywhere allow you to use local and cloud save, organize your traffic snapshots in collections, and collaborate easily with a few clicks. It is important to note that Fiddler Everywhere also provides straightforward [export/import options]({%slug fiddler-export-and-import%}), which are not interconnected with the application user interface. The latest version of Fiddler Everywhere supports different languages, and the following symbols are allowed:

 - Letters.
 - Numbers (0-9).
 - Dashes (`-`), underscores (`_`), and blank spaces.

 >tip Note that saving a snapshot's sessions in Fiddler will effectively store them either in the application local storage (when using local save) or in Fiddler's cloud space (when using cloud save). If you need to create a file with sessions, you should use [the **Export** option]({%slug fiddler-export-and-import%}) which enables you to produce a file in various known formats (like SAZ, HTTPArchive, etc.).

## Saving Session's Snapshots

The save **Snapshots** tree in Fiddler Everywhere lets you store snapshots of previously captured traffic. The section is part of a collapsible panel that you can hide/show to optimize your working space. 

Save session snapshots to the save **Snapshots** tree as follows:

- Use the **Save** option from the more option within the **Live Traffic** grid toolbar.

    !["Save" in the toolbar](../images/collaboration/save-toolbar.png)

**OR**

- Use the **Save** option from the **Live Traffic** grid context menu

    !["Save" option from the context menu](../images/collaboration/save-context-menu.png)

### Working with Saved Snapshots

You can select, inspect, modify, and share snapshots of previously saved session snapshots with collaborators. The snapshots can be saved locally or in the cloud. You can apply the following actions to a saved session snapshot:

- Single-click to select a session snapshot from the save **Snapshots** tree.

- Double-click to open a saved session snapshot from the save **Snapshots** tree in a new tab. Only users with the password can open the session entry for encrypted snapshots.

- Right-click to load the context menu of a selected session snapshot. The context menu provides multiple options for managing, exporting, and modifying the saved session entry. 

- Set a password to encrypt and protect your snapshot. The context menu provides options for setting, changing, and removing passwords for the saved session snapshot.

- Use the UI buttons next to a saved session snapshot to **manage users** (cloud session entries only), **share**, or **delete** saved session entries.

    ![Snapshot UI options](../images/collaboration/save-session-ui-buttons.png)
0
- Use the UI buttons at the top to **import** session snapshots or access previously **Shared Snapshots**.

    ![Sessions list UI options](../images/collaboration/save-sessions-list-button.png)

## Adding Sessions to Snapshots

Sometimes, you might need to add a newly captured HTTP session to an existing snapshot. Or you might want to join the sessions from two saved snapshots together in a single snapshot. In both scenarios, you can use the **Add to Snapshot** option by invoking the context menu after selecting the targeted sessions.

[Learn more about using the **Add to Snapshot** context menu option here...]({%slug web-sessions-list%}#adding-session-to-snapshot)

## Automated Save and Export   

The Fiddler Everywhere application (version 6.4.0 and above) now provides the **AutoSave** option to export captured HTTPS data automatically and periodically. This feature enables Fiddler users to conduct various tasks, such as monitoring traffic to identify anomalies in high-traffic systems, inspecting live production environments for sporadic issues, generating comprehensive HTTPS logs for compliance or audit logs, and other similar tasks that require preserving the traffic history.

Enable the **AutoSave** feature as follows:

- Open **Tools** > **AutoSave**

 ![Auto save in "Tools" menu](../images/collaboration/auto-save-tools.png)

**OR**

- Use the following shortcuts to manage the **AutoSave** feature

 | Action  |  Keyboard Shortcut  |
 |---------|---------------------|
 |Open AutoSave dialog|`Alt` + `S`|
 |Enable/Disable AutoSave dialog|`Ctrl` + `Alt` + `S`|

The **AutoSave** provides several options to control the exported data:

- An option to set the duration in minutes. Once the set limit is reached, the Fiddler application automatically saves and exports the captured HTTPS data as an [SAZ file]({%slug fiddler-saz-format%}). The minimum duration is 1 minute, and the maximum duration is 720 minutes.

- An option to set the export folder. Files saved in this folder are also automatically synced to the **AutoSaved** folder in the **Snapshots** tree.

- **Save headers only** option—When this option is enabled, the sessions will be saved in the snapshot without the HTTPS body.

- **Apply filters when saving snapshot** option—When this option is enabled, only the sessions currently visible in the grid will be saved in the snapshot. Filtered-out sessions will not be included.

- **Do not clear the grid**—When this option is enabled, the **Live Traffic** grid remains intact after a snapshot is saved. The next autosaved snapshot will only include newly captured traffic by ID. 

![Auto save options](../images/collaboration/auto-save-window.png)

## Saving API Requests

The **Composer** in Fiddler Everywhere is a powerful tool that allows you to execute custom API requests. You can also store these requests in a collection in the **Requests** list.

To save composed API requests, follow these steps:

- Open the **Requests** pane.

- Compose your API request in the **Composer**.

- Click the **Save** button in the top-right corner of the **Composer**. 

    ![Save an API request collection](../images/collaboration/save-requests-composer.png)

- Input the request name, select the destination collection, and confirm through the **Save** button.

## Saving Rules

All rules in Fiddler Everywhere are automatically saved in your **Rules** list immediately after creation through the **Rules Builder**.
---
title: Sharing Data with Fiddler Everywhere
description: "Sharing snapshots of captured traffic, API requests, and rules with the Fiddler Everywhere web-debugging proxy application."
slug: fiddler-sharing
publish: true
position: 20
---

# Sharing Data with Fiddler Everywhere

This article covers the sharing capabilities of Fiddler Everywhere as follows:

- [Sharing session's snapshots](#sharing-sessions-snapshotss)&mdash;Options to save single or multiple captured HTTPS sessions as local/cloud snapshots in the **Sessions** list.

- Sharing API request collections&mdash;Options to share API requests collections as local/cloud collections in the **Requests** list.

- [Sharing rules](#sharing-rules)&mdash;Options to share single or multiple rules within the **Rules** tab.

## Sharing Session's Snapshots

To share captured traffic with other collaborators, first, you need to [save the session snapshot]({%slug fiddler-save%}). Note that sessions held locally will be transferred to the cloud if you use the share functionalities. Only users with knowledge of the password can open the session entry for encrypted sessions.

### Sharing Selected Sessions

To share a selected session from the ongoing capturing in the **Live Traffic** grid:

1. Select a session or multiple sessions from the **Live Traffic** grid.
 
1. Click the **Share** button from the **more** option. This action loads the **Save Session** prompt window. 

1. Give the snapshot a name, choose a destination folder, and then click **Save and Proceed**. This action loads the **Share Sessions** prompt window. 

1. Enter a valid email (mandatory) and notes (optional), and then click **Share**.

### Sharing Saved Session Snapshot

To share a saved session snapshot from the **Sessions** list:

1. Double-click a saved session entry from the **Sessions** list.

1. The session entry opens in a new tab. Click the **Share** button from the **more** option in the toolbar. This action loads the **Share Sessions** prompt window. 

    ![Sessions list](../images/collaboration/share-saved-toolbar-more.png)

1. Enter a valid email (mandatory) and notes (optional), and then click **Share**.

### Managing Users

The **Manage Users** option appears only if the session snapshot is stored in the cloud and shared. Click **Manage Users** to prompt a window that allows you to manage the list of users with access to the shared session.


## Sharing Requests Collections

The **Composer** in Fiddler Everywhere is a powerful tool that allows you to execute custom API requests. You can also store these requests in a collection in the **Requests** list and share all saved collections.

To share a collection of saved API requests, follow these steps:

- Open the **Requests** pane.

- Select a requests collection from the **Requests** list.

- Click the **Share** icon. Then, enter the email addresses of the users in the **Share Collection** window.

    ![Sharing an API request collection](../images/collaboration/share-saved-request-collection.png)

### Sharing Requests Collections Specifics

Consider the following when sharing a collection of requests.

- You can share a collection only if you are the collection owner.

- You can share only collection folders on the root level of the **Requests** list. You cannot share individual sub-folders.  

    ![Share collection popup](../images/collaboration/share-saved-request-collection-prompt.png)

## Sharing Rules

To share a created rule or group of rules, execute the following steps:

- Open the **Rules** tab.

- Select a rule or group of rules from the list.

- Click on the **Share** button.

    ![Sharing a rule or group of rules](../images/collaboration/share-rules-toolbar.png)

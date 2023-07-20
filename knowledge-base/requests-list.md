---
title: Requests Section
description: "Learn how to use the Requests section in the Fiddler Everywhere web-debugging HTTP-proxy client."
slug: saved-requests-tab
tags: Fiddler Everywhere Requests list, Fiddler Everywhere collections, saved requests, share requests, share Fiddler collection
---

# Requests Section

The **Requests**section in Fiddler Everywhere enables you to organize and modify existing requests, which are listed in it. The section is part of a collapsible panel that you can hide/show to optimize your working space.

For more information about building and sending HTTP and HTTPS requests, refer to the article on the [**Composer** tab]({% slug composer-tab %}).

When you save a request with the **Composer** tab, the request is added to a collection in the **Requests** list, which provides options for saving, modifying, executing, and sharing previously composed requests.

The **Requests** list is organized into collections. Each collection is a folder on the root level of the **Requests** list. A collection can contain saved requests and other subfolders. To reload or start working on the saved requests, expand a collection, and double-click a selected request. To rename or delete a collection, or make a new folder, use the [context menu options](#requests-context-menu).

## Requests Menu

The **Requests menu** displays the following buttons:

- ![Create New Request](../images/requests/create-new-requests-sign.png)&mdash;Opens a new **Composer** tab.
- **Shared Collections**&mdash;Controls who has access to the shared collections.
- **Create New Collection**&mdash;Creates a new collection folder.

## Collection Menu

The **Collection menu** displays options for managing your currently selected requests collection (folder).

- **Create New Collection**&mdash;Creates a new collection folder within the selected collection.
- **Manage Shared Collection**&mdash;Lists and manages users with access to the collection.
- **Share Collection**&mdash;Opens the sharing prompt and provide users with shared access rights.
- **Delete**&mdash;Deletes the selected collection completely. This action will also remove the collection for everyone with whom you've shared the collection.

### Sharing a Collection

To share a collection, click the __Share__ icon. Then, enter the email addresses of the users in the **Share Collection** window.

- You can share a collection only if you are the collection owner.
- You can share only collection folders on the root level of the **Requests** list. You cannot share individual sub-folders.  


### Deleting a Collection

To remove a selected collection or a specific request from the **Requests** list:

1. Click the **delete** icon of the folder.
1. Click __Delete__ in the prompt window to confirm the deletion.

You can also delete a specific sub-folder or a particular request by using the **delete** option for the selected entry.

## Collections Context Menu

Each collection provides options that are accessible through a context menu.

| Option      | Description |
| ----------- | ----------- |
| **New Folder**  | Creates a new folder within the selected collection.
| **Rename**      | Renames the selected collection. Only the owner can rename the collection; can be accessed through the keyboard by pressing `F2` (on Mac), or `F2` (on Windows).
| **Delete**      | Deletes the collection from the **Requests** list. This will also delete all the requests in the collection. If the collection is shared, the collection will be removed for everyone; can be accessed through the keyboard by pressing `Cmd`+`Back` (on Mac), or `Del` (on Windows).
| **Share**       | Triggers the **Share Collection** window; can be accessed through the keyboard by pressing `Cmd`+`Shift`+`=` (on Mac), or `Ctrl`+`Shift`+`=` (on Windows).
| **Manage Users**| Lists the users with shared access rights. You can use this option to remove users.
| **Save As Local Collection** |(Available for cloud collections only) Makes a local copy of your cloud saved collection. Useful for testing changes that you don't need to share with the collaborators using the cloud collection.
| **Duplicate Collection** |(Available for cloud collections only) Makes a local copy of your collection.


## Requests Context Menu

Each request provides options for renaming or deleting it through its context menu or through keyboard shortcuts.

You can update each saved request by inputting the modification (for example, in the Headers) and clicking the __Save__ button. To save a new instance of an already saved request, use __Save as__ in the drop-down, which is available for already saved requests only.

- **Rename**&mdash;Renames the selected request; can be accessed through the keyboard by pressing `F2` (on Mac and Windows).
- **Delete**&mdash;Deletes the selected request from the collection; can be accessed through the keyboard by pressing `Cmd`+`Back` (on Mac), or `Del` (on Windows).


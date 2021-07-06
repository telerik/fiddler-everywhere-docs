---
title: Requests List
slug: saved-requests-tab
tags: Fiddler Evwerywhere Requests list, Fiddler Everywhere collections, saved requests, share requests, share Fiddler collection
publish: true
position: 60
---


# Requests List

The **Requests** list in Fiddler Everywhere provides the option to save, modify, execute, and share previously composed requests. When you **save** a request using the [Composer](https://docs.telerik.com/fiddler-everywhere/user-guide/composer), the request is added to a **collection** in the **Requests** list.

This article describes how to organize and modify existing requests. To learn more about building and sending HTTP and HTTPS requests, see the [Composer](https://docs.telerik.com/fiddler-everywhere/user-guide/composer) article.

![Requests list](../images/requests/requests-list-all.png)

The **Requests** list is organized in **collections**. Each collection is a folder on the root level of the **Requests** list. A collection can contain saved requests and other subfolders. To reload or start working on the saved requests, expand a collection, and double-click a selected request.

>tip You can [**Rename**](#rename) a collection, [**Delete**](#delete) a collection, or make a [**New Folder**](#new-folder) using the context menu. 

## Requests Menu

The **Requests menu** contains three buttons situated to the right of the section title:

- Use the ![Create New Request](../images/requests/create-new-requests-sign.png) button to open a new **Composer** tab.
- Use the **Shared Collections** icon to control who has access to the shared collections.
- Use the **Create New Collection** to create a new collection folder.

![Requests menu options](../images/requests/requests-main-menu.png)

## Collection Menu

The **Collection menu** contains several options to manage your currently selected requests collection (folder):

![Requests collection options](../images/requests/requests-collection-menu.png)

- Use the **Create New Collection** option to create a new collection folder within the selected collection.
- Use the **Manage Shared Collection** option to list and manage users with access to the collection.
- Use the [**Share Collection**](#share-collection) option to open the sharing prompt and provide users with shared access rights.
- Use the [**Delete**](#delete) option to delete the selected collection completely. This action will also remove the collection for everyone you've shared the collection with.

### Share Collection

To share a collection, click the __Share__ icon, then enter the email addresses of the users in the **Share Collection** window.

![Share collection popup](../images/requests/share-requests-popup.png)

- You can share a collection only if you are the collection owner.
- You can share only collection folders on the root level of the **Requests** list. You cannot share individual sub-folders.  

### Delete 

The delete option will remove a selected collection or a specific request from the **Requests** list.

Follow these steps to delete a collection: 

1. Click the **delete** icon of the folder.
1. Click __Delete__ in the prompt window to confirm the deletion.

![Delete Requests Folder](../images/requests/delete-requests-collection.png)

>tip You can also delete a specific sub-folder or a particular request using the **delete** option for the selected entry.

## Collection Context Menu 

Each collection has options accessible through a context menu. 

![Requests Collection Context Menu](../images/requests/requests-collection-context.png)

| Option      | Description |
| ----------- | ----------- |
| **New Folder** | Creates a __new folder__ within the selected collection.|
| **Rename** | Renames the selected collection. Only the owner can rename the collection. _Keyboard shortcut: __F2__ (Mac), __F2__ (Windows)._|
| **Delete** | Deletes the collection from the **Requests** list. This will also delete all the requests present in the collection. If the collection is shared, the collection will be removed for everyone. _Keyboard shortcut: __CMD + Back__ (Mac), __Del__ (Windows)._|
| **Share** | Triggers the **Share Collection** window. _Keyboard shortcut: __CMD + Shift + =__ (Mac), __Ctrl + Shift + =__ (Windows)._|
| **Manage Users** | Lists the users with shared access rights. You can use this option to remove users.|
| **Save As Local Collection** | Makes a local copy of your cloud saved collection. Useful for testing changes that you don't need to share with the collaborators using the cloud collection. _The option is available only for cloud collections_.|
| **Duplicate Collection** | Makes a local copy of your collection. _The option is available only for locally saved collections_.|

## Requests Context Menu

Each  __requests__ has options to either __Rename__ or __Delete__ through its context menu (or through keyboard shortcuts).

![Requests context menu](../images/requests/requests-context-menu.png)

- **Rename**: Renames the selected request. _Keyboard shortcut: __F2__ (Mac), __F2__ (Windows)._ 

- **Delete**: Deletes the selected request from the collection. _Keyboard shortcut: __CMD + Back__ (Mac), __Del__ (Windows)._ 

>tip Each saved request can be updated by inputting the modification (for example, in the Headers) and pressing the __Save__ button. If you want to save a new instance of an already saved request, use the __Save as__ drop-down option (available only for already saved requests).

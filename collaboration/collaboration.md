---
title: Collaboration
description: "Share and investigate network issues with your team using the built-in collaboration functionalities of the Fiddler Everywhere web-debugging tool."
slug: collaboration-get-started
publish: true
position: 60
previous_url: /get-started/collaboration, /collaboration
---

# Collaboration

The Fiddler Everywhere client provides a secure method for sharing network debugging logs with your teams for analysis, communication, and resolution.

Compared with previous Fiddler Everywhere versions, where collaboration was limited to exporting `.saz` files and sharing them over a different channel, now all sharing and commenting happen directly within the UI securely and comfortably.

## Saving and Sharing Sessions

In Fiddler Everywhere, you can save and, later on, view and share captured network sessions with your team and invite other team members to collaborate. For additional security, you can enable encryption and protect all saved sessions with password protection.


The [**Sessions** section]({%slug saved-sessions-tab%}) is the place where you can organize captured traffic in folders, share them with collaborators, and create cloud backups. The section is part of a collapsable panel that you can hide/show to optimize your working space.


### Saving Sessions

To save a session:

 1. [Capture the traffic]({%slug capture-traffic-get-started%}).

 1. Use any of the available approaches to save a captured session:

    - The **Save**  option of the [**Live Traffic** toolbar]({%slug web-sessions-list%}#live-traffic-toolbar). The option allows you to save and organize sessions in the [**Sessions** section]({%slug saved-sessions-tab%}).

    - The **Save** option from the context menu of the [**Live Traffic** list]({%slug web-sessions-list%}#live-traffic-list). The option allows you to save and organize sessions in the [**Sessions** section]({%slug saved-sessions-tab%}).

    - The [context menu]({%slug web-sessions-list%}#context-menu-options), which allows you to **export** the captured traffic in various formats such as `SAZ` (Fiddler Archive), `HTTPArchive`, `WCAT`, `MeddlerScript`, `cURLScript`, and others.

Optionally, you can protect the saved session by enabling encryption and setting a password. Only users with the knowledge of the password can open the password-protected session. Password-protected sessions are listed in the **Session** list with a lock icon. [Read more about encrypting saved entries...]({% slug saved-sessions-tab %}#encrypting)

>tip All saved sessions, including local saves, cloud saves from the [**Sessions** list]({%slug ved-sessions-tab%}), or manual exports are stored as [SAZ files]({%slug fiddler-saz-format%}). Always consider protecting your saved session with a password that adds additional 256-bit AES encryption to the generated SAZ file. [Learn more about the security aspects to consider when keeping traffic here ...]({%slug fe-security%}#saving-traffic)

### Sharing Sessions

To share a session with a collaborator:

 1. [Capture the traffic]({%slug capture-traffic-get-started%}) that you want to share with your collaborators. Alternatively, select a saved session from the [**Sessions** list]({%slug saved-sessions-tab%}).

 1. Use any of the supported approaches to share a captured session:

    - The **Share** option of the [**Live Traffic** toolbar]({%slug web-sessions-list%}#live-traffic-toolbar)&mdash;Click **Share** to prompt two consecutive windows for entering the information related to saving and sharing.

    - The **Share** option from the context menu of the [**Live Traffic** list]({%slug web-sessions-list%}#live-traffic-list)&mdash;Click **Share** to prompt two consecutive windows for entering the information related to saving and sharing.

    - The **Share** button of the [**Sessions** list]({%slug saved-sessions-tab%})&mdash;The list contains your previously saved sessions or sessions that were shared with you. Click the **Share** button to prompt a window for entering the information related to sharing.

    - The [context menu]({%slug web-sessions-list%}#context-menu-options) allows you to export various formats such as `SAZ` (Fiddler Archive), `HTTPArchive`, `WCAT`, `MeddlerScript`, `cURLScript`, and others.

Only users with the knowledge of the password will be able to open the shared session when the shared session is password-protected. [Read more about encrypting saved entries...]({% slug saved-sessions-tab %}#encrypting)

### Deleting Shared Sessions

Fiddler Everywhere provides options for deleting previously shared sessions. To select the sessions you want to delete, go to the **Sessions** list and use the **Delete** button. All users added as collaborators will be notified [through the notification bar and with an email message](#notifications-for-shared-content) that the shared session is now deleted. To restore deleted sessions, use the [**Shared Sessions** option]({%slug saved-sessions-tab%}#shared-sessions).

## Adding Context for Collaborators

Some network sessions may lack essential details not captured in the technical data. Fiddler Everywhere provides options for you and your collaborators to add context to the captured and shared sessions, comment in the same communication thread, and provide additional information by adding **comments** per session and **notes** per shared entities.

### Comments

Add a custom comment to one or more captured sessions to provide additional context.

1. Select a session from the [**Live Traffic** list]({%slug web-sessions-list%}#live-traffic-list) or load saved sessions from the [**Sessions** list]({%slug saved-sessions-tab%}).

1. Add a comment by using the **Comment** option from the context menu or press the **M** key while selecting the desired sessions. As a result, the newly added comment will appear in [the **Comments** column]({%slug web-sessions-list%}#live-traffic-list).

    ![Add a comment for selected sessions](../images/livetraffic/websessions/add-session-comment.png)

### Notes

Add additional context in the form of a descriptive note while sharing one or more sessions.

1. Use the **Share** option from the [**Live Traffic toolbar**]({%slug web-sessions-list%}#live-traffic-toolbar) or the **Share** button in the [**Sessions** list]({%slug saved-sessions-tab%}).

1. In the first dialog window, provide a name for the shared sessions, set password protection, and choose the local destination folder.

    ![Share prompt](./images/livetraffic/websessions/websessions-toolbar-share-prompt-001.png)
    
1. In the second dialog window, provide the additional information in the **Add a note** field.

    ![Add a note in share prompt window](../images/livetraffic/websessions/websessions-toolbar-share-shareprompt.png)

## Notifications for Shared Content

The Fiddler Everywhere client informs the collaborators about shared sessions in the following ways:
- Collaborators receive an email with an invitation to open the shared session. If the session creator has added a note, the email will display the note as well.
- All listed collaborators receive a notification within the Fiddler Everywhere client. To open the shared session in a separate tab, click the notification.

    ![Notification for received content](../images/settings/notifications-for-shared-content.png)


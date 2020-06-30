---
title: Sessions List
slug: saved-sessions-tab
tags: Fiddler sessions, saved sessions, sessions list, Fiddler sessions tab
publish: true
position: 10
---

## Sessions

The Fiddler Everywhere client provides the option to save and share the captured traffic (also mentioned as __snapshots__ of sessions). Use the __Live Traffic__ list's [__Save__]({%slug web-sessions-toolbar%}#save) and [__Share__]({%slug web-sessions-toolbar%}#share) options to add snapshots to the __Sessions__ list. The saved snapshots are available for later usage and sharing in the __Sessions__ list. 

![Sessions list](../../images/sessions/saved-sessions-all.png)

>tip A **Snapshot** in Fiddler Everywhere is a term that describes an entry that holds single or multiple sessions (captured traffic). Saved snapshot entries are listed in [the **Sessions** list]({%slug saved-sessions-tab%}) and can also be exported as [**SAZ** archive]({%slug file-menu%}).

## Sessions Menu

Once a snapshot (of sessions) is saved (or saved & shared) it will be appended to the __Sessions__ list. Each snapshot comes with quick menu options.

![Saved snapshot fast options](../../images/sessions/sessions-shared-in-list.png)

#### Manage Users

The option appears only if the snapshot is already shared. Click on the __Manage Users__ to prompt a windows that allows you to manage the list of users that have access to the shared snapshot.

![Manage Users](../../images/sessions/sessions-shared-manage-users.png)
 
#### Share

The option prompts a window where you could add user emails that you want to share the snapshot with. Available only for the snapshot owner.

#### Delete

The option removes the snapshot from the __Sessions__ list. Shared snapshot can be recovered from the __Notifications__ drop-down menu.

## Sessions Context Menu

Each snapshot has several commands that can be accessed via the context menu (or with keyboard shortcuts).

![Saved sessions context menu](../../images/sessions/sessions-shared-context.png)

#### Open

The option will load the selected snapshot in the __Live Traffic__ list. Keyboard shortcut: __Cmd__ + __Enter__ (Mac), __Enter__ (Windows).

#### Export

The option promts the __Export__ windows. The snapshot can be exported in SAZ format which can be encrypted (optional). Keyboard shortcut: __Cmd__ + __E__ (Mac), __Ctrl__ + __E__ (Windows).

#### Rename

The option allows you to rename the selected snapshot. Available only for the snapshot owner. Keyboard shortcut: __F2__ (Mac), __F2__ (Windows).

#### Share

The option promts a window where you could add user emails that you want to share the snapshot with. Available only for the snapshot owner. Keyboard shortcut: __Cmd__ + __Shift__ + __=__ (Mac), __Ctrl__ + __Shift__ + __=__ (Windows).

#### Delete

The option removes the snapshot from the __Sessions__ list. Keyboard shortcut: __Cmd__ + __Back__ (Mac), __Del__ (Windows).

#### Manage Users

The option allows you to manage the users with which the snapshot is being shared. Active only for the snapshot owner.

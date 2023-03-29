---
title: Rules Tab
description: "Learn how to use the Rules tab in the Fiddler Everywhere web-debugging HTTP-proxy client."
slug: rules-general
publish: true
position: 50
previous_url: /user-guide/live-traffic/autoresponder, /user-guide/live-traffic/rules
---

# Rules Tab

The **Rules** tab enables you to create rules (including **[custom ones]({%slug using-custom-responses%})**) that will automatically trigger in response to requests.

The **Rules** functionality provides options for testing different scenarios while sparing you with the efforts to change the client application or production server. YOu can use it to mock behavior, test new functionalities, reproduce previously captured bugs (from saved sessions, SAZ files, and other HTTP Session formats), and run website demos while you are offline.

The collaboration functionalities allow you to import and export a single rule or group of rules and share them directly with other Fiddler Everywhere collaborators. Each rule has a different order priority and execution weight, easily controlled by promoting or demoting a rule.

The **Rules** tab has improved UI capabilities by providing more convenient options to create matching conditions and actions. Now you can quickly organize rules into different groups to ease their future usage and to share them easily with collaborators.

![Rules tab](../images/livetraffic/rb/rules-all.png)

The **Rules** tab contains the following sections:

- **Rules Toolbar**&mdash;Provides options for rule creation, group creation, sharing, manual import or export, and manual execution.
- **Rule Builder**&mdash;Creates new rules and edits existing ones.
- **Rules Queue**&mdash;A queue of rules and groups applied in the order of appearance from top to bottom. Each rule/group in the queue has its toolbar with different functionalities.

## Built-In Logic

When executing a rule for ongoing HTTP(S) traffic or running a rule on previously saved sessions, **Rules** follows a built-in logic depending on whether the session is actively captured (ongoing **Live Traffic** sessions).

**Live Traffic** and **Rules** stick to the following basic guidelines:

- The **Rules** main toggle is available only for the **Live Traffic** section.
- If the **Rules** toggle is **ON**, and a selected rule toggle is **ON**, the rule is active for all inbound/outbound captured traffic (the **Live Traffic** section with enabled **Capturing**).
- If the **Rules** toggle is **ON**, and a selected rule toggle is **OFF**, the rule is inactive for any of the inbound/outbound captured traffic (the **Live Traffic** section with enabled **Capturing**).
- If the **Rules** toggle is **ON**, and a selected group toggle is **OFF**, the rules contained within the group are active. 
- If the **Rules** toggle is **ON**, and a selected group toggle is **ON**, only the active rules within the group are active. 
- The **Execute** button (a green play arrow) will explicitly execute all **selected** rules, no matter if they are active or inactive. The explicitly executed rules apply only to already captured traffic. The rules (that are trigged through **Execute**) won't be used for newly incoming traffic.
- All HTTP/HTTPS requests that are not matching any of the active rules will be executed as is without interference from the **Rules** tab. 
- The application setting **Unmatched Requests Passthrough** was deprecated in version 3.4.0. [Learn how to create it manually through a custom rule...]({%slug rules-unmatched-requests-passthrough%}).

**Saved Sessions** and **Rules** stick to the following basic guidelines:

- The **Rules** main toggle is unavailable for saved sessions (from the **Sessions** list). The toggle will be hidden when a saved session is loaded.
- The **Execute** button from the primary **Rules** toolbar will execute all currently selected rules. The result applies to all sessions that match the conditions of the rule. If multiple rules are selected, they will be executed in the order of appearance in the **Rules Queue**&mdash;this means that a rule can be overwritten by another rule that comes later in the queue. Some rules are also final, which means that no other rules in the queue will be executed after a final rule
- The **Execute** button from a selected rule toolbar will only execute the currently selected rule.

## Rules Toolbar

The main toolbar of the **Rules** comes with the following functionalities:

- **Add New Rule**&mdash;Opens the **Rule Builder** window to create a new rule.
- **Shared Ruleset**&mdash;Opens a list of the shared rulesets.
- **Share**&mdash;Opens the **Share** windows where you can enter a collaborator email to share all created rules.
- **Import**&mdash;Prompts a window for importing rules from a FARX file.
- **Export**&mdash;Exports all selected rules in a FARX file.
- **Execute**&mdash;Executes the selected rules for the captured traffic or the loaded, saved sessions. Not applicable for new incoming traffic.

![Rules tab toolbar](../images/livetraffic/rb/rules-toolbar.png)

## Rule Builder

The **Rule Builder** interface enables you to create (through the **Add New Rule** button) and edit rules (through a selected rule's **Edit** button). For each new rule, you must enter a condition (previously known as a match rule) and an action (previously known as an action string). Fiddler Everywhere will undertake the action if the request URI matches the condition and when the rule is active.

![Rule Builder Conditions](../images/livetraffic/rb/rules-re-conditions.png)

### Adding New Rules

To add a new rule:

1. Click the main toolbar's **Add New Rule** button.
1. Add a new name for your rule in the **Rule Name** text field.
1. Set the **When** rule based on one of the following statements:
    - **all these conditions**&mdash;The rule applies when all conditions are true (logical TRUE).
    - **any of these conditions**&mdash;The rule applies when any conditions are true (logical OR).
    - **none of these conditions**&mdash;The rule applies when none of the conditions is true (logical FALSE).
1. Add one or more conditions. See the [conditions section](#conditions) for more details.
1. Set how many times the [actions](#actions) will be triggered when the conditions are met:
    - **Any number of times** - The action executes each time the conditions are met.
    - **Specific number of times** - The action executes **n**-times (user specifies **n**, which can be a numerical value between 1 and 65535).
1. Add one or more actions. See the [actions section](#actions) for more details.
1. Click **Save** to close the **Rule Editor** and add the newly created rule to the **Rules Queue**.

When creating a rule, take into consideration the following tips:

- Rules are applied in their order of appearance in the **Rules Queue**. To demote a rule in the queue, use the **Down Arrow**; to promote a rule on the queue, use the **Up Arrow**.
- You can export selected rules from the queue through the **Export** button from the [**Rules toolbar**](#rules-toolbar).
- To queue rules based on previously captured traffic, import a `.FARX` file [through the **Import** button]({%slug rules-general%}#import-rules).
- Each condition and action value corresponding to the **Live Traffic** capturing data can be auto-completed. This way, you can create rules based on captured sessions on the fly.

### Conditions

The **Rule Builder** can add and use single or multiple **conditions** needed to trigger different [**actions**](#actions). The conditions are logical structures with different statements whose numbers can vary between two and four. A statement field that handles text (string modifier) is case-insensitive by default (you can use the **Aa** button to change them to case-sensitive) and can be auto-completed with suggestions corresponding to the captured sessions.

For more information, refer to the following list. 

<table style="width: 100%">
    <colgroup>
       <col span="1" style="width: 14%;">
       <col span="1" style="width: 14%;">
       <col span="1" style="width: 14%;">
       <col span="1" style="width: 14%;">
       <col span="1" style="width: 44%;">
    </colgroup>
    <thead>
        <tr>
            <th>Condition Value</th>
            <th>Field Options</th>
            <th>Field Options</th>
            <th>Field Options</th>
            <th>Usage Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>Protocol</b></td>
            <td>HTTP or HTTPS</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Differentiate the traffic based on the used protocol (HTTP vs. HTTPS).</td>
        </tr>
        <tr>
            <td><b>Host</b></td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Matches a specific keyword in the <b>Host</b> column.</td>
        </tr>
        <tr>
            <td><b>Path</b></td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Matches a specific keyword in the <b>path</b> column.</td>
        </tr>
        <tr>
            <td><b>URL</b></td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Matches a specific keyword in the <b>URL</b> column.</td>
        </tr>
        <tr>
            <td><b>Status Code</b></td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Matches a specific keyword in the <b>Result</b> column.</td>
        </tr>
        <tr>
            <td><b>Method</b></td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Matches sessions using specific HTTP <b>Method</b>.</td>
        </tr>
        <tr>
            <td><b>Process</b></td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Matches a specific <b>Process ID</b>.</td>
        </tr>
        <tr>
            <td><b>Client IP</b></td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Matches session with specific <b>Client IP</b>.</td>
        </tr>
        <tr>
            <td><b>Remote IP</b></td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Matches session with specific <b>Remote IP</b>.</td>
        </tr>
        <tr>
            <td><b>Body Size</b></td>
            <td>Number modifiers (compares bytes)</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Matches session with specific <b>Body Size</b>.</td>
        </tr>
        <tr>
            <td><b>Duration</b></td>
            <td>Number modifiers (compares milliseconds)</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Matches sessions with specific <b>Duration</b>.</td>
        </tr>
        <tr>
            <td><b>Comment</b></td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Matches sessions with specific <b>Comment</b> column.</td>
        </tr>
        <tr>
            <td><b>Request Body</b></td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Matches sessions with specific keyword in the <b>Request Body</b> column.</td>
        </tr>
        <tr>
            <td><b>Request Header</b></td>
            <td>Header name</td>
            <td>String modifiers</td>
            <td>The search value </td>
            <td>Matches sessions with specific keyword in the <b>explicitly mentioned Request header</b> column.</td>
        </tr>
        <tr>
            <td><b>Response Body</b></td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Matches sessions with specific keyword in the <b>Response body</b>.</td>
        </tr>
        <tr>
            <td><b>Response Header</b></td>
            <td>Header name</td>
            <td>String modifiers</td>
            <td>The search value </td>
            <td>Matches sessions with specific keyword in the <b>explicitly mentioned Response header</b> column.</td>
        </tr>
        <tr>
            <td><b>Cookie</b></td>
            <td>Cookie name</td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>Matches sessions with specific keyword in the <b>explicitly mentioned Cookie</b>.</td>
        </tr>
        <tr>
            <td><b>Certificate Information</b></td>
            <td>Field name</td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>Matches sessions with specific keyword in the <b>explicitly mentioned certificate field</b>.</td>
        </tr>
        <tr>
            <td><b>Caching</b></td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Matches sessions with specific keyword in the <b>HTTP Headers related to content caching</b>.</td>
        </tr>
        <tr>
            <td><b>Content-Type</b></td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Matches sessions with specific keyword in the <b>Content-Type</b> column.</td>
        </tr>   
        <tr>
            <td><b>Request Time</b></td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Matches specific date string in the <b>Request Time</b> column.</td>
        </tr>  
        <tr>
            <td><b>Request Date</b></td>
            <td>Date modifiers</td>
            <td>Date form</td>
            <td>n/a</td>
            <td>Matches session executed on a specific date.</td>
        </tr>
        <tr>
            <td><b>Rules Modified</b></td>
            <td>Boolean</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Matches sessions modified by a rule.</td>
        </tr>  
        <tr>
            <td><b>TLS Version</b></td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Matches traffic based on the used <b>TLS Version</b>.</td>
        </tr>
        <tr>
            <td><b>Magic String</b></td>
            <td>The "magic string" content</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Uses <a href="https://docs.telerik.com/fiddler/knowledge-base/autoresponder#matching-rules">the legacy Fiddler Classic string literals and regular expressions</a>.</td>
        </tr>
    </tbody>
</table>

### Actions

When Fiddler Everywhere identifies a request that matches the rule's [**conditions**](#conditions), it automatically maps it to the **action** set in the rule. An action field that handles text (string modifier) is case-insensitive by default (you can use the **Aa** button to change them to case-sensitive) and can be auto-completed with suggestions corresponding to the captured sessions. Note that multiple actions will be executed in their numbered order, and action with the final action type will prevent the execution of all subsequent actions.

Apart from returning files or predefined responses, a rule can perform the following specific actions:

<table style="width: 100%">
    <colgroup>
       <col span="1" style="width: 16%;">
       <col span="1" style="width: 13%;">
       <col span="1" style="width: 13%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 38%;">
       <col span="1" style="width: 10%;">
    </colgroup>
    <thead>
        <tr>
            <th>Action name</th>
            <th>Field Options</th>
            <th>Field Options</th>
            <th>Preview box</th>
            <th>Usage Description</th>
            <th>Action type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>Mark Session</b></td>
            <td>Choose background color</td>
            <td>Choose foreground color</td>
            <td>Sample Preview box</td>
            <td>Marks the session with selected colors.</td>
            <td>Non-final</td>
        </tr>
        <tr>
            <td><b>Update Request Header</b></td>
            <td>Header Name</td>
            <td>Value modifiers</td>
            <td>New value</td>
            <td>Uses the selected value modifier and the new value to update the request header.</td>
            <td>Non-final</td>
        </tr>
        <tr>
            <td><b>Update Response Header</b></td>
            <td>Header Name</td>
            <td>Value modifiers</td>
            <td>New value</td>
            <td>Uses the selected value modifier and the new value to update the response header.</td>
            <td>Non-final</td>
        </tr>
        <tr>
            <td><b>Update Request Body</b></td>
            <td>Value modifiers</td>
            <td>New value</td>
            <td>n/a</td>
            <td>Uses the selected value modifier and the new value to update the request body.</td>
            <td>Non-final</td>
        </tr>
        <tr>
            <td><b>Update Response Body</b></td>
            <td>Value modifiers</td>
            <td>New value</td>
            <td>n/a</td>
            <td>Uses the selected value modifier and the new value to update the response body.</td>
            <td>Non-final</td>
        </tr>
        <tr>
            <td><b>Update URL</b></td>
            <td>Value modifiers</td>
            <td>New value</td>
            <td>n/a</td>
            <td>Uses the selected value modifier and the new value to update the current URL.</td>
            <td>Non-final</td>
        </tr>
        <tr>
            <td><b>Update Query Params</b></td>
            <td>Query Parameter Key</td>
            <td>Value modifiers</td>
            <td>New value</td>
            <td>Uses the selected value modifier and the new value to update the query parameters.</td>
            <td>Non-final</td>
        </tr>
        <tr>
            <td><b>Update Request Cookies</b></td>
            <td>Cookie Key</td>
            <td>Value modifiers</td>
            <td>New value</td>
            <td>Uses the selected value modifier and the new value to update the cookie value.</td>
            <td>Non-final</td>
        </tr>
        <tr>
            <td><b>Update Response Cookies</b></td>
            <td>Cookie Key</td>
            <td>Value modifiers</td>
            <td>New value</td>
            <td>Uses the selected value modifier and the new value to update the cookie value.</td>
            <td>Non-final</td>
        </tr>
        <tr>
            <td><b>Predefined Response</b></td>
            <td>Drop-down with <a href="https://docs.telerik.com/fiddler-everywhere/knowledge-base/using-ar-predefined-actions">predefined responses</a></td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Returns the selected predefined response.</td>
            <td>Final</td>
        </tr>
        <tr>
            <td><b>Manual Response</b></td>
            <td>Text field for creating manual response</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Returns the manually created response.</td>
            <td>Final</td>
        </tr>
        <tr>
            <td><b>Response File</b></td>
            <td>File Picker</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Returns the picked response file.</td>
            <td>Final</td>
        </tr>
        <tr>
            <td><b>Do Not Show</b></td>
            <td>n/a</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Hides the matched session for appearing in Fiddler. When the <b>Do Not Show</b> action is applied, no other actions will be executed.</td>
            <td>Final</td>
        </tr>
        <tr>
            <td><b>Delay Request</b></td>
            <td>Number value (milliseconds)</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Delays the request execution with "n" milliseconds.</td>
            <td>Non-final</td>
        </tr>
        <tr>
            <td><b>Graceful Close</b></td>
            <td>n/a</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>This action will close the connection gracefully.</td>
            <td>Final</td>
        </tr>
        <tr>
            <td><b>Non Graceful Close</b></td>
            <td>n/a</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>This action will close the connection forcefully.</td>
            <td>Final</td>
        </tr>
        <tr>
            <td><b>Magic String</b></td>
            <td>The "magic string" content</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Uses the <a href="https://docs.telerik.com/fiddler/knowledge-base/autoresponder#matching-rules">legacy Fiddler Classic string literals and regular expressions.</a></td>
            <td>Final</td>
        </tr>
        <tr>
            <td><b>Comment</b></td>
            <td>String modifiers</td>
            <td>New value</td>
            <td>n/a</td>
            <td>Action to modify, add, or remove a session comment</td>
            <td>Non-final</td>
        </tr>
        <tr>
            <td><b>Do Not Decrypt</b></td>
            <td>n/a</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Skips decryption for a matched session and shows only CONNECT tunnels. Only conditions for <b>Host, URL, Process, Client IP, HTTP Version, and Remote IP</b> can be used. The rule works only for newly established connections.</td>
            <td>Final </td>
        </tr>
    </tbody>
</table>

### Final and Non-Final Actions

Rule actions can be divided into **final** and **non-final** depending on their behavior.

When you work with final and non-final actions, take into consideration the following insights:

* Final actions immediately prevent any other action from executing if this action comes lower on the list for the specific rule. Final actions also prevent any rule with lower priority, which matches the request, from executing any actions.

* Final actions are valid only when the rule is matched during the HTTP request.

* If a session is matched with conditions that depend on its response (for example, a response body contains "HTML"), then any final action in any rule that matches the session will be ignored. The reason for this behavior is that final actions replace the response. By design, Fiddler is not intended to replace a response that was already received and matched conditions in a rule.

* Non-final actions will allow other actions from the same rule or different rules with lower priority, which match the session, to execute.

## Rules Queue

The **Rules Queue** is a visual tree that lists all active rules & groups in a priority queue. It is important to note that each active rule or group has higher execution priority than other rules & groups placed lower in the queue. The **Rules Queue** allows you to enable, disable, promote, denote, edit, export, import, share, and immediately execute the listed rules.

To use a rule (or a group of rules) from the **Rules Queue**, take into consideration the following tips:

- The **Rules** tab must be active (switch ON).

- Only **active** rules from the queue will be applied on ongoing Live traffic capture. If the rule is contained within a group, then the group must be active as well.

- You can explicitly trigger a rule for already captured (including saved) traffic through the **Execute** button (executes the rule on current sessions).

- The **Execute** button is not affected by the active state of groups/rules. Actions from any selected rule or group of rules will be triggered when the **Execute** button is used.

- The rules in the **Rules Queue** are executed with priority based on their position in the queue. Use the **Demote** and **Promote** buttons to change the queue's rule position (and priority). Alternatively, you can drag and drop rules to change their position in the queue. 

- The groups in the **Rules Queue** are executed with priority based on their position in the queue. Use the **Demote** and **Promote** buttons to change the queue's group position (and priority). Alternatively, you can drag and drop groups to change their position in the queue.

- You can use drag and drop rules in and out of groups and subgroups. Note that this might change the execution priority when multiple rules are executed simultaneously.

- Some rule actions might trigger [a final action](#final-and-non-final-actions), which stops the execution of all other actions and rules with lower priority.

### Rules Priority

By default, the **Rules Queue** will list all created and imported rules based on their priority. Rules will be executed according to their appearance, starting from the top. When selecting specific rules and using the explicit **Execute** button, they will run in the order they appear in the queue.

### Explicit Rules Execution

The **Execute** button from the main toolbar explicitly executes all active rules on captured sessions. The **Execute** functionality is available for both the **Live Traffic** and saved sessions.

### Rule Options

Each rule has its panel with the rule name, its toolbar with rule options, a list that previews the set conditions, and a list that previews the set actions.

The rule options allow you to further interact with the rule:

- The **Play** button executes the current rule. The rule will match any loaded sessions.
- The **Enable/Disable** toggle explicitly enables or disables the rule execution. Available only for **Live Traffic** sessions and hidden when interacting with saved sessions.
- The **Promote** up arrow promotes the selected rule in the **Rules Queue**.
- The **Demote** down arrow demotes the selected rule in the **Rules Queue**.
- The **Edit** button opens the **Rule Builder** to edit the rule.
- The **Duplicate** button creates a duplicate copy of the selected rule.
- The **Delete** button deletes the rule from the **Rules Queue**.


![Rule options](../images/livetraffic/rb/rules-individual-rule.png)


### Group Options

You can organize multiple rules in groups. Each group consists of the following:
- Group name.
- Indication that shows the number of active and total rules (contained within the group).
- Toolbar with group options.
- Queue with all contained rules or subgroups.

The group options allow you to further interact with the group's rules:

- The **Play** button executes all active rules from the selected group. The rules will match any loaded sessions.
- The **Enable/Disable** toggle explicitly enables or disables the group execution. Available only for **Live Traffic** sessions and hidden when interacting with saved sessions.
- The **Promote** up arrow promotes the selected group of rules in the **Rules Queue**.
- The **Demote** down arrow demotes the selected group of rules in the **Rules Queue**.
- The **Add Group** button automatically creates a subgroup within the selected group.
- The **Add Rule** button opens the **Rules Builder** and places the new rule within the selected group.
- The **Duplicate** button creates a duplicate copy of the selected group.
- The **Delete** button deletes the group, and all contained rules from the **Rules Queue**.

![Group options](../images/livetraffic/rb/rules-group-options.png)

## Additional Resources

- [Mocking Servers with Fiddler Everywhere]({%slug rulesbuilder-get-started%})
- [Using Predefined Actions]({%slug fiddler-ar-actions%})
- [Understanding Final vs Non-Final Actions]({%slug fiddler-rules-actions%})
- [Creating Manual HTTP Responses]({%slug using-custom-responses%})
- [Creating Unmatched Requests Passthrough Rule]({%slug rules-unmatched-requests-passthrough%})


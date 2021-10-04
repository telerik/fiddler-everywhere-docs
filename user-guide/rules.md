---
title: Rules Tab
description: "Learn how to use the Rules tab in the Fiddler Everywhere web-debugging HTTP-proxy client."
slug: rules-general
publish: true
position: 50
previous_url: /user-guide/live-traffic/autoresponder, /user-guide/live-traffic
---

# Rules Tab

The **Rules** tab enables you to create rules that will automatically trigger in response to requests.

The **Rules** functionality provides options for testing changes to web code without updating the production server, reproducing previously captured bugs in SAZ files, and running website demos while you are offline.

The collaboration functionalities allow you to import and export a single rule or sets of rules, and share rules directly with other Fiddler Everywhere collaborators. Each rule has a different order priority and execution weight which can be easily controlled by promoting or demoting a rule.

The **Rules** tab is available as of version 2.0.0 and later, while previous versions have the **Auto Responder** tab. The capabilities of the functionalities are different&mdash;the **Rule Builder** can change what the servers will receive in terms of requests and responses and given that such rules are applied. The **Auto Responder** is only capable of mocking a server request or response and of modifying the local request or response. Therefore, not all rules change the server data.

![Rules tab](../images/livetraffic/rb/rules-all.png)

The **Rules** tab contains the following sections:

- **Rules Toolbar**&mdash;Provides options for sharing, manual import or export, and manual execution.
- **Rule Builder**&mdash;Creates new rules and edits existing ones.
- **Rules Queue**&mdash;A queue of created rules that are executed in the order of appearance from top to bottom. Each rule in the queue has its own toolbar with different rule-related functionalities.

## Built-In Logic

When executing each rule or running a rule on previously saved sessions, **Rules** follows a built-in logic depending on whether the session is actively captured (ongoing **Live Traffic** sessions).

**Live Traffic** and **Rules** stick to the following basic guidelines:

- The **Rules** main toggle is available only for the **Live Traffic** section.
- The **Unmatched Requests Passthrough** is applicable only for ongoing capture through the **Live Traffic** section.
-  If the **Rules** toggle is **ON**, and a selected rule toggle is **ON**, the rule executes for all of the inbound/outbound captured traffic (the **Live Traffic** section with enabled **Capturing**).
- If the **Rules** toggle is **ON**, and a selected rule toggle is **OFF**, the rule won't execute for all of the inbound/outbound captured traffic (the **Live Traffic** section with enabled **Capturing**).

**Saved Sessions** and **Rules** stick to the following basic guidelines:

- The **Rules** main toggle is not available for saved sessions (from the **Sessions** list). The toggle will be hidden when a saved session is loaded.
- **Execute** from the primary **Rules** toolbar will execute all currently selected rules. The result applies for all sessions that are matching the conditions of the rule. If multiple rules are selected, they will be executed in the order of appearance in the **Rules Queue**&mdash;this means that a rule can be overwritten by another rule that comes later in the queue. Some rules are also final, which means that no other rules in the queue will be executed after a final rule
- The **Execute** button from a selected rule toolbar will only execute the currently selected rule.

## Rules Toolbar

The main toolbar of the **Rules** comes with the following functionalities:

- **Add New Rule**&mdash;Opens the **Rule Builder** window to create a new rule.
- **Shared Ruleset**&mdash;Opens a list of the shared rulesets.
- **Share**&mdash;Opens the **Share** windows where you can enter a collaborator email to share all created rules.
- **Import**&mdash;Prompts a window for importing a FARX file.
- **Export**&mdash;Exports all created rules in a FARX file.
- **Execute**&mdash;Executes the selected rules for the captured traffic or for the loaded, saved sessions.

![Rules tab toolbar](../images/livetraffic/rb/rules-toolbar.png)

## Rule Builder

The **Rule Builder** interface enables you to create and edit rules. For each new rule, you need to enter a condition (previously known as a match rule) and an action (previously known as an action string). Fiddler Everywhere will undertake the action if the request URI matches the condition and if the rule is executed.

![Rule Builder Conditions](../images/livetraffic/rb/rules-re-conditions.png)

### Adding New Rules

To add a new rule:

1. Click the **Add New Rule** button from the main toolbar.
1. Add a new name for your rule in the **Rule Name** text field.
1. Set the **When** rule based on one of the following statements:
    - **all these conditions**&mdash;The rule will be applied when all conditions are true (logical TRUE).
    - **any of these conditions**&mdash;The rule will be applied when any conditions are true (logical OR).
    - **none of these conditions**&mdash;The rule will be applied when none of the conditions is true (logical FALSE).
1. Add one or more conditions. See the [conditions section](#conditions) for more details.
1. Add one or more actions. See the [actions section](#actions) for more details.
1. Click **Save** to close the **Rule Editor** and add the newly created rule to the **Rules Queue**.

When creating a new rules, take into consideration the following tips:

- Rules are applied in their order of appearance in the **Rules Queue**. To demote a rule in the queue, use the **Down Arrow**; to promote a rule on the queue, use the **Up Arrow**.
- You can export the current queue of rules [through the **Export** button]({%slug rules-general%}#export-rules) from the **Rules Queue** toolbar.
- To queue rules based on previously captured traffic, import a `.FARX` file [through the **Import** button]({%slug rules-general%}#import-rules).

### Conditions

The **Rule Builder** can add and use single or multiple conditions. The conditions are logical structures with different statements whose number can be between two and four. For more information, refer to the following list.

<table style="width: 100%">
    <colgroup>
       <col span="1" style="width: 14%;">
       <col span="1" style="width: 14%;">
       <col span="1" style="width: 14%;">
       <col span="1" style="width: 14%;">
       <col span="1" style="width: 44%;">
    </colgroup>
    <tbody>
        <tr>
            <td>Condition Value</td>
            <td>Field Options</td>
            <td>Field Options</td>
            <td>Field Options</td>
            <td>Usage Description</td>
        </tr>
        <tr>
            <td>Protocol</td>
            <td>HTTP or HTTPS</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Differentiate the traffic based on the used protocol (HTTP vs HTTPS).</td>
        </tr>
        <tr>
            <td>Host</td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Search for a specific keyword in the <b>Host</b> column.</td>
        </tr>
        <tr>
            <td>Status</td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Search for a specific keyword in the <b>Result</b> column.</td>
        </tr>
        <tr>
            <td>Method</td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Search for a specific keyword in the <b>Method</b> column.</td>
        </tr>
        <tr>
            <td>Process ID</td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Search for a specific keyword in the <b>Process ID</b> column.</td>
        </tr>
        <tr>
            <td>Client IP</td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Search for a specific keyword in the <b>Client IP</b> column.</td>
        </tr>
        <tr>
            <td>Remote IP</td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Search for a specific keyword in the <b>Remote IP</b> column.</td>
        </tr>
        <tr>
            <td>Body Size</td>
            <td>Number modifiers (compares bytes)</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Search for a specific value in the <b>Body Size</b> column.</td>
        </tr>
        <tr>
            <td>Duration</td>
            <td>Number modifiers (compares milliseconds)</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Search for a specific value in the <b>Duration</b> column.</td>
        </tr>
        <tr>
            <td>Comment</td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Search for a specific keyword in the <b>Comment</b> column.</td>
        </tr>
        <tr>
            <td>Request Body</td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Search for a specific keyword in the <b>Request Body</b> column.</td>
        </tr>
        <tr>
            <td>Request Header</td>
            <td>Header name</td>
            <td>String modifiers</td>
            <td>The search value </td>
            <td>Search for a specific keyword in the <b>explicitly mentioned Request header</b> column.</td>
        </tr>
        <tr>
            <td>Response Body</td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>n/a</td>
            <td>Search for a specific keyword in the <b>Response body</b>.</td>
        </tr>
        <tr>
            <td>Response Header</td>
            <td>Header name</td>
            <td>String modifiers</td>
            <td>The search value </td>
            <td>Search for a specific keyword in the <b>explicitly mentioned Response header</b> column.</td>
        </tr>
        <tr>
            <td>Cookie</td>
            <td>Cookie name</td>
            <td>String modifiers</td>
            <td>Search value</td>
            <td>Search for a specific keyword in the <b>explicitly mentioned Cookie</b>.</td>
        </tr>
        <tr>
            <td>Magic String</td>
            <td>The "magic string" content</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Uses [the legacy Fiddler Classic string literals and regular expressions](https://docs.telerik.com/fiddler/knowledge-base/autoresponder#matching-rules)</b>.</td>
        </tr>
    </tbody>
</table>

### Actions

When Fiddler Everywhere identifies a request which matches the **Conditions** of the rule, it automatically maps it to the **Action** set in the ruleset.

Apart from returning files or predefined responses, a rule can perform the following specific actions:

<table style="width: 100%">
    <colgroup>
       <col span="1" style="width: 14%;">
       <col span="1" style="width: 14%;">
       <col span="1" style="width: 14%;">
       <col span="1" style="width: 14%;">
       <col span="1" style="width: 44%;">
    </colgroup>
    <tbody>
        <tr>
            <td>Mark Session</td>
            <td>Choose background color</td>
            <td>Choose foreground color</td>
            <td>Sample Preview box</td>
            <td>Marks the session with selected colors.</td>
        </tr>
        <tr>
            <td>Update Request Header</td>
            <td>Header Name</td>
            <td>Value modifiers</td>
            <td>New value</td>
            <td>Uses the selected value modifier and the new value to update the request header.</td>
        </tr>
        <tr>
            <td>Update Response Header</td>
            <td>Header Name</td>
            <td>Value modifiers</td>
            <td>New value</td>
            <td>Uses the selected value modifier and the new value to update the response header.</td>
        </tr>
        <tr>
            <td>Update Request Body</td>
            <td>Value modifiers</td>
            <td>New value</td>
            <td>n/a</td>
            <td>Uses the selected value modifier and the new value to update the request body.</td>
        </tr>
        <tr>
            <td>Update Response Body</td>
            <td>Value modifiers</td>
            <td>New value</td>
            <td>n/a</td>
            <td>Uses the selected value modifier and the new value to update the response body.</td>
        </tr>
        <tr>
            <td>Update URL</td>
            <td>Value modifiers</td>
            <td>New value</td>
            <td>n/a</td>
            <td>Uses the selected value modifier and the new value to update the current URL.</td>
        </tr>
        <tr>
            <td>Update Query Params</td>
            <td>Query Parameter Key</td>
            <td>Value modifiers</td>
            <td>New value</td>
            <td>Uses the selected value modifier and the new value to update the query parameters.</td>
        </tr>
        <tr>
            <td>Update Request Cookies</td>
            <td>Cookie Key</td>
            <td>Value modifiers</td>
            <td>New value</td>
            <td>Uses the selected value modifier and the new value to update the cookie value.</td>
        </tr>
        <tr>
            <td>Update Response Cookies</td>
            <td>Cookie Key</td>
            <td>Value modifiers</td>
            <td>New value</td>
            <td>Uses the selected value modifier and the new value to update the cookie value.</td>
        </tr>
        <tr>
            <td>Predefined Response</td>
            <td>Drop-down with [predefined responses]({%slug fiddler-ar-actions%})</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Returns the selected predefined response.</td>
        </tr>
        <tr>
            <td>Manual Response</td>
            <td>Text field for creating manual response</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Returns the manually created response.</td>
        </tr>
        <tr>
            <td>Response File</td>
            <td>File Picker</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Returns the picked response file.</td>
        </tr>
        <tr>
            <td>Do not capture</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>When the <b>Do not capture</b> action is applied, no other actions will be executed.</td>
        </tr>
        <tr>
            <td>Delay Request</td>
            <td>Number value (milliseconds)</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Delays the request execution with "n" milliseconds.</td>
        </tr>
        <tr>
            <td>Graceful Close</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>This action will close the connection gracefully.</td>
        </tr>
        <tr>
            <td>Non Graceful Close</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>This action will close the connection forcefully.</td>
        </tr>
        <tr>
            <td>Magic String</td>
            <td>The "magic string" content</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Uses [the legacy Fiddler Classic string literals and regular expressions](https://docs.telerik.com/fiddler/knowledge-base/autoresponder#matching-rules).</td>
        </tr>
    </tbody>
</table>


## Rules Queue

The **Rules Queue**, also the __Queue Viewer__ or __Queue Rules Viewer__, is a queue of the created rules. The **Rules Queue** allows you to enable or disable, promote or denote, edit, export, import, share, and immediately execute the listed rules.

### Rules Priority

By default, the **Rules Queue** will list all created and imported rules based on their priority. Rules will be executed in the order of their appearance starting from the first one. When selecting specific rules and using the explicit **Execute** button, they will also be executed in the order they appear in the queue.

### Automatic Rules Execution for Live Traffic

To activate all enabled rules, that is a rule with an active toggle, use the **Rules** toggle from the main toolbar. Note that you have to turn the __Live Traffic__ switch to **Capturing** mode.

### Explicit Rules Execution

To explicitly execute rules on captured sessions, use the **Execute** button from the main toolbar. The **Execute** functionality is available for both the **Live Traffic** and saved sessions.

### Rule Options

Each different rule has its panel with the rule name, its toolbar with rule options, a list that previews the set conditions, and a list that previews the set actions.

The rule options allow you to further interact with the rule:

- The **Play** button executes the current rule only.
- The **Promote** up arrow promotes the selected rule in the **Rules Queue**.
- The **Demote** down arrow demotes the selected rule in the **Rules Queue**.
- The **Edit** button opens the **Rule Builder** to edit the rule.
- The **Duplicate** button creates a duplicate copy of the selected rule.
- The **Share** button shares the rule with other Fiddler Everywhere collaborators.
- The **Delete** button deletes the rule from the **Rules Queue**.
- The **Enable/Disable** toggle explicitly enables or disables the rule execution. It is available only for **Live Traffic** sessions and will be hidden when interacting with saved sessions.

![Rules tab toolbar](../images/livetraffic/rb/rules-individual-rule.png)

## Unmatched Requests Passthrough

The settings of the **Rules** feature provide options for executing a number of operations.

The __Unmatched Requests Passthrough__ option, which is available in **Settings** > **Rules** > **Unmatched Requests**, controls what happens when a session does not match any of the applied rules. When the option is enabled, the unmatched requests are sent to the server, usually without interference from the **Rules** tab. When the option is disabled (the checkbox is unchecked), Fiddler will generate a __404 Not Found__ response for any unconditional requests that are not matching the applied rules.

![Unmatched Requests Passthrough](../images/livetraffic/rb/rules-unmacthed-setting.png)

By default, the __Unmatch Requests Passthrough__ option is turned on. Turning it off means that all unmatched requests will start to fail with a __404 (Fiddled)__ response. For example, Fiddler generated a 404 response due to a request that is not matching the applied rules when the __Unmatch Requests Passthrough__ option is turned off.

![Unmatched Request](../images/livetraffic/rb/autoresponder-umatched-passnot.png)

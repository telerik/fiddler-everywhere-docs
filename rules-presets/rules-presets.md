---
title: Rules Presets
description: "Using Fiddler's rules presets to modify, mock, and filter HTTPS traffic."
slug: adv_techniques_fiddler
position: 1
previous_url: /rules-presets/filters/hide-request-content, /rules-presets/ui-modifications/mark-static-resources
---

# Rules Presets

The **Rules** functionality in Fiddler Everywhere is a powerful tool for tackling various web debugging tasks. The Fiddler team created rules presets (predefined rules) that you can use directly or with minimal adjustments to fit your test cases.

>tip A rule in Fiddler contains a **matching condition** (or set of conditions) that determines the target HTTP sessions and an **action** (or set of actions) that applies to them.

The rules presets were conditionally separated into the following groups:

- Tooling&mdash;A set of rules that enables you to change different behaviors in the client or server. For example:
   * [Bypassing CORS]({%slug adv_bypass_cors%})
   * [Blocking cookies]({%slug adv_block_cookies%})
   * [Disabling the browser's cache]({%slug adv_disable_cache%})
   * [Changing user-agent]({% slug adv_changing_user_agent %})

- Filters&mdash;A set of rules demonstrating how to show or hide targeted traffic. For example:
   * [Showing only localhost traffic]({%slug adv_show_only_localhost%})
   * [Showing only traffic from specific hosts]({%slug adv_show_only_specific_hosts%})
   * [Hiding traffic from specific hosts]({%slug adv_hide_specific_hosts%})
   * [Showing traffic only from specific processes]({%slug adv_show_only_specific_processes%})
   * [Hiding traffic from specific processes]({%slug adv_hide_specific_processes%})
   * [Hiding CONNECT tunnels]({%slug adv_hide_connect_tunnels%})

- Block lists and Allow lists&mdash;A set of rules demonstrating how to block or allow target traffic. For example:
    * [Blocking traffic to specific hosts]({%slug adv_block_traffic_hosts%})
    * [Allowing traffic only to specific hosts]({%slug adv_allow_traffic_hosts%})
    * [Blocking traffic from specific processes]({%slug adv_allow_traffic_processes%})
    * [Allowing traffic only to specific processes]({%slug adv_block_traffic_processes%})

- Map Traffic&mdash;A set of rules that demonstrates how to redirect traffic and to mock HTTP requests and responses. For example:
    * [Mapping to remote URLs]({%slug adv_map_remote_url%})
    * [Mapping to localhost addresses]({%slug adv_map_remote_localhost%})
    * [Mapping to a local file]({%slug adv_map_local_file%})
    * [Mapping to a manually created response]({%slug adv_map_local_manual%})
    * [Creating a temporary 307 redirect]({%slug adv_temp_redirect_307%})

- Modify Traffic&mdash;A set of rules demonstrating how to make custom modifications to sent HTTP requests and received HTTP responses. For example:
    * [Modifying the content of a response body]({%slug adv_modify_response_body%})
    * [Modifying image URLs]({%slug adv_modify_image_url%})

- UI Modifications&mdash;A set of rules demonstrating how to change the Fiddler's UI to fit your needs. For example:
    * [Highlighting long-living sessions]({%slug adv_marking_long_living_sessions%})
    * [Highlighting sessions that contain JavaScript or JSON]({%slug adv_marking_scripts_jsons%})

All rules presets are available as FARX files (Fiddler uses the FARX format to export and import a rule or set of rules) in
<a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules" target="_blank">the public GitHub repository of Fiddler Everywhere</a>.

The above rules are also available in Fiddler Everywhere through a group called **Default Templates**.

![the "Default Templates" group in Fiddler Everywhere](../images/rules/default-templates.png)

## See Also

- [Learn more about the Rules functionality in Fiddler Everywhere here...]({%slug modify-traffic-get-started%})
- [Learn how to use the Rules preset here...]({%slug how-to-use-fiddler-rules-to-modify-traffic%})
- [Learn how to organize and set the order of execution of multiple rules here...]({%slug rulesbuilder-get-started%})
- [Learn how to use the Fiddler breakpoints to pause, debug, and modify HTTPS traffic on the fly]({%slug rulesbuilder-breakpoints%})
- [Understanding the Matching Conditions and the Actions]({%slug fiddler-rules-actions%}#conditions)
- [Understanding the role of Final and Non-Final Actions]({%slug fiddler-rules-actions%}#final-and-non-final-actions)
---
title: Fiddler Rules Archives (FARX)
description: "FARX is the native archive format for saving rules created with Fiddler."
type: how-to
slug: fiddler-farx-format
publish: true
res_type: kb
---

The FARX abbreviation stands for Fiddler Rules Archive, the native format in which Fiddler applications (like Fiddler Everywhere and Fiddler Classic) can generate and export rules or groups of rules.

>tip The rules archives originated from Fiddler Classic, where they were used alongside the AutoResponder feature. Thus, the FARX abbreviation originally came from the Fiddler AutoResponder Archive. The Fiddler Everywhere application enhanced the AutoResponder feature through its **Rules** tab.

## Using FARX with Fiddler Everywhere

The Fiddler Everywhere application automatically recognizes the FARX extension as a native extension. Double-clicking on the FARX file immediately loads it as a new group in the **Rules** tab of Fiddler Everywhere.

Through the **Rules** toolbar, you can also manually import existing FARX files or export selected rules as FARX files.

![FARX import and export options](../images/kb/saz/farx-files-options.png)

## Importing Rules from Fiddler Classic

The import wizard in Fiddler Everywhere allows you to import AutoResponder rules from the Fiddler Classic application. The imported rules load it as a new group in the **Rules** tab of Fiddler Everywhere and can be exported at any point as *FARX* files.

[Learn more about the import wizard here..]({%slug fe-migrating-from-classic%}#importing-autoResponder-rules)

## Using SAZ to create FARX Rules

In addition to creating rules from scratch, you can use any saved SAZ archive and import it as a rule while using the  **Import** button within the **Rules** toolbar. 

![imporing SAZ as FARX file](../images/kb/saz/import-saz-as-farx.png)

As a result, the session contained in the SAZ archive will create a rule that mocks the traffic. For example, you can load any HTTPS Session with the GET method to produce a rule that will mock the HTTP Response and then make additional modifications per your requirements.

Once the rule is created, export it as a FARX file through the **Export** option in the **Rules** toolbar.

![Creating FARX rule from SAZ archive](../images/kb/saz/creating-rule-from-saz.png)

## Using Live Traffic to create FARX Rules

Apart from creating a rule from SAZ, you can also directly use captured HTTPS traffic to create a new mocking rule. Use the **Create New Rules** option from the context menu in the **Live Traffic** grid for that purpose.

![create new rules from captured traffic](../images/kb/saz/farx-create-new-rule-context-menu.png)

## Additional Resources

- [Moodify traffic with Fiddler's Rules]({%slug modify-traffic-get-started%})
- [Mocking traffic with Fiddler's Rules]({%slug mock-traffic-get-started%})
- [Replaying HTTPS Traffic with Fiddler's Rules]({%slug replaying-traffic%})
- [Rules tab options and structure]({%slug rulesbuilder-get-started%})
- [Creating and Using Breakpoints in Fiddler Everywhere]({%slug rulesbuilder-breakpoints%})
- [Understanding and Using Conditions and Actions in Fiddler's Rules]({%slug fiddler-rules-actions%})
- [Introducing the Rules tab (blog post)](https://www.telerik.com/blogs/introducing-new-rule-builder-fiddler-everywhere)


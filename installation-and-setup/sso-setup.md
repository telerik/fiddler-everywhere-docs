---
title: Single Sign-On (SSO) and SCIM Provisioning Setup
page_title: Single Sign-On (SSO) and SCIM Provisioning Setup - Installation | Fiddler Everywhere
description: "Learn how Fiddler Everywhere Enterprise customers can configure and use SAML-based single sign-on (SSO) for streamlined and secure authentication, and automate license seat management with SCIM provisioning."
slug: fe-sso-setup
position: 45
---

# Single Sign-On (SSO) and SCIM Provisioning Setup

The **Fiddler Everywhere Enterprise** license tier supports **single sign-on (SSO)**, allowing your organization's users to log in to Fiddler Everywhere with their existing identity provider (IdP) credentials instead of a separate Fiddler/Telerik username and password. SSO streamlines authentication and improves security by centralizing access control at the organization level.

>tip The [Fiddler Everywhere Enterprise subscription plan](https://www.telerik.com/purchase/fiddler) is required to enable SSO. For a comparison of the available license tiers, refer to the [Commercial Licenses]({%slug introduction%}#commercial-licenses) section of the Introduction article.

SSO is configured and managed centrally through your Telerik account and applies to all Telerik and Kendo UI products covered by an eligible **DevCraft Complete** or **DevCraft Ultimate** subscription license, including Fiddler Everywhere.

## Available SSO Setup Options

Two options are available for enabling SSO:

* **Self-guided SAML setup (recommended)**&mdash;Configure SSO directly from your Telerik account dashboard using **SAML**. This option currently supports the following identity providers:
    * Microsoft Entra ID (formerly Azure AD)
    * AD FS
    * Okta
* **Assisted setup for other providers**&mdash;If your organization uses a non-SAML identity provider, the Telerik support team can help you configure SSO through a guided setup process.

## Prerequisites

* An eligible **Fiddler Everywhere Enterprise** license as part of a **DevCraft Complete** or **DevCraft Ultimate** subscription.
* **License Holder** or **License Manager** permissions for the license in [Your Telerik Account](https://www.telerik.com/account/).
* Ownership (or IT team access) of the organization's domain to add DNS records for domain verification.
* Administrative access to the identity provider (Microsoft Entra ID, AD FS, Okta, or other) to register the SAML application.

## Setting Up SAML SSO (Self-Guided)

### Step 1: Configure SSO

1. Log in to [Your Telerik Account](https://www.telerik.com/account/).
1. If your license is eligible and you are a **License Holder** or **License Manager**, you will see a banner to **Configure SSO**. Alternatively, navigate to **Manage SSO** from your account settings.

### Step 2: Verify Your Domain

To confirm domain ownership:

1. Ask your IT team to add the provided challenge key to your domain's DNS records.
1. Wait until the key is visible via a DNS lookup.
1. Click **Verify Domain**.

>tip Domain verification progress is saved automatically, so you can leave and return later to complete the process.

### Step 3: Configure Your Identity Provider

Once the domain is verified:

1. Register the SAML configuration with your identity provider.
1. Enter the **Metadata URL**.
1. Map the required claims: email address, first name, and last name.
1. Verify that all URLs are mapped correctly.

>warning Incorrect claim mappings result in login failures. When using **Okta**, make sure to use **Name attributes** when setting identifiers and claims.

### Step 4: Test and Confirm

Test the login URL to verify that the configuration works. Once successful, you will receive a confirmation message that SSO is active.

>warning Do not skip this step. Only proceed to enabling SSO for a specific license after you see the **SSO Successfully Configured** confirmation message.

### Step 5: Enable SSO

1. Review and confirm that the correct domain is selected for provisioning.
1. Click **Enable SSO** to start the setup for the selected license.
1. Click **Apply Changes** to complete the process and enable SSO access for all applicable users associated with the license.

>tip To enable SSO for additional licenses later, return to the **Manage SSO** section in **Your Account** and repeat this step for any new or existing licenses.

## What Happens After SSO Is Enabled

* Only users assigned to the enabled license(s) with email addresses matching the verified domain will log in via SSO exclusively. Even if these users previously logged in to Fiddler Everywhere with a username and password, SSO becomes the only supported authentication method going forward.
* Affected users receive an email notification with login instructions.
* If a license expires, users can still sign in via SSO for **10 days**. After that period, they need to recover their password and sign in with a username and password.

You can also automate user access and license assignments through SCIM provisioning. For more information, see [SCIM Provisioning](#scim-provisioning) below.

## SCIM Provisioning

**System for Cross-domain Identity Management (SCIM)** complements SSO by automating how license access is assigned and maintained. Instead of managing users separately in your Telerik account, access becomes part of your organization's existing identity management processes: when developers are added to the right group in your identity provider (IdP), they automatically receive access to their license; when they are removed from the group, their access is updated accordingly.

SCIM is available for **DevCraft Complete** and **DevCraft Ultimate** subscription licenses, as well as **Fiddler Everywhere Enterprise** and **ThemeBuilder Enterprise** licenses.

>tip SCIM builds on top of SSO. [SSO must already be configured](#setting-up-saml-sso-self-guided) for your domain before you can enable SCIM.

Using SCIM helps organizations:

* Keep license access aligned with internal identity management systems.
* Eliminate manual seat management in the Telerik account.
* Reduce the risk of unused or outdated license assignments.

### Setting Up SCIM

1. **Enable SSO.** SCIM requires SSO to already be configured for your domain. If you have not enabled it yet, complete the [Setting Up SAML SSO](#setting-up-saml-sso-self-guided) steps above first.
1. **Open SCIM setup in your Telerik account.** Go to [Manage SSO and SCIM](https://www.telerik.com/account/sso-management) and click **SCIM Setup**.
1. **Generate your SCIM key.** In the SCIM Setup screen:
    * Copy the **SCIM URL** to use when configuring your identity provider.
    * Add a **Key Note** to help differentiate your keys later.
    * Click **Generate** to create the **SCIM API key**, copy it, and click **Finish Setup**.

    >warning Copy the SCIM API key immediately. Once setup is complete, you will no longer have access to the full key.

1. **Configure SCIM in your identity provider and create an IdP group.** In your IdP (for example, Okta or Microsoft Entra ID):
    * Add the Telerik SCIM URL and use the generated API key for authentication.
    * Enable provisioning and verify that **Create**, **Update**, and **Deactivate** user actions are enabled.
    * Create an IdP group with a clear, distinctive name that corresponds to your license (for example, "Telerik DCU Subscription"), add users to it, and include the group in the Telerik application's provisioning scope (for example, assign or push it) so that Telerik can discover it.

    >warning If your Telerik license already has seated users assigned, add those same users to the IdP group *before* enabling SCIM provisioning. Once SCIM provisioning is enabled, all users in the selected IdP group are synchronized with the associated license. If the corresponding IdP group is empty while users are already assigned to the license, the license assignments are updated to match the (empty) IdP group, removing all currently assigned developers. Verify that the IdP group membership matches the existing license assignments before enabling SCIM provisioning to avoid disruption.

1. **Enable provisioning and map your license to your IdP group.** In [Manage SSO & SCIM](https://www.telerik.com/account/sso-management):
    * Identify the DevCraft Complete, DevCraft Ultimate, Fiddler Everywhere Enterprise, or ThemeBuilder Enterprise license you want to enable SCIM for, and click **Configure**.
    * Enable **SCIM Provisioning**.
    * Once configured and enabled, select the corresponding group from the **IdP Group Name** dropdown.

    From this point on, access to the license is controlled through group membership in your identity provider.

1. **Verify user synchronization.** After completing setup, confirm the configuration from the [Licensed Users](https://www.telerik.com/account/manage-licensed-users/product-list) view:
    * Users added to the mapped IdP group start appearing automatically.
    * Existing users (with a Telerik account) show as **Assigned** and continue signing in via SSO as before.
    * New users (without a Telerik account) appear with an **Invited** status and receive an email invitation; they must complete account setup on first login.

### What Happens After SCIM Is Enabled

* User access is driven entirely by group membership in your identity provider; Telerik reflects those changes automatically.
* New users are guided through a simple onboarding experience at login.
* The Licensed Users view becomes read-only for the affected license, serving for visibility and reporting instead of manual seat management.
* There is no need to manually manage seats in Telerik - your identity provider handles all updates.

## Considerations

* SSO configuration is managed at the Telerik account level, not from within the Fiddler Everywhere application itself.
* If your organization also uses the Telerik NuGet server or Visual Studio Extensions (VSX), verify that all affected developers use [Telerik NuGet Keys](https://www.telerik.com/blogs/announcing-nuget-keys) instead of password-based authentication before enabling SSO, since password-based login to the NuGet feed stops working once SSO is enforced.
* For non-SAML identity providers, contact [Telerik support](https://www.telerik.com/account/support-tickets) to request assisted SSO setup.
* SCIM provisioning is optional and separate from SSO. You can use SSO without enabling SCIM, but SCIM requires SSO to already be configured.
* Enabling SCIM for a license whose assigned users are not already present in the mapped IdP group removes those users' access. Always reconcile group membership before enabling SCIM provisioning for a license.

## See Also

* [First Steps on Windows]({%slug first_steps_windows%})
* [First Steps on macOS]({%slug first_steps_macos%})
* [First Steps on Linux]({%slug first_steps_linux%})
* [Managed App Configuration]({%slug fe-restrict-policies%})
* [Security Highlights]({%slug fe-security-highlights%})
* [SSO Comes to DevCraft Complete and Ultimate Subscription Licenses (Telerik blog)](https://www.telerik.com/blogs/sso-telerik-kendo-ui-simpler-more-secure-access-account)
* [SCIM Provisioning for DevCraft Subscriptions (Telerik blog)](https://www.telerik.com/blogs/scim-provisioning-telerik-kendo-ui-licenses)

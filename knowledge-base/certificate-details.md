---
title: Inspecting Server Certificate
description: "Learn how to inspect server certificate details and catch potential certificate-related issues."
type: how-to
slug: fe-cert-details
publish: true
res_type: kb
---


## Environment

|   |   |
|---|---|
| Product   | Fiddler Everywhere
| Product Version | 3.2.0 and above  |

## Description

The Fiddler Everywhere client captures HTTPS traffic and obtains information about the used server certificates. How can I see details about each certificate and catch potential issues related to expiring certificates or certificate errors?

## Solution

Fiddler Everywhere version 3.2.0 and above contain [indicators and notifications]({%slug web-sessions-list%}#certificate-indicators) that show if a server certificate is valid, expiring, or causes errors.

Note that certificate information is available only for Live traffic and is not available for saved sessions from the [**Sessions** section]({%slug saved-sessions-tab%}) or for SAZ and other imported files.

### Extracting Certificate Details

Each session that successfully establishes secure connections over HTTPS stores information about the server certificate. Follow the steps to inspect the certificate full details:

- Open Fiddler Everywhere and capture the HTTPS session

- Go to the Response Inspector and click on the **Certificate Valid** note

    ![Valid certificate note](../images/livetraffic/certs/certficate-valid-note.png)

- Inspect the public certificate in detail. The prompt windows might contain the following sections:
    
    * **Issued to**&mdash;Contains public information in fields such as **Common Name, Organization, Locality, Province, Country**
    * **Issued by**&mdash;Contains public information in fields such as **Common Name, Organization, Country**
    * **Validity Period**&mdash;Contains **Issued on** and **Expires on** date fields.
    * **Public Key**&mdash;Contains information about the used **Algorithm**, **Key Size**, **Exponent**, and **Modulus**.
    * **Miscellaneous**&mdash;Different miscellaneous data like **Signature Algorithm**, **Serial Number**, and **Version**.
    * **Fingerprints**&mdash;Lists the **SHA-256** and ****SHA-1 fingerprints**.
    * **Extensions**&mdash;Addition information about the certificate ppolicies, constraints, usag, distribution points, etc.


    ![Certificate details](../images/livetraffic/certs/certficate-valid.png)

### Expiring Certificates

Fiddler Everywhere explicitly indicates if a server certificate is about to expire within the next 30 days. The indicator is in the form of an orange triangle on top of the session's list icon and as a **Certificate Expiring** warning note in the Response Inspector. 

![Expiring Certificate warning](../images/livetraffic/certs/certficate-expiriing-note.png)

You can still extract certificate data through the [certificate details window](#extracting-certificate-details).

>tip A trivial use-case for the expiring warning is to prepare the update of the certificates on your servers before their expiration. 


### Certificate Errors

Fiddler Everywhere will automatically respect server certificate errors (with **HTTPS** > **Ignore server certificate errors** disabled by default) and show error indicators. The certificate error indicator is in the form of a red triangle on top of the session's list icon and as a **Certificate Error** note in the Response Inspector. 

![Certificate Error](../images/livetraffic/certs/certficate-error-note.png)

If you change the certificate error handling (by enabling **HTTPS** > **Ignore server certificate errors**), then the note in the Response Inspector will remind you that the error is ignored.

![Certificate error ignored](../images/livetraffic/certs/certficate-error-ignored.png)

>tip A typical use case for the **Ignore server certificate errors** option will be certificate validation errors on macOS while trying to access `*.icloud.com` domains. Use the option to ignore the validation error and continue the debugging process.
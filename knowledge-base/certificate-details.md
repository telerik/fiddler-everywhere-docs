---
title: Inspecting Server Certificate
description: "Learn how to inspect server certificate details and catch potential certificate-related issues with Fiddler Everywhere MITM proxy."
type: how-to
slug: fe-cert-details
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |  Fiddler Everywhere  | 
| Product Version | 3.2.0 and above  |

## Description

The Fiddler Everywhere client captures HTTPS traffic and obtains information about the used server certificates. How can I see details about each certificate and catch potential issues related to expiring certificates or certificate errors?

## Solution

Fiddler Everywhere contain [indicators and notifications](slug://web-sessions-list#certificate-indicators) that show if a server certificate is valid, expiring, or causes errors.

Note that certificate information is available only for live traffic (ongoing capturing) and is not present for saved sessions from the **Snapshots** tree or for imported files.

### Extracting Certificate Details

Each session that successfully establishes secure connections over HTTPS stores information about the server certificate. Follow the steps to inspect the certificate's full details:

- Open Fiddler Everywhere and capture the HTTPS session

- Go to the Response Inspector and click on the **Certificate Valid** note

    ![Valid certificate note](../images/livetraffic/certs/certficate-valid-note.png)

- Inspect the public certificate in detail. The prompt windows might contain the following sections:
    
    * **Issued to**&mdash;Contains public information in fields such as **Common Name, Organization, Locality, Province, Country**
    * **Issued by**&mdash;Contains public information in fields such as **Common Name, Organization, Country**
    * **Validity Period**&mdash;Contains **Issued on** and **Expires on** date fields.
    * **Public Key**&mdash;Contains information about the used **Algorithm**, **Key Size**, **Exponent**, and **Modulus**.
    * **Miscellaneous**&mdash;Different miscellaneous data like **Signature Algorithm**, **Serial Number**, and **Version**.
    * **Fingerprints**&mdash;Lists the **SHA-256** and **SHA-1 fingerprints**.
    * **Extensions**&mdash;Addition information about the certificate policies, constraints, usage, distribution points, etc.


    ![Certificate details](../images/livetraffic/certs/certficate-valid.png)

### Expiring Certificates

Fiddler Everywhere explicitly indicates if a server certificate is about to expire within the next 30 days. The indicator is an orange triangle on top of the session's list icon and as a **Certificate Expiring** warning note in the Response Inspector. 

![Expiring Certificate warning](../images/livetraffic/certs/certficate-expiriing-note.png)

You can still extract certificate data through the [certificate details window](#extracting-certificate-details).

>tip A trivial use-case for the expiring warning is to prepare the update of the certificates on your servers before expiration. 


### Certificate Errors

Fiddler Everywhere will automatically detect server certificate errors and show error indicators. The certificate error indicator is a red triangle on the session's list icon and as a **Certificate Error** note in the Response Inspector. 

![Certificate Error](../images/livetraffic/certs/certficate-error-note.png)

If you change the certificate error handling (by enabling **HTTPS** > **Ignore server certificate errors**), the note in the Response Inspector will remind you that the error is ignored.

![Certificate error ignored](../images/livetraffic/certs/certficate-error-ignored.png)

>tip A typical use case for the **Ignore server certificate errors** option will be certificate validation errors on macOS while trying to access `*.icloud.com` domains. Use the option to ignore the validation error and continue the debugging process.


### Ignoring Sever Certificate Errors

Fiddler Everywhere provides a way to quickly go around any server certificate error through the **Settings** > **HTTPS** > **Ignore server certificate errors (unsafe)** option.

All server certificate errors will be ignored when the **Ignore server certificate errors** checkbox is active, and no endpoints are added.

>important The **Ignore server certificate errors** option is considered **unsafe** and should be used cautiously! It sets if Fiddler Everywhere should warn you when an HTTPS server has presented a certificate that did not validate. You should not check this box when surfing the Internet due to the possibility of [spoofing attack](https://en.wikipedia.org/wiki/Spoofing_attack).

Fiddler Everywhere allows adding specific endpoints to the list of trusted servers to minimize the security risk of automatically ignoring all server certificates. You can add custom endpoints to the list as follows: 

- Upon opening a page that returns a server certificate error, a custom Fiddler page will present the possibility of automatically adding the endpoint to the ignore list. This option works only when **Ignore server certificate errors** is inactive or active but not with an empty list.

    ![When Fiddler works, a page with expired certificate loads the Fiddler's insecure warning](../images/livetraffic/certs/browser-fiddler-insecure-page.png)

- Tick the **Settings** > **HTTPS** > **Ignore server certificate errors (unsafe)** checkbox and add one or multiple endpoints separated by a semicolon.

    ![Add servers to the ignore list through the Fiddler's settings](../images/livetraffic/certs/ignore-certificate-errors-settings.png)

>important Adding new endpoints to the ignore list works only for newly established connections. You might need to restart your client app (e.g., the browser) to force close an existing TCP connection.


### Certificate Details in SAZ files

Fiddler Everywhere version 4.2.0 extended the SAZ format, the native format used for saving captured session snapshots (local saves, cloud saved, or manual SAZ exports). Consider the following when working with saved sessions snapshots and certificate details: 

- (Fiddler Everywhere **version 4.2.0 and above**) All sessions saved locally, in the cloud, or exported as SAZ files will contain the certificate details (valid when the capturing occurred).

- (Fiddler Everywhere **version 4.1.2 and below**) All sessions saved locally, in the cloud, or exported as SAZ files won't contain the certificate details.


#### Deep-Dive with the SAZ format and the Certificate Details

The SAZ file (translates as **Session Archive ZIP** but is also known as **Fiddler Session Archive** or just as **Fiddler Archive**) in its nature is an archive that contains a snapshot of all saved sessions where each session is represented with three different text files.

Inside a SAZ file, you will find:

- [Content_Types.xml] file&mdash;A metadata file that specifies a few MIME types so the archive can be read by System.IO.Packaging or other clients that support the Open Packaging Conventions.
- a **raw** folder&mdash;Contains the files representing each captured session. Inside the **raw** folder, you can find three or four files for each session.

    * **sessid#_c.txt**&mdash;File containing the raw client request.
    * **sessid#_s.txt**&mdash;File containing the raw server request.
    * **sessid#_m.xml**&mdash;File containing metadata including session flags, socket reuse information, etc.
    * (optional) sessid#_w.txt&mdash;File that contains WebSocket messages.

With version 4.2.0 and above, the XML file (**sessid#_m.xml**) now contains an element called **CertificateChainInfo**, which allows you to load and inspect client and server certificate details for each saved session. The updated SAZ format is backward-compatible with older versions of Fiddler Everywhere and Fiddler Classic.
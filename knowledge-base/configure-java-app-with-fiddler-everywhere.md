---
title: Configuring Java Applications alongside Fiddler Everywhere
description: "Learn how to configure a Java application to send traffic to the Fiddler Everywhere proxy and use the Fiddler root trust certificate for secure traffic."
type: how-to
slug: configure-java-fiddler-everywhere
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| 3rd-party tool| Java Virtual Machine, Java applications |

## Description

The Java Virtual Machine (JVM) has its proxy configuration settings. How can I export the Fiddler trust certificate for handling HTTPS traffic and set up the JVM to respect the Fiddler proxy?

## Solution

1. [Export the Fiddler Everywhere root certificate]({%slug decrypt-https-traffic%}).
1. Create a JVM keystore by using the exported certificate and [the keytool application](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/keytool.html). Note that you will need admin access rights to use the keytool application.

  The following command prompts you to create a password and outputs `FiddlerKeystoreFile` in the pre-set export path.

    ```Java
    %JAVA_HOME%\bin\keytool.exe -import -file <path-to-exported-certificate>\FiddlerRootCertificate.crt -keystore <your-export-path>\FiddlerKeystoreFile -alias Fiddler
    ```

1. Configure the java application to use the Fiddler proxy and certificate through `jre`.

    ```
    jre -DproxySet=true -DproxyHost=127.0.0.1 -DproxyPort=8866 -Djavax.net.ssl.trustStore=<your-export-path>\FiddlerKeystoreFile -Djavax.net.ssl.trustStorePassword=<Keystore Password>
    ```

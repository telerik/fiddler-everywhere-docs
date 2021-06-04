---
title: Configuring Java application alongside Fiddler Everywhere
description: Configure Java application to send traffic to the Fiddler Everywhere proxy and use the Fiddler root trust certificate for secure traffic.
type: how-to
slug: configure-java-fiddler-everywhere
publish: true
res_type: kb
---

#### Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| 3rd-party tool| Java Virtual Machine, Java applications |

#### Description

The Java Virtual Machine has its own proxy configuration settings. This article guides how to export the Fiddler trust certificate (for HTTPS) and the steps needed to set up the JVM to respect the Fiddler proxy.

## Solution

- [Export the Fiddler Everywhere root certificate]({%slug decrypt-https-traffic%}#export-root-certificate)
- Create a JVM keystore using the exported certificate while using [the **keytool** application](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/keytool.html). Note that you will need admin access rights to use the keytool application. The command below prompts for password creation and then outputs **FiddlerKeystoreFile** in the pre-set export path.
```Java
%JAVA_HOME%\bin\keytool.exe -import -file <path-to-exported-certificate>\FiddlerRootCertificate.crt -keystore <your-export-path>\FiddlerKeystoreFile -alias Fiddler
```
- Configure the java application to use the Fiddler proxy and certificate through **jre**
```
jre -DproxySet=true -DproxyHost=127.0.0.1 -DproxyPort=8866 -Djavax.net.ssl.trustStore=<your-export-path>\FiddlerKeystoreFile -Djavax.net.ssl.trustStorePassword=<Keystore Password>
```
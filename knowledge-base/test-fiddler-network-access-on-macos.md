---
title: Troubleshooting macOS Proxy Settings and Network Access
description: "Learn how to use a custom-made Shell script to troubleshoot the network access of the Fiddler Everywhere web-debugging client."
type: how-to
slug: fiddler-test-network-access-macos
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |  Fiddler Everywhere  |
| Product Version | 1.6.0 and above  |
|---|---|
| Operating System  | macOS |

## Description

In some corner cases, the Fiddler Everywhere client might not access the macOS network settings&mdash;for example, due to administrative restrictions, firewall settings, and so on. How can I manually test the access to the active network adapter and its proxy settings on macOS?

## Solution

To handle the issue, first access the name of the active network adapter and then further troubleshoot the proxy settings.

### Accessing the Active Network Adapter Name

The Fiddler Everywhere client will use the name of the active network adapter (for example, something like **Wi-FI**) to set the Fiddler proxy. You can get the name manually by creating and executing a [Shell script](https://en.wikipedia.org/wiki/Shell_script):

1. Create a Shell file through your preferred IDE. For demonstration purposes, name this file as `test.sh`.

2. In the newly created `test.sh` file, copy and paste the following Shell script.

    ```Shell
    services=$(networksetup -listnetworkserviceorder | sed '1d;/(\*)/,+2d;s/^([^)]*) \(.*\)$/\1FIDDLER_SEPARATOR/g;s/^.*Device: \([^)]*\))/\1\t/g;/^$/d' | sed 'N;s/\n//')

    while read line; do
        sname=$(echo "$line" | awk -F  "FIDDLER_SEPARATOR" '{print $1}')
        sdev=$(echo "$line" | awk -F  "FIDDLER_SEPARATOR" '{print $2}')
        if [ -n "$sdev" ]; then
            ifconfig "$sdev" 2>/dev/null | grep 'status: active' > /dev/null 2>&1
            rc="$?"
            if [ "$rc" -eq 0 ]; then
                currentservice="$sname"
                echo "$currentservice"
                break
            fi
        fi
    done <<< "$(echo "$services")"

    if ! [ -n "$currentservice" ]; then
        >&2 echo "Could not find active network service for which to check the proxy configuration"
        >&2 echo "$services"
        >&2 networksetup -listnetworkserviceorder
        exit 1
    fi


    networksetup -getproxyautodiscovery "$currentservice"
    networksetup -getautoproxyurl "$currentservice"
    networksetup -getproxybypassdomains "$currentservice"
    networksetup -getwebproxy "$currentservice"
    networksetup -getsecurewebproxy "$currentservice"
    networksetup -getsocksfirewallproxy "$currentservice"
    ```

3. Execute the `test.sh` through the terminal.

    ```Shell
    sh <path-to-script>/test.sh
    ```



Once you can successfully run the above script, you can use its output to troubleshoot possible issues with the active network adapter discovery.

The output from the above commands will vary depending on the OS network settings that are in place. You can use the output to troubleshoot your OS network settings with and without the Fiddler Everywhere capturing mode. For example, when Fiddler Everywhere is properly set to capture traffic and the capturing mode is ON, the **getsecurewebproxy** option will return the Fiddler proxy. By default, the Fiddler proxy is `127.0.0.1:8866`.

The following example demonstrates a sample output for the `networksetup -getwebproxy <adapter-name>` command when no proxy is set.

```Shell
Enabled: No
Server:
Port: 0
Authenticated Proxy Enabled: 0
```

The following example demonstrates a sample output for the `networksetup -getwebproxy <adapter-name>` command when the Fiddler Everywhere proxy is successfully set.

```Shell
Enabled: Yes
Server: 127.0.0.1
Port: 8866
Authenticated Proxy Enabled: 0
```

>tip On some occasions, you might have more than one active network adapters. Use the command `networksetup -listnetworkserviceorder` to get the names of all active adapters and then use the adapter name to troubleshoot the Fiddler Everywhere proxy settings.

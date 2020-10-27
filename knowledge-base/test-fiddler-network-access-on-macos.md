---
title: Troubleshoot macOS Proxy Settings Access
type: how-to
slug: fiddler-test-network-access-macos
tags: Fiddler Everywhere macOS, troubleshooting Fiddler Everywhere, proxy settings issues, Fiddler accessing proxy settings
publish: true
res_type: kb
---


#### Environment

|   |   |
|---|---|
| Product  | Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |
|---|---|
| Operating System  | macOS |

#### Description

In some corner cases, the Fiddler Everywhere client might not access the macOS network settings (for example, due to administrative restrictions, firewall settings, etc.). The technique demonstrated in this article will allow you to manually test the access to the active network adapter and its proxy settings on macOS.

## Accessing the Active Network Adapter Name

The Fiddler Everywhere client will use the name of the active network adapter (for example, something like **_Wi-FI_**) to set the Fiddler proxy. You can get the name manually by creating and executing a [Shell script](https://en.wikipedia.org/wiki/Shell_script).

1. Create a Shell file via your preferred IDE. For demonstration purposes, we will name ours **_test.sh_**

2. In the newly created **_test.sh_** copy and paste the following Shell script.
    ```Shell
    services=$(networksetup -listnetworkserviceorder | sed '1d;s/^([^)]*) \(.*\)$/\1FIDDLER_SEPARATOR/g;s/^.*Device: \([^)]*\))/\1/g;/^$/d' | sed 'N;s/\n//')

    while read line; do
        sname=$(echo $line | awk -F  "FIDDLER_SEPARATOR" '{print $1}')
        sdev=$(echo $line | awk -F  "FIDDLER_SEPARATOR" '{print $2}')
        if [ -n "$sdev" ]; then
            ifconfig $sdev 2>/dev/null | grep 'status: active' > /dev/null 2>&1
            rc="$?"
            if [ "$rc" -eq 0 ]; then
                currentservice="$sname"
                echo "$currentservice"
                break
            fi
        fi
    done <<< "$(echo "$services")"

    if ! [ -n "$currentservice" ]; then
        >&2 echo "Could not find current service"
        exit 1
    fi
    ```

3. Execute the **_test.sh_** via the terminal
    ```Console
    sh <path-to-script>/shell.sh
    ```

4. On success, as an output, you should see the name of the active network adapter (for demonstration purposes, we will assume the result is **_Wi-Fi_**). Not being able to get the active network adapter name successfully indicates system restrictions or wrongful network configuration.

_An example output from executing test.sh_
```
Wi-Fi
```

Refer to the next section on how to use this name for further troubleshooting.

## Troubleshooting the Proxy Settings

Once we can successfully get the active network adapter's name, we can use it to access the OS network settings. Use the commands below to achieve the above - note that for demonstration purposes, we are assuming that the adapter name is **_Wi-Fi_**.

```Console
networksetup -getproxyautodiscovery "Wi-Fi"
networksetup -getautoproxyurl "Wi-Fi"
networksetup -getproxybypassdomains "Wi-Fi"
networksetup -getwebproxy "Wi-Fi"
networksetup -getsecurewebproxy "Wi-Fi"
networksetup -getftpproxy "Wi-Fi"
networksetup -getsocksfirewallproxy "Wi-Fi"
```

The output from the above commands will vary depending on the OS network settings that are in place. You can use the output to troubleshoot your OS network settings with and without Fiddler Everywhere capturing mode. For example, when FIddler Everywhere is properly set to capture traffic and capturing mode is ON, the **_getsecurewebproxy_** option should returng the Fiddler proxy (by default this is **_127.0.0.1:8866_**).

_An example output for the **networksetup -getwebproxy <adapter-name>** command when there is no Web proxy being set_
```Console
Enabled: No
Server: 
Port: 0
Authenticated Proxy Enabled: 0
```

_An example output for the **networksetup -getwebproxy <adapter-name>** command when the Fiddler Everywhere proxy is successfully set_
```Console
Enabled: Yes
Server: 127.0.0.1
Port: 8866
Authenticated Proxy Enabled: 0
```

>tip On some occasions, there might be more than one active network adapters. Use the command `networksetup -listnetworkserviceorder` to get the names of all active adapters and then use the adapter's name to troubleshoot the Fiddler Everywhere proxy settings. 
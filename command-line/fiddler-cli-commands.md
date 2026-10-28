---
title: Command Reference
page_title: Fiddler CLI Command Reference - Command Line | Fiddler Everywhere
description: "Reference of the built-in fiddler-cli commands in Fiddler Everywhere: capture control, window control, session export, breakpoints, temporary URL replacements, and host overrides."
slug: fiddler-cli-commands
publish: true
position: 2
---

# Fiddler CLI Command Reference

This article lists the built-in commands of the [Fiddler CLI](slug://fiddler-cli) and shows how to use them.

Commands are case-insensitive. Arguments are positional&mdash;pass values directly after the command name, without option names.

## Commands

| Command | Description | Example |
|:--------|:------------|:--------|
| `start` | Starts capturing traffic through the system proxy. | `fiddler-cli start` |
| `stop` | Stops capturing traffic through the system proxy. | `fiddler-cli stop` |
| `status` | Shows the application and proxy status. | `fiddler-cli status` |
| `show` | Shows and focuses the Fiddler Everywhere main window. | `fiddler-cli show` |
| `hide` | Hides the Fiddler Everywhere main window. | `fiddler-cli hide` |
| `clear` or `cls` | Deletes the completed live sessions and keeps the active (still running) sessions. | `fiddler-cli clear` |
| `dump [directory]` | Exports the live sessions to a SAZ file, and then clears them. Saves the file to the Desktop when you omit the directory. | `fiddler-cli dump ./captures` |
| `bpu [text]` | Breaks before requests whose URL contains the text. Omit the text to clear the breakpoint. | `fiddler-cli bpu example.com/api` |
| `bpv [method]` or `bpm [method]` | Breaks before requests with the specified HTTP method. Omit the method to clear the breakpoint. | `fiddler-cli bpm POST` |
| `bps [status]` | Breaks before responses with the specified HTTP status code (`100`&ndash;`599`). Omit the status to clear the breakpoint. | `fiddler-cli bps 500` |
| `bpafter [text]` or `bpa [text]` | Breaks before responses whose request URL contains the text. Omit the text to clear the breakpoint. | `fiddler-cli bpa example.com/api` |
| `g` or `go` | Resumes all sessions paused at breakpoints. | `fiddler-cli go` |
| `urlreplace <find> <replace>` | Adds a temporary URL replacement. Run without values to clear it. | `fiddler-cli urlreplace example.com staging.example.com` |
| `overridehost <host> <target>` | Adds a temporary host mapping. Run without values to clear all host mappings added through the CLI. | `fiddler-cli overridehost example.com 127.0.0.1:8080` |
| `help`, `--help`, `-h`, or no command | Lists the available commands. | `fiddler-cli help` |

Any other command name is forwarded to the `OnExecAction` handler of the active script. For details, see [Custom CLI Commands](slug://fiddler-script-cli-commands).

## Capture and Application Commands

### start and stop

The `start` command enables the Fiddler Everywhere system proxy and starts capturing traffic. The `stop` command disables the system proxy.

```sh
fiddler-cli start
```

```txt
Proxy enabled.
```

If the proxy is already in the requested state, the CLI reports `Proxy is already enabled.` or `Proxy is already disabled.`. If Fiddler Everywhere cannot change the proxy state, the command fails with the `proxy_unavailable` error.

### status

The `status` command reports the readiness of Fiddler Everywhere. It doesn't require a signed-in user, so you can use it to check whether the application is ready to accept other commands.

```sh
fiddler-cli status
```

The output contains the following values (`True` or `False`):

| Value | Description |
|:------|:------------|
| `processRunning` | The Fiddler Everywhere process is running. |
| `backendAvailable` | The application services are initialized. |
| `userSignedIn` | A user is signed in. |
| `licensePolicyOk` | The signed-in account has a valid license. |
| `proxyAvailable` | The proxy is available. |
| `scriptingAvailable` | Scripting is available for custom commands. |
| `rulesAvailable` | Rules are available. |
| `proxyAttached` | Fiddler Everywhere is set as the system proxy (traffic capturing is on). |

<!-- TODO verify: Confirm the exact semantics of proxyAvailable, scriptingAvailable, and rulesAvailable with the development team. -->
<!-- TODO screenshot: Terminal output of "fiddler-cli status" -->

### show and hide

The `show` command shows and focuses the Fiddler Everywhere main window. The `hide` command hides it. Use `show` after starting Fiddler Everywhere with the `--hidden` option.

```sh
fiddler-cli --hidden start
fiddler-cli show
```

## Session Commands

### clear and cls

The `clear` command (or its alias `cls`) deletes the completed sessions from the **Live Traffic** list. Sessions that are still in progress are kept.

```sh
fiddler-cli clear
```

```txt
Cleared 42 completed live session(s); active sessions were kept.
```

### dump

The `dump` command exports the live sessions to a SAZ file and then clears the exported sessions. The CLI creates a uniquely named file, for example, `quickexec-dump-20250101-093000123-<id>.saz`, so running the command repeatedly never overwrites previous exports.

- When you omit the directory, the CLI saves the file to your Desktop.
- A relative directory is resolved from the current working directory of the terminal.
- The directory must already exist. Otherwise, the command fails with the `invalid_arguments` error.
- Fiddler Everywhere clears the exported sessions only after the export succeeds. If the export fails, the sessions remain in the **Live Traffic** list.

The command prints the full path to the created file:

```txt
Live sessions exported to '/Users/jane/Desktop/quickexec-dump-20250101-093000123-....saz' and cleared.
path: /Users/jane/Desktop/quickexec-dump-20250101-093000123-....saz
```

If there are no live sessions, the CLI prints `No live sessions to dump.`.

The following examples export the sessions to a specific directory:

```powershell
# Windows PowerShell or Command Prompt
fiddler-cli dump C:\captures
fiddler-cli dump "C:\Users\Jane\My Captures"
fiddler-cli dump .\captures
```

```sh
# macOS and Linux
fiddler-cli dump ~/captures
fiddler-cli dump "$HOME/My Captures"
fiddler-cli dump ./captures
```

You can open the exported SAZ files in Fiddler Everywhere or Fiddler Classic. For more information, see [Exporting and Importing Sessions](slug://fiddler-export-and-import).

>tip Only one `clear`, `cls`, or `dump` command can run at a time. If you run another one while the previous command is still in progress, the CLI reports the `operation_in_progress` error.

## Breakpoint Commands

Breakpoint commands pause matching sessions so that you can inspect and modify them in Fiddler Everywhere before they continue. For more information about breakpoints, see [Breakpoints](slug://rulesbuilder-breakpoints).

| Command | Pauses | Matches when |
|:--------|:-------|:-------------|
| `bpu <text>` | Requests, before they are sent to the server | The request URL contains the text. |
| `bpv <method>` or `bpm <method>` | Requests, before they are sent to the server | The request method equals the value, for example, `POST`. |
| `bps <status>` | Responses, before they are returned to the client | The response status code equals the value. |
| `bpafter <text>` or `bpa <text>` | Responses, before they are returned to the client | The request URL contains the text. |

Each breakpoint command holds a single value. Running the command again with a new value replaces the previous one. Running the command without a value clears that breakpoint. For example:

```sh
fiddler-cli bpu example.com/api   # Break on requests to example.com/api
fiddler-cli bpu example.com/auth  # Replace the URL condition
fiddler-cli bpu                   # Clear the URL breakpoint
```

<!-- TODO verify: Confirm whether the bpu/bpafter text match and the bpv/bpm method match are case-sensitive. -->

The `g` command (or its alias `go`) resumes all sessions that are currently paused at a breakpoint:

```txt
Resumed 3 paused session(s).
```

### Example: Debugging an API Call

The following flow pauses the responses of failing API calls, lets you inspect them, and then cleans up:

1. Start capturing and set a response breakpoint for server errors:

    ```sh
    fiddler-cli start
    fiddler-cli bps 500
    ```

1. Reproduce the problem in your application. Fiddler Everywhere pauses each response with status code `500` so that you can inspect or modify it in the **Live Traffic** list.

1. Resume the paused sessions:

    ```sh
    fiddler-cli go
    ```

1. Clear the breakpoint and export the captured sessions for later analysis:

    ```sh
    fiddler-cli bps
    fiddler-cli dump
    ```

## Temporary Rule Commands

The `urlreplace` and `overridehost` commands create temporary rules that modify the captured traffic. The temporary rules and the breakpoints that you set through the CLI behave as follows:

- They are stored in memory and are lost when you close Fiddler Everywhere.
- They apply even when the **Rules** switch in the **Rules** tab is off.
- They are evaluated before the rules defined in the **Rules** tab and take priority over them.
- They don't appear in, and don't change, the rules saved in the **Rules** tab.

### urlreplace

The `urlreplace <find> <replace>` command replaces the `find` text with the `replace` text in the URL of each future request that contains `find`. The match is case-sensitive.

```sh
# Send production API calls to a staging server
fiddler-cli urlreplace api.example.com api.staging.example.com
```

The CLI holds a single URL replacement. Running the command with new values replaces the previous replacement. To remove the text from URLs, pass an empty string as the replacement value:

```sh
fiddler-cli urlreplace "/v2/" ""
```

To clear the URL replacement, run the command without values:

```sh
fiddler-cli urlreplace
```

### overridehost

The `overridehost <host> <target>` command routes the requests for `host` to `target`. Both values must be a hostname, an IP address, or a `host:port` pair.

```sh
# Route example.com to a local development server
fiddler-cli overridehost example.com localhost:5000
```

Unlike `urlreplace`, you can add multiple host overrides&mdash;each call adds a new mapping. For HTTPS requests, Fiddler Everywhere ignores the certificate name mismatch that the redirection causes.

To clear all host overrides added through the CLI, run the command without values:

```sh
fiddler-cli overridehost
```

```txt
Cleared 2 QuickExec host override(s).
```

## See Also

- [Fiddler CLI (QuickExec)](slug://fiddler-cli)
- [Custom CLI Commands](slug://fiddler-script-cli-commands)
- [Modifying Traffic with Rules](slug://modify-traffic-get-started)
- [Exporting and Importing Sessions](slug://fiddler-export-and-import)

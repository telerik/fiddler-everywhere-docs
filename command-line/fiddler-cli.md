---
title: Fiddler CLI (QuickExec)
page_title: Fiddler CLI (QuickExec) - Command Line | Fiddler Everywhere
description: "Control Fiddler Everywhere from a terminal with the bundled fiddler-cli command. Start and stop capture, manage live sessions, set breakpoints and temporary rules, and run custom script commands on Windows, macOS, and Linux."
slug: fiddler-cli
publish: true
position: 1
---

# Fiddler CLI (QuickExec)

**QuickExec** lets you control Fiddler Everywhere from a terminal through the bundled `fiddler-cli` command. Use it to automate repetitive tasks or to drive Fiddler Everywhere from scripts and build pipelines on your machine. With `fiddler-cli`, you can:

- Start and stop traffic capturing.
- Show, hide, and query the status of the Fiddler Everywhere application.
- Clear live sessions or export them to a SAZ file.
- Pause matching requests and responses with breakpoints, and resume them.
- Apply temporary URL replacements and host overrides.
- Run custom commands that you implement in a [C# script](slug://fiddler-script-cli-commands).

All commands use the following syntax:

```sh
fiddler-cli [--hidden] <command> [arguments]
```

The command names follow the Fiddler Classic QuickExec shorthand syntax&mdash;for example, `bpu`, `bpafter`, `urlreplace`, and `go`. For the full list of commands, see the [Fiddler CLI Command Reference](slug://fiddler-cli-commands).

## Prerequisites

To use the Fiddler CLI, you need:

- Fiddler Everywhere installed on Windows, macOS, or Linux (AppImage). The CLI is bundled with the application and is self-contained, so you don't need to install a separate .NET runtime.
- A Fiddler Everywhere **Pro** or **Enterprise** subscription tier.
- A signed-in Fiddler account with a valid license for most commands. For details, see [Restrictions](#restrictions).
- The **Enable Fiddler CLI** option turned on in **Settings** > **Connections**. The option is enabled by default.

## Installing the CLI Command

The Fiddler Everywhere installation registers the `fiddler-cli` command automatically. The registration depends on the operating system.

### Windows

The Fiddler Everywhere installer adds the CLI folder (`<installation folder>\resources\app.asar.unpacked\out\cli`) to the `PATH` environment variable of the current user. Open a new terminal window after the installation so that the updated `PATH` takes effect, and then run:

```powershell
fiddler-cli help
```

Uninstalling Fiddler Everywhere removes the CLI folder from the user's `PATH`.

<!-- TODO verify: For per-machine installations, the installer updates only the PATH of the user who runs the installer (HKCU). Confirm whether other users on the same machine get the command registered. -->

>tip If the installer cannot update the `PATH` safely (for example, when the existing `PATH` value is too long), the installation completes without registering the command. In that case, add the CLI folder to your `PATH` manually.

### macOS

- **PKG installer**&mdash;The installation creates the `/usr/local/bin/fiddler-cli` symbolic link automatically. The installer does not replace an existing regular file at that location.
- **DMG or ZIP**&mdash;The first time the Fiddler Everywhere window opens, the application asks **Install the fiddler-cli command?**. Click **Install** and enter your administrator password to create the `/usr/local/bin/fiddler-cli` symbolic link. Fiddler Everywhere shows this prompt only once, even if you click **Not now**.

<!-- TODO screenshot: macOS prompt "Install the fiddler-cli command?" with the Install and Not now buttons -->

If you skipped the prompt or want to register the command later, create the symbolic link manually:

```sh
sudo mkdir -p /usr/local/bin
sudo ln -s "/Applications/Fiddler Everywhere.app/Contents/Resources/app.asar.unpacked/out/cli/fiddler-cli" /usr/local/bin/fiddler-cli
```

### Linux

Each time Fiddler Everywhere starts, it copies the CLI to `~/.fiddler/bin/cli` and creates the `~/.local/bin/fiddler-cli` symbolic link. Start Fiddler Everywhere at least once after installing or updating the AppImage to register the command.

If `~/.local/bin` is not part of your `PATH`, **Settings** > **Connections** displays the full path to the command. Either run the command by its full path or add `~/.local/bin` to your `PATH`. For example, for Bash:

```sh
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

>important On Linux, the Fiddler CLI starts Fiddler Everywhere through `/usr/bin/setsid`. If `setsid` is not available, the CLI can still send commands to a running Fiddler Everywhere instance, but it cannot start the application.

<!-- TODO verify: Confirm whether Linux packages other than AppImage are supported or should be explicitly excluded. The registration code runs for any packaged Linux build. -->

## Enabling and Disabling the CLI

The **Enable Fiddler CLI** option in **Settings** > **Connections** controls whether Fiddler Everywhere accepts commands from `fiddler-cli`. The option is enabled by default.

<!-- TODO screenshot: Settings > Connections > Enable Fiddler CLI -->

When you clear the option and save the settings:

- Fiddler Everywhere stops accepting CLI commands.
- Running any `fiddler-cli` command prints `Fiddler CLI is currently disabled.` and returns exit code `1`. The CLI does not start Fiddler Everywhere.

The option controls only the connection between the CLI and the application. It does not install, uninstall, or unregister the `fiddler-cli` command, and it does not change your `PATH`.

>tip The option is unavailable when your subscription tier doesn't include the Fiddler CLI or when your administrator has disabled the CLI through the [`DisableCLI` policy](slug://fe-restrict-policies).

## Running Commands

When you run a `fiddler-cli` command, the CLI looks for a running Fiddler Everywhere instance for the current user:

- If Fiddler Everywhere is running, the CLI sends the command to it and prints the result.
- If Fiddler Everywhere is not running, the CLI starts it, waits until the application is ready, and then runs the command. This applies to every command, including `help` and invalid commands.

The CLI waits up to 30 seconds for Fiddler Everywhere to start and become ready. If the application is still starting (for example, while it restores your sign-in state), the CLI retries the command automatically during that time.

### Starting Fiddler Everywhere in the Background

Add the `--hidden` option to start Fiddler Everywhere without showing the splash screen and the main window. This is useful for automation scenarios where you don't need the UI.

```sh
fiddler-cli --hidden start
```

The `--hidden` option affects only the application startup. If Fiddler Everywhere is already running, the option has no effect. To show the window later, run `fiddler-cli show`.

### Getting Help

To list the available commands, run any of the following:

```sh
fiddler-cli help
fiddler-cli --help
fiddler-cli -h
fiddler-cli
```

<!-- TODO screenshot: Terminal output of "fiddler-cli help" -->

### Quoting Arguments

Arguments are positional. Quote values that contain spaces or characters that your shell interprets, such as `&`, `?`, or `|`:

```powershell
# Windows PowerShell
fiddler-cli bpu "example.com/api?debug=true"
```

```sh
# macOS and Linux
fiddler-cli bpu 'example.com/api?debug=true'
```

## Restrictions

The following restrictions apply to Fiddler CLI commands:

- **Sign-in and license**&mdash;All commands except `help`, `status`, `show`, and `hide` require a signed-in Fiddler account with a valid license. Otherwise, the CLI reports the `sign_in_required` or `license_required` error. When sign-in is required, the CLI output includes a link that opens the sign-in page.
- **Subscription tier**&mdash;The Fiddler CLI is available for the **Pro** and **Enterprise** subscription tiers. If your account's plan doesn't include the CLI, commands fail with the `policy_blocked` error.
- **Enterprise policy**&mdash;Administrators can disable the CLI through the `DisableCLI` [managed app configuration](slug://fe-restrict-policies) key. When the policy is active, commands fail with the `policy_blocked` error.
- **Custom commands**&mdash;Commands implemented in a script run only when scripting is enabled and the script that handles them is active. For details, see [Custom CLI Commands](slug://fiddler-script-cli-commands).

## Output and Exit Codes

The CLI prints successful results to the standard output and errors to the standard error. Control characters in the output are escaped (for example, as `\u{1b}`), so command output cannot change the state of your terminal.

An error message can include the following additional lines:

- `Suggested action:`&mdash;Describes how to resolve the problem.
- `You can follow the quick link:`&mdash;A link that opens the relevant page, such as the sign-in page or the **Scripting** settings.
- `errorCode:`&mdash;A machine-readable [error code](#troubleshooting).

For example:

```txt
Sign-in is required before this QuickExec command can run.
Suggested action: Open Fiddler Everywhere, sign in, and run the command again.
You can follow the quick link: https://...
errorCode: sign_in_required
```

The CLI returns one of the following exit codes:

| Exit Code | Meaning |
|:----------|:--------|
| `0` | The command succeeded, or the CLI printed the help. |
| `1` | The command ran but failed, or the CLI could not connect to or start Fiddler Everywhere. Also returned when the CLI is disabled or the command is cancelled with **Ctrl+C**. |
| `2` | Usage error: the command syntax or the number of arguments is invalid, or no built-in command or active script handled the command. |

Use the exit code to check the result in scripts. For example:

```powershell
# Windows PowerShell
fiddler-cli start
if ($LASTEXITCODE -ne 0) { Write-Error "Could not start capturing." }
```

```sh
# macOS and Linux
if ! fiddler-cli start; then
  echo "Could not start capturing." >&2
fi
```

## Troubleshooting

When a command fails, the CLI prints an error message and an `errorCode` value. The following table describes the error codes and how to resolve them.

| Error Code | Message | Resolution |
|:-----------|:--------|:-----------|
| `unknown_command` | `This command is not recognized as a built-in or custom command.` or `No built-in command or active script handled this command.` | Check the command spelling and run `fiddler-cli help`. For custom commands, make sure that the active script's `OnExecAction` handler handles the command. |
| `invalid_arguments` | Varies by command&mdash;for example, `Usage: urlreplace <find> <replace> or urlreplace.` or `Response status must be an integer from 100 through 599.` | Correct the command arguments. See the [Fiddler CLI Command Reference](slug://fiddler-cli-commands). |
| `not_ready` | Varies&mdash;for example, Fiddler Everywhere is still restoring the sign-in state, still initializing backend services, or the main window is not available. | Wait until Fiddler Everywhere finishes starting and run the command again. |
| `sign_in_required` | `Sign-in is required before this QuickExec command can run.` | Sign in to Fiddler Everywhere (use the link in the output) and run the command again. |
| `license_required` | `A valid Fiddler Everywhere license is required before this QuickExec command can run.` | Open Fiddler Everywhere and check your license or account state. |
| `script_unavailable` | Varies&mdash;scripting is disabled, no valid script is active, scripting was disabled after repeated script failures, or the active script has no `OnExecAction` handler. | Open the **Scripting** tab, enable scripting, and activate a valid script that has an `OnExecAction` handler. See [Custom CLI Commands](slug://fiddler-script-cli-commands). |
| `script_execution_failed` | `The active script could not execute this command: ...` | Review the runtime diagnostics in the **Scripting** tab and fix the `OnExecAction` handler. |
| `policy_blocked` | `QuickExec is disabled by the DisableCLI enterprise policy.` or `QuickExec is disabled by the CLI quota for this account.` | Contact your Fiddler administrator, or check whether your subscription tier includes the Fiddler CLI. |
| `proxy_unavailable` | `Failed to enable the proxy: ...` or `Failed to disable the proxy: ...` | Check the proxy state in Fiddler Everywhere and make sure that the proxy settings are not restricted on your machine. |
| `operation_in_progress` | `Another QuickExec session command is in progress. Try again when it completes.` | Wait until the running `clear`, `cls`, or `dump` command completes and try again. |
| `operation_failed` | Varies&mdash;for example, `The command failed unexpectedly.`, `Timed out waiting for Fiddler Everywhere to start.`, or details about a failed session export. | Read the message details and run the command again. |
| `protocol_mismatch` | `QuickExec protocol version mismatch ...` | The `fiddler-cli` command and the running Fiddler Everywhere instance come from different versions. Restart Fiddler Everywhere or reinstall it so that both versions match. |

The following messages are related to the CLI configuration:

- `Fiddler CLI is currently disabled.`&mdash;The **Enable Fiddler CLI** option is turned off. Enable it in **Settings** > **Connections**.
- `Could not find Fiddler Everywhere at '...'. Start or reinstall Fiddler Everywhere.`&mdash;The CLI cannot locate the application. On Linux, start Fiddler Everywhere once to refresh the CLI configuration (for example, after moving the AppImage file).
- `Could not find appPath in ~/.fiddler/cli-config.json. Start Fiddler Everywhere to refresh it.`&mdash;(Linux only) The CLI configuration is missing or incomplete. Start Fiddler Everywhere manually once.

<!-- TODO verify: "Fiddler CLI is currently disabled." is printed together with "errorCode: operation_failed" in the current implementation. Confirm whether this is intended. -->

## See Also

- [Fiddler CLI Command Reference](slug://fiddler-cli-commands)
- [Custom CLI Commands](slug://fiddler-script-cli-commands)
- [Connections Settings](slug://connections-submenu)
- [Scripting Overview](slug://fiddler-script)
- [Managed App Configuration](slug://fe-restrict-policies)

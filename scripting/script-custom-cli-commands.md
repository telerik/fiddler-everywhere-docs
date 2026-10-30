---
title: Custom CLI Commands
page_title: Custom CLI Commands with OnExecAction - Scripting | Fiddler Everywhere
description: "Implement custom fiddler-cli commands in Fiddler Everywhere with the OnExecAction script hook, read positional arguments, return results, and run built-in Fiddler CLI commands from a script."
slug: fiddler-script-cli-commands
publish: true
position: 22
---

# Custom CLI Commands

The `OnExecAction` script hook lets you extend the [Fiddler CLI](slug://fiddler-cli) with your own commands. When you run `fiddler-cli` with a command name that is not a built-in command, Fiddler Everywhere forwards the command and its arguments to the `OnExecAction` handler of the active script.

>important Scripting is a beta feature. For details about enabling scripting and managing scripts, see the [Scripting Overview](slug://fiddler-script).

## Requirements

Custom commands run only when all of the following conditions are met:

- The [Fiddler CLI is enabled and set up](slug://fiddler-cli#enabling-the-fiddler-cli) (**Settings** > **Connections** > **Enable Fiddler CLI**).
- Scripting is enabled in the **Scripting** tab.
- A valid script is active.
- The active script defines an `OnExecAction` handler that handles the command.

If scripting is disabled, no valid script is active, or the active script has no `OnExecAction` handler, the CLI reports the `script_unavailable` error. If the CLI is disabled, it prints `Fiddler CLI is currently disabled.`, and if your handler declines the command, the CLI reports `unknown_command`. Built-in commands, such as `start` or `dump`, don't require an active script.

The [Fiddler CLI restrictions](slug://fiddler-cli#restrictions), including the sign-in and license requirements, also apply to custom commands.

## Command Precedence

Built-in commands always take precedence over script commands. If your handler checks for a command name that matches a built-in command (for example, `start` or `status`), Fiddler Everywhere runs the built-in command and never calls your handler. Use distinct names for your custom commands.

## Defining the Handler

Add the following method to your script:

```csharp
ExecResult OnExecAction(string[] parameters)
{
    // Handle your custom commands here.
    return null;
}
```

The `parameters` array contains the command and its arguments:

- `parameters[0]` is the command name in lowercase.
- `parameters[1]`, `parameters[2]`, and so on are the positional arguments. Their order and case are preserved.

For example, running `fiddler-cli Hello "John Smith"` passes `["hello", "John Smith"]` to the handler.

To pass arguments that start with `-`, add `--` before them. The CLI forwards everything after `--` literally:

```sh
fiddler-cli mycommand -- --verbose
```

## Returning a Result

Return an `ExecResult` object to report the outcome of the command to the CLI. Return `null` to decline the command&mdash;the CLI then reports it as an `unknown_command` error.

| Property | Type | Description |
|:---------|:-----|:------------|
| `Success` | `bool` | `true` when the command succeeded. When `false`, the CLI prints the message to the standard error and returns a non-zero exit code. See [Output and Exit Codes](slug://fiddler-cli#output-and-exit-codes) for the exit code that matches each error. |
| `Message` | `string` | The message that the CLI prints. |
| `ErrorCode` | `string` | An error code that the CLI prints as `errorCode:` when the command fails&mdash;for example, `invalid_arguments`. |
| `RemediationText` | `string` | A suggested action that the CLI prints as `Suggested action:` when the command fails. |
| `RemediationUrl` | `string` | A link that the CLI prints as `You can follow the quick link:` when the command fails. |
| `Data` | `Dictionary<string, string>` | Additional values that the CLI prints as `key: value` lines after the message. |
| `Handled` | `bool` | Defaults to `true`. Set it to `false` to decline the command, which has the same effect as returning `null`. |

The handler is subject to the same [execution timeout and kill switch](slug://fiddler-script-settings) as the other script hooks. If the handler throws an exception or times out, the CLI reports the `script_execution_failed` error.

## Running Built-in Commands from a Script

The `QuickExec` object, available inside `OnExecAction`, runs built-in commands from your script:

```csharp
ExecResult QuickExec.Execute(string command, params string[] args)
```

Use it to combine several built-in commands into a single custom command. Note the following:

- `QuickExec.Execute` runs only built-in commands. It never calls `OnExecAction` again, so a script cannot call itself recursively.
- Pass arguments as separate values, for example, `QuickExec.Execute("bpu", "example.com")`.
- If no built-in command matches, the method returns a failed result with the `unknown_command` error code.
- Check the `Success` property of each result before you continue. When a command fails, Fiddler Everywhere does not roll back the changes made by the commands that ran before it.

## Example

The following script implements three custom commands:

- `fiddler-cli hello [name]`&mdash;Prints a greeting.
- `fiddler-cli prepare-capture`&mdash;Shows the main window and starts capturing.
- `fiddler-cli debug-api <URL fragment>`&mdash;Starts capturing and sets a request breakpoint for the specified URL.

```csharp
ExecResult OnExecAction(string[] parameters)
{
    // fiddler-cli hello John
    if (parameters[0] == "hello")
    {
        string name = parameters.Length > 1 ? parameters[1] : "user";
        return new ExecResult { Success = true, Message = $"Hello, {name}!" };
    }

    // fiddler-cli prepare-capture
    if (parameters[0] == "prepare-capture")
    {
        var shown = QuickExec.Execute("show");
        if (!shown.Success)
        {
            return shown;
        }

        return QuickExec.Execute("start");
    }

    // fiddler-cli debug-api example.com/api
    if (parameters[0] == "debug-api")
    {
        if (parameters.Length != 2 || string.IsNullOrWhiteSpace(parameters[1]))
        {
            return new ExecResult
            {
                Success = false,
                ErrorCode = "invalid_arguments",
                Message = "Usage: debug-api <URL fragment>"
            };
        }

        var started = QuickExec.Execute("start");
        if (!started.Success)
        {
            return started;
        }

        return QuickExec.Execute("bpu", parameters[1]);
    }

    // Decline all other commands; the CLI reports them as unknown.
    return null;
}
```

After you activate the script, run the custom commands from a terminal:

```sh
fiddler-cli hello "John Smith"
fiddler-cli debug-api example.com/api
```

```txt
Hello, John Smith!
Breakpoint added (request-url).
```

The sample script that Fiddler Everywhere creates for new scripts includes these examples as comments in its `OnExecAction` handler.

## See Also

- [Fiddler CLI](slug://fiddler-cli)
- [Fiddler CLI Command Reference](slug://fiddler-cli-commands)
- [Script Hooks Reference](slug://fiddler-script-hooks)
- [Script Settings and Limits](slug://fiddler-script-settings)

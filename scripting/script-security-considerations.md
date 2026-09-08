---
title: Scripting Security Considerations
page_title: Scripting Security Considerations | Fiddler Everywhere
description: "Understand the security model of Fiddler Everywhere Scripting, including the guardrails applied to scripts and why scripting is not a hard security sandbox."
slug: fiddler-script-security
publish: true
position: 40
---

# Scripting Security Considerations

>warning Scripts run **in-process** with the Fiddler Everywhere application. Scripting applies a set of guardrails described below, but it is **not a hard security sandbox**. Only run scripts you trust. A script from an untrusted source can still access available application resources, and a non-cooperating tight loop or deep recursion can hang or crash the backend process.

## Guardrails Applied to Every Script

Before a script can be enabled, Fiddler Everywhere statically analyzes its code and rejects it if it contains any of the following:

**Blocked namespaces and types** (reflection, I/O, process, and networking primitives that scripts should not need):

- `System.Reflection` and all of its members/types (`System.Type`, `System.Reflection.TypeInfo`, `System.Reflection.Assembly`, `System.Reflection.Module`, `System.Reflection.MemberInfo`, `System.Reflection.MethodBase`).
- `System.IO`.
- `System.Diagnostics` (including `System.Diagnostics.Process` and `System.Diagnostics.StackTrace`).
- `System.Net`, with the narrow exception of `System.Net.Security` (needed for the `OnValidateServerCertificate` hook's argument type).
- `System.Runtime.InteropServices`.
- `System.Activator` (blocks `Activator.CreateInstance(...)`).

**Blocked language constructs:**

- `#r` and `#load` script directives.
- `using static` directives.
- `typeof` expressions.
- The `dynamic` keyword.
- `unsafe` code (methods, local functions, and blocks).
- `[DllImport]` attributes.

**Blocked members and calls, regardless of how they are referenced** (including fully-qualified access without a corresponding `using`):

- `object.GetType()`.
- `Environment.StackTrace`, `Environment.GetCommandLineArgs()`, `Environment.CommandLine`.
- Any member inherited from `System.Type`, `Assembly`, `MemberInfo`, `MethodBase`, `Activator`, `Process`, or `StackTrace`.
- Directly constructing `Thread` or `Timer` instances (`new Thread(...)`, `new Timer(...)`).

These checks run both as a syntax-level (AST) pass and a semantic (symbol-bound) pass, so that banned APIs cannot be reached through indirection such as fully-qualified names or member-group references. A script that violates any of these rules fails validation and cannot be saved while enabled or enabled from a disabled state; the editor reports the exact line/column of each violation.

## What the Guardrails Do Not Protect Against

The guardrails are a **best-effort allowlist/blocklist**, not process isolation. In particular, be aware that:

- A script can still perform expensive or blocking synchronous work that is not expressed as a recognized loop construct (see [Loop Cancellation](slug://fiddler-script-settings#loop-cancellation)), which can delay traffic processing until the [execution timeout](slug://fiddler-script-settings#execution-timeout) is reached.
- A script can read and modify any data exposed to it through the hook arguments (`Session`, `WebSocketMessage`, `ValidateServerCertificateEventArgs`)&mdash;including request/response headers and bodies, and certificate validation results.
- Repeated non-cooperating executions can exhaust the bounded execution capacity described in [Concurrency Limit](slug://fiddler-script-settings#concurrency-limit), causing later hook invocations to be skipped until the offending execution completes or times out.

## Best Practices

- Treat scripts the same way you would treat any other executable code you run locally: only use scripts you wrote yourself or obtained from a source you trust.
- Prefer the [Rules Builder](slug://fiddler-rules-actions) for straightforward matching/action scenarios, and reserve scripting for logic that genuinely requires code.
- Keep hooks small and fast; move expensive work outside the hot request/response path where possible.
- Use `OnValidateServerCertificate` carefully&mdash;forcing certificate validity bypasses a security control and should only be done for traffic you control.

## See Also

- [Scripting Overview](slug://fiddler-script)
- [Script Hooks Reference](slug://fiddler-script-hooks)
- [Scripting Settings and Limits](slug://fiddler-script-settings)

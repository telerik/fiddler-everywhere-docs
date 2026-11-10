---
title: Scripting Settings and Limits
page_title: Scripting Settings and Limits | Fiddler Everywhere
description: "Learn how Fiddler Everywhere runs scripts, and how the timeout, concurrency limit, and consecutive-error kill switch protect the backend from a misbehaving script."
slug: fiddler-script-settings
publish: true
position: 30
---

# Scripting Settings and Limits

Fiddler Everywhere runs only one active script at a time, but that script's hooks can execute concurrently (for example, `OnBeforeRequest` for several in-flight sessions at once). To keep the application responsive even when a script misbehaves, Fiddler Everywhere applies the runtime limits described below.

## Execution Timeout

Every hook invocation is bounded by a timeout, measured in milliseconds. If a hook does not complete within the timeout:

- Its execution is cancelled cooperatively (see [Loop Cancellation](#loop-cancellation) below).
- The invocation is treated as a failure and counts toward the [consecutive-error kill switch](#consecutive-error-kill-switch).

The default timeout is **3000 ms**.

## Concurrency Limit

Up to **four** hook invocations can run at the same time. If all execution slots are busy, additional dispatches wait for a free slot until the configured timeout elapses; if none becomes free in time, that particular hook invocation is skipped for that session/event, and a warning diagnostic is raised, but the traffic pipeline is not blocked.

## Body and IPC Size Limits

Each script callback can receive a request body and a response body of up to **16 MiB** each. If either body is larger than 16 MiB when a callback is invoked, that invocation is skipped—even if the hook only needs to inspect headers. A body of exactly 16 MiB is allowed.

There is also a separate **80 MiB** limit for the complete serialized message sent between the Fiddler Everywhere backend and the scripting process. This message includes bodies, headers, and metadata, so it can exceed the limit even when neither body exceeds its individual 16 MiB limit.

## Session Copies

Hooks receive a copy of the session rather than the live backend object. Changes made to that copy during the callback still apply to the real session. If a script retains the session reference after the callback ends, it will not reflect later session changes, and changes made through that retained reference will not affect the real session.

## Consecutive-Error Kill Switch

Fiddler Everywhere tracks consecutive failures per hook (compile errors surfaced at runtime, unhandled exceptions thrown by the script, and timeouts). Once a hook accumulates a configurable number of **consecutive** failures:

- The kill switch trips: the active script is automatically disabled (both in memory and in its saved settings entry), and scripting stops dispatching to it.
- An error notification is shown, indicating how many consecutive errors occurred and in which hook.

The default threshold is **5** consecutive errors. A successful invocation of a hook resets its consecutive-error counter to zero.

>tip This is a *fail-open* design: a throwing or hanging script can never break the live traffic pipeline&mdash;at worst, Fiddler Everywhere stops calling that script and continues processing traffic normally.

## Runtime Diagnostics

While a script is active, non-fatal problems (a single failed hook invocation, or a hook skipped because the concurrency limit was busy until timeout) are surfaced as toast notifications in the **Scripting** tab, without necessarily disabling the script (that only happens once the kill switch trips).

## Loop Cancellation

To make the timeout effective even inside a script's own loops, Fiddler Everywhere automatically injects a cancellation checkpoint at the start of every `for`, `while`, `do`, and `foreach` loop body before compiling the script. This lets a long-running loop be interrupted once its hook's timeout is reached, instead of running indefinitely.

>important This mechanism only protects cooperative loop constructs recognized at compile time. It does not prevent every possible way a script could hang the process (for example, a single very expensive synchronous call, or deep/unbounded recursion). See [Scripting Security Considerations](slug://fiddler-script-security) for the full set of caveats.

## See Also

- [Scripting Overview](slug://fiddler-script)
- [Script Hooks Reference](slug://fiddler-script-hooks)
- [Common Scripting Examples](slug://fiddler-script-examples)
- [Scripting Security Considerations](slug://fiddler-script-security)

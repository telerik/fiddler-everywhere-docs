---
title: Script Hooks Reference
page_title: Script Hooks Reference - Scripting | Fiddler Everywhere
description: "Reference of all supported C# script hooks in Fiddler Everywhere Scripting, their triggers, available globals, and a full sample script."
slug: fiddler-script-hooks
publish: true
position: 20
---

# Script Hooks Reference

A Fiddler Everywhere script is a plain C# script (`.csx`-style code, without an enclosing class) that defines one or more of the well-known **hook** methods listed below. Fiddler Everywhere calls the hooks that exist in your active script whenever the corresponding event occurs; hooks you do not define are simply skipped.

>tip Hook methods must be **synchronous**. Declaring a hook as `async` or returning `Task`/`Task<T>` fails validation.

## Available Hooks

| Hook | Signature | Triggered When |
|:-----|:----------|:----------------|
| `OnBeforeRequest` | `void OnBeforeRequest(Session oSession)` | A client request has been received, before it is sent to the server. |
| `OnBeforeResponse` | `void OnBeforeResponse(Session oSession)` | A server response has been received, before it is returned to the client. |
| `OnPeekAtRequestHeaders` | `void OnPeekAtRequestHeaders(Session oSession)` | Request headers are available, before the request body is read. |
| `OnPeekAtResponseHeaders` | `void OnPeekAtResponseHeaders(Session oSession)` | Response headers are available, before the response body is read. |
| `OnSessionCompleted` | `void OnSessionCompleted(Session oSession)` | A session has fully completed. |
| `OnAttach` | `void OnAttach()` | Fiddler Everywhere attaches as the system proxy. |
| `OnDetach` | `void OnDetach()` | Fiddler Everywhere detaches as the system proxy. |
| `OnBoot` | `void OnBoot()` | Once, when a script becomes the active script (or when the backend finishes starting up while that script is already active). |
| `OnShutdown` | `void OnShutdown()` | Once, when the Fiddler Everywhere backend begins shutting down. |
| `OnValidateServerCertificate` | `void OnValidateServerCertificate(ValidateServerCertificateEventArgs args)` | A server's HTTPS certificate is evaluated. Set `args.ValidityState` to override the default validation result (for example, `CertificateValidity.ForceValid`). |
| `OnWebSocketMessage` | `void OnWebSocketMessage(WebSocketMessage oWSM)` | A WebSocket message is captured. |

Each hook receives its typed argument (`Session`, `ValidateServerCertificateEventArgs`, or `WebSocketMessage`) directly&mdash;there is no need to declare or reference a globals object; the argument name in the signature (`oSession`, `args`, `oWSM`) can be changed freely since it is just a regular method parameter.

## Full Sample Script

The following is the built-in template that every new script starts from. It declares every supported hook as an empty stub&mdash;delete the hooks you do not need:

```csharp
// Fiddler Everywhere sample script.
//
// Security warning: scripts run in-process with the Fiddler backend and are not
// a hard security sandbox. Only run scripts you trust; scripts from untrusted
// sources may access available application resources and can contain harmful
// code. A non-cooperating tight loop or deep recursion can also hang or crash
// the backend process.

void OnBeforeRequest(Session oSession)
{
    // Runs when a client request is received, before it is sent to the server.
}

void OnBeforeResponse(Session oSession)
{
    // Runs when a server response is received, before it is returned to the client.
}

void OnPeekAtRequestHeaders(Session oSession)
{
    // Runs as soon as request headers are available (before the body is read).
}

void OnPeekAtResponseHeaders(Session oSession)
{
    // Runs as soon as response headers are available (before the body is read).
}

void OnSessionCompleted(Session oSession)
{
    // Runs after a session has fully completed.
}

void OnAttach()
{
    // Runs when Fiddler attaches as the system proxy.
}

void OnDetach()
{
    // Runs when Fiddler detaches as the system proxy.
}

void OnBoot()
{
    // Runs once when the Fiddler backend finishes starting up.
}

void OnShutdown()
{
    // Runs once when the Fiddler backend begins shutting down.
}

void OnValidateServerCertificate(ValidateServerCertificateEventArgs args)
{
    // Runs when a server's HTTPS certificate is evaluated.
    // Set args.ValidityState to override the default validation result, e.g.:
    // args.ValidityState = CertificateValidity.ForceValid;
}

void OnWebSocketMessage(WebSocketMessage oWSM)
{
    // Runs when a WebSocket message is captured.
}
```

## Autocomplete and Validation

While editing a script, the built-in editor offers:

- **Autocomplete** &mdash; type `.` after any expression to see the public members available on its type (for example, `oSession.` lists the members of `Session`).
- **Live validation** &mdash; compile errors and warnings are shown as inline diagnostics (with line/column information) a fraction of a second after you stop typing.

## See Also

- [Scripting Overview](slug://fiddler-script)
- [Scripting Settings and Limits](slug://fiddler-script-settings)
- [Scripting Security Considerations](slug://fiddler-script-security)

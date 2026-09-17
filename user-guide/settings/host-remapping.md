---
title: Hosts
page_title: Host Remapping | Fiddler Everywhere
description: "Use Host Remapping to redirect traffic for a host to a different host, IP address, or port - feature parity with Fiddler Classic's Tools > HOSTS."
slug: settings-host-remapping
publish: true
position: 105
---

# Hosts (Host Remapping)

**Host Remapping** lets you redirect traffic requested for one host to a different host, IP address, or port, without changing what the client or the destination server actually see. This is Fiddler Everywhere's built-in replacement for Fiddler Classic's **Tools** > **HOSTS** dialog, extended with per-mapping port and protocol control.

Host Remapping is commonly used to:

- Point a production or staging hostname (for example, `www.example.com`) at a local development server, so requests made by an app or browser to the real hostname are transparently served by `localhost`.
- Redirect traffic to a different IP address or port without editing the operating system (OS) hosts file or restarting the client application.
- Force the outbound connection for a hostname to use HTTP or HTTPS, regardless of which protocol the client requested (for example, sending an HTTPS hostname to a plain-HTTP dev server).

>tip [Learn more about the differences between Host Remapping and the Reverse Proxy feature.](#host-remapping-vs-reverse-proxy)

## Enabling Host Remapping

Open the **Host Remapping** window from the **Tools** menu or the status bar. Unlike a typical Settings tab, there is no separate "Enable Host Remapping" checkbox - the window's own **Enable**/**Disable** button (see below) is what turns the feature on and off globally.

The window has three buttons at the bottom:

- **Cancel**&mdash;Discards any unsaved local edits (added, removed, or updated mappings) and closes the window without changing anything.
- **Save**&mdash;Persists your mapping edits (add/remove/update) without changing whether Host Remapping is globally enabled or disabled.
- **Enable**/**Disable** (primary button)&mdash;Persists your edits and also flips the global on/off state, then closes the window. The button's label reflects the action it will take next: it reads **Enable** when Host Remapping is currently off, and **Disable** when it's currently on. **Enable** is disabled (greyed out) until at least one mapping row has its own per-row enabled checkbox checked.

To set up Host Remapping:

1. Add one or more [host mappings](#adding-a-host-mapping), either manually or by [importing them from the OS hosts file](#importing-from-the-os-hosts-file).
1. Make sure at least one mapping's per-row **enabled** checkbox is checked.
1. Click **Enable** to persist your mappings and turn Host Remapping on (or click **Save** first if you only want to persist edits without changing the global state yet).

>note Host Remapping does not require the Fiddler root certificate or **Capture HTTPS Traffic** to be enabled for plain HTTP redirects, but decrypting an HTTPS mapping (so you can inspect the remapped traffic) still requires [HTTPS traffic capturing](slug://decrypt-https-traffic) to be turned on.

## Adding a Host Mapping

Each row in the **Host Mappings** list represents a single redirect rule and has the following fields. Only the column header row has a divider line below it - individual mapping rows are not separated by lines.

- **Enabled (checkbox, unlabeled)**&mdash;Turns the individual mapping on or off without deleting it. New manual mappings are enabled by default; entries added through **Import from OS Hosts File** are added disabled so you can review them before they take effect.
- **Original Host**&mdash;The hostname the client requests, for example `www.example.com`. Do not include a scheme (`http://`/`https://`). You can optionally append `:port` (for example, `www.example.com:8080`) to scope the mapping to requests on that specific port only; a mapping without a port matches the host on **any** port, unless a more specific `host:port` mapping also exists for the same host (the more specific entry always wins).
- **Redirect To**&mdash;The hostname or IP address to send the traffic to instead, optionally followed by `:port` (for example, `localhost:5173`). See [Port Behavior](#port-behavior-original-host-vs-redirect-to) below for what happens when you omit the port.
- **Protocol**&mdash;`Auto` (default), `HTTP`, or `HTTPS`. Controls the protocol used for the outbound connection to **Redirect To**. See [Protocol Override](#protocol-override).
- **Preserve Host**&mdash;`Yes` (default) or `No`. Controls whether the destination server (and the Fiddler Rules engine) see the original requested hostname or the new **Redirect To** hostname. See [Preserve Host](#preserve-host-header-and-sni).

Use the grid's own trailing "add new row" behavior to append a new mapping - start typing into the empty last row and it becomes an editable mapping; there is no separate **Add Mapping** button. Use the trash icon at the end of a row to remove it. Adding, removing, importing, or editing a mapping (including toggling its **enabled** checkbox) immediately enables the window's **Save** button, so you can tell right away that you have unsaved changes.

>important A row is **incomplete** if either **Original Host** or **Redirect To** is left blank, and this blocks both **Save** and **Enable**/**Disable** - an inline title/tooltip on the row explains why. This "both fields must be filled in" check applies to **every** non-blank row, regardless of whether that row's own **enabled** checkbox is checked. A deeper check - whether the value is actually a well-formed `host` or `host:port` - only runs for **enabled** mappings; a disabled row can hold an invalid or unresolved-looking value without blocking **Save** or **Enable**/**Disable**, as long as both fields are non-blank. Duplicate **Original Host** values across rows (matched case-insensitively) are also rejected with an inline validation error, whether or not the duplicate rows are enabled.

>note An empty row (both **Original Host** and **Redirect To** left blank, for example a new row you started adding but haven't filled in yet) is not persisted when you click **Save** or **Enable**/**Disable** - it's silently dropped rather than saved as a no-op entry, and it does not count as "incomplete" for validation purposes.

## Port Behavior (Original Host vs. Redirect To)

Ports are handled independently for each side of a mapping:

- **Original Host without a port** (for example, `example.com`) matches requests to that host on **any** port.
- **Original Host with a port** (for example, `example.com:8443`) matches only requests to that host on that specific port.
- **Redirect To without a port** (for example, `10.0.0.5`) carries over the **port the client actually requested**. This lets a single mapping cover both `:80` and `:443` for the same target (for example, `example.com` &rarr; `10.0.0.5` redirects `example.com:80` to `10.0.0.5:80` and `example.com:443` to `10.0.0.5:443`).
- **Redirect To with a port** (for example, `localhost:5173`) always redirects to that exact port, regardless of which port the client requested.

>important The OS hosts file format has no concept of a port - it can only map a hostname to an IP address. This matters specifically when you use **[Import from OS Hosts File](#importing-from-the-os-hosts-file)**: an imported entry always has an empty port on **Redirect To**. If the real target is a dev server bound to a non-default port (for example, Vite on `5173`), the imported mapping will **not** reach it until you do one of the following:
>
> - **Add the port explicitly to Redirect To.** For example, edit the imported `myapp.local` &rarr; `127.0.0.1` mapping so **Redirect To** reads `127.0.0.1:5173` (or, better, `localhost:5173` - see [the loopback hint](#loopback-addresses-vs-localhost)). Every request to `myapp.local` is then redirected to port `5173`, no matter what port the client used.
> - **Include the port in the request itself.** If you instead request `myapp.local:5173` directly (that is, the client/browser/API call itself specifies port `5173`), the imported mapping (`Redirect To` = `127.0.0.1`, no port) automatically carries that `5173` through to the target, because an empty port on **Redirect To** always reuses the port the client requested. No edit to the mapping is required in this case.
>
> Use the first option when your client always calls the plain hostname (relying on the default port `80`/`443`) but the real target listens elsewhere. Use the second (or simply leave the port off the mapping) when the client already calls the correct, non-default port.

## Preserve Host Header and SNI

- **Preserve Host: Yes (default)**&mdash;The physical connection is redirected to **Redirect To**, but the `Host` header (and the TLS SNI value for HTTPS) sent to the destination server remain the original requested hostname. This mirrors how editing the OS hosts file behaves, and it means Fiddler's [Rules](slug://rules-settings-submenu) still match against the **original** hostname. Because the physical destination's TLS certificate will not match the original hostname, Fiddler automatically suppresses the certificate-name-mismatch error for that specific remapped connection only - your overall [certificate error handling](slug://decrypt-https-traffic) settings are not affected.
- **Preserve Host: No**&mdash;The `Host` header (and SNI) are rewritten to the **Redirect To** value. The destination server sees the new hostname, and Rules subsequently match against the **new** hostname rather than the original one - this is a deliberate behavior difference from the default, so set it to **No** only if your target server requires the incoming `Host` header to match its own hostname (for example, a server that performs its own host-based routing or virtual-hosting).

## Protocol Override

By default (**Auto**), Host Remapping keeps whichever protocol (HTTP or HTTPS) the client originally used. Set **Protocol** to **HTTP** or **HTTPS** to force the outbound connection to that protocol regardless of what the client requested.

This is primarily useful for redirecting an HTTPS hostname to a plain-HTTP local dev server (a very common case, since most local dev servers such as Vite, webpack-dev-server, or a plain Node/Python server don't serve HTTPS by default). Without the override, Fiddler would attempt a TLS handshake against a server that only speaks HTTP, and the request would hang or fail. Set **Protocol** to **HTTP** in that case so Fiddler connects over plain HTTP to the target while still accepting the client's original HTTPS request.

## Loopback Addresses vs. `localhost`

When **Redirect To** is a bare loopback IP literal (`127.0.0.1` or `::1`, with or without a port), Fiddler shows a non-blocking inline hint suggesting you use `localhost` instead. This is a cross-platform quirk, not a Fiddler limitation:

- A local dev server that binds to the plain hostname `localhost` can end up listening on only the IPv4 loopback address (`127.0.0.1`), only the IPv6 loopback address (`::1`), or both - depending on the runtime (Node.js, Python, etc.), its configuration, and the OS (this differs across Windows, macOS, and Linux, and can even differ between versions of the same runtime).
- If you pin **Redirect To** to a specific loopback literal and the target process actually bound to the other address family, Fiddler will fail the connection with a plain connection-refused error even though the server is running.
- Using `localhost` instead lets Fiddler resolve and try both address families automatically (the same fallback logic used for any other hostname), so the mapping keeps working no matter which loopback family the dev server ends up bound to.

The hint is informational only - a loopback IP literal is still a perfectly valid target, and internally Fiddler already normalizes a bare `127.0.0.1`/`::1` target to try both address families for the physical connection. You do not need to act on the hint if your target is reliably bound to a specific address family.

>note Internally, Fiddler also guards against a mapping that would redirect a request back to the exact host/port it is already going to (which would otherwise create a redirect loop). This guard compares the literal configured value, so a mapping such as `localhost` &rarr; `127.0.0.1` is still applied normally (for example, to force a **Protocol** or **Preserve Host** override while keeping the same physical destination) - it is not treated as a no-op.

## Importing from the OS Hosts File

Click **Import from OS Hosts File** to read entries from your operating system's hosts file as a starting point:

| OS | Hosts file path |
|:---|:---|
| Windows | `%SystemRoot%\System32\drivers\etc\hosts` (typically `C:\Windows\System32\drivers\etc\hosts`) |
| macOS | `/etc/hosts` |
| Linux | `/etc/hosts` |

The import is **read-only** - Fiddler never writes to or modifies your OS hosts file. It only reads entries from it to help you create equivalent Host Remapping mappings.

While importing, Fiddler automatically skips:

- **System default/boilerplate entries**, such as `localhost`, `localhost.localdomain`, `broadcasthost`, `ip6-localhost`, and `ip6-loopback`. On Linux, this also includes the extra IPv6 network/multicast boilerplate lines many distributions ship by default (`ip6-localnet`, `ip6-mcastprefix`, `ip6-allnodes`, `ip6-allrouters`) - these are not present on Windows or macOS by default, and are just as much a system default as `localhost`, so they are filtered out the same way.
- **Blackhole/broadcast targets**, such as entries pointing at `0.0.0.0`, `255.255.255.255`, or a bare `::1` paired with an arbitrary hostname (common in blocklist-style hosts files) - these don't point at a real, reachable host.
- **Hosts you already have a mapping for** in the current list (matched by hostname, case-insensitively).
- **Duplicate hostnames within the imported file itself.**
- **Invalid lines** - most commonly, a first column that already contains a port (for example, `localhost:5173  example.com`). The OS hosts file format only supports a plain IP address or hostname in its first column, so a line like that isn't valid there in the first place; add or edit that mapping directly in the **Host Mappings** list instead.

Any remaining entries are added to the **Host Mappings** list as **new, disabled** rows, so nothing is redirected until you review and explicitly enable (and Save) the mappings you want to keep. A notification after the import summarizes how many entries were imported, skipped as system defaults, skipped as already configured, or skipped as invalid.

>important As noted in [Port Behavior](#port-behavior-original-host-vs-redirect-to), imported entries never have a port on **Redirect To**, because the OS hosts file has no way to express one. Review each imported mapping and add an explicit port to **Redirect To** if the real target listens on a non-default port your client doesn't already specify.

## Persistence

Clicking **Save** or **Enable**/**Disable** persists the enabled state and every mapping as part of your regular Fiddler Everywhere settings, so they persist across application restarts. **Cancel** discards unsaved edits instead.

## Host Remapping vs. Reverse Proxy

Host Remapping and [Reverse Proxy](slug://fiddler-reverse-proxy) can look similar at first glance, but they solve different problems:

| | Host Remapping | [Reverse Proxy](slug://fiddler-reverse-proxy) |
|:---|:---|:---|
| What it does | Redirects traffic for an existing, client-requested hostname to a different host/IP/port, in-flight - no new listener is created. | Opens a **new** listening port on the Fiddler machine and forwards anything that arrives on it to a remote host. |
| Client change required | None - the client keeps requesting the original hostname/port; Fiddler only needs to be the active proxy (or the hostname needs to resolve to the machine running Fiddler). | The client (or its hosts file/DNS) must be pointed at the new listening port/host that Fiddler opens. |
| Typical use case | Quietly send traffic for a real hostname to a local dev server or a different environment, similar to editing the OS hosts file. | Expose a server behind a proxy port, or capture traffic aimed at a specific port that isn't otherwise going through Fiddler. |

Both features share the same underlying protocol choices (`Auto`/`HTTP`/`HTTPS`) and a **Preserve Host** option, so the two are easy to reason about together, but they are configured and applied independently and can be used at the same time.

## Troubleshooting

- **Mapping doesn't seem to apply:** Confirm the mapping's own per-row enabled checkbox is checked, that Host Remapping is globally enabled (the window's primary button reads **Disable**, meaning it's currently on), and that you clicked **Enable**/**Disable** (or previously **Save**, if it was already enabled) rather than **Cancel**.
- **Connection refused to a local dev server:** If **Redirect To** is a loopback IP literal (`127.0.0.1`/`::1`), switch it to `localhost` - see [Loopback Addresses vs. localhost](#loopback-addresses-vs-localhost).
- **Redirect reaches the wrong port (or times out) after importing from the OS hosts file:** The imported mapping has no port on **Redirect To** - see [Port Behavior](#port-behavior-original-host-vs-redirect-to) for how to fix it.
- **HTTPS request to a dev server hangs or fails:** Set **Protocol** to **HTTP** on that mapping if the target only serves plain HTTP - see [Protocol Override](#protocol-override).
- **Certificate name-mismatch error on a remapped HTTPS host:** This is only expected when **Preserve Host** is **No** (the destination now sees a different Host/SNI than its certificate covers) - when **Preserve Host** is **Yes** (the default), Fiddler already suppresses this specific error for you.
- **A mapping to `localhost`/`127.0.0.1` seems to have no effect:** Fiddler skips a mapping that would redirect a request back to the same physical destination it's already going to, to avoid a redirect loop. This does not apply to deliberate cross-literal mappings (for example, `localhost` &rarr; `127.0.0.1`) made only to change **Protocol** or **Preserve Host**.

## See Also

- [Reverse Proxy](slug://fiddler-reverse-proxy)
- [Connections Settings](slug://connections-submenu)
- [HTTPS Settings](slug://decrypt-https-traffic)
- [Rules](slug://rules-settings-submenu)
- [Fiddler Classic Migration](slug://fe-migrating-from-classic)

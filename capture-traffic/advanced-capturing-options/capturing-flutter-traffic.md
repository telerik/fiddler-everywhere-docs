---
title: Capturing Flutter Traffic
description: "Capture HTTPS traffic from Flutter mobile application while using the Fiddler Everywhere proxy."
type: how-to
slug: how-to-capture-flutter-traffic
publish: true
---

# Capturing Flutter Traffic

By default, Flutter applications that use Dart's `dart:io` networking stack don't automatically follow the proxy configured on the mobile device (Wi-Fi proxy / system proxy). As a consequence, even when the device is configured to use the Fiddler Everywhere proxy, you might not see any traffic from the Flutter app in Fiddler Everywhere.

This article shows how to make a Flutter app use the device proxy settings so that Fiddler Everywhere can capture the app's HTTP and HTTPS traffic.

## Prerequisites (Device setup)

Before changing your Flutter code, ensure the device is already configured to send traffic through Fiddler Everywhere:

- Configure the mobile device to use Fiddler Everywhere as a proxy:
  - Android: [Capturing Android Traffic](slug://capture-mobile-android-traffic)
  - iOS: [Capturing iOS Traffic](slug://capture-mobile-ios-traffic)
- Install and trust the Fiddler CA certificate on the device (required to decrypt HTTPS):
  - Follow the platform steps in the Android/iOS articles above.

## Solution

Use the [http_proxy](https://pub.dev/packages/http_proxy) Flutter plugin to read the mobile device proxy configuration and apply it to Dart's HTTP client via `HttpOverrides`. This makes common Flutter HTTP stacks (for example, `package:http` via `IOClient`, and clients built on `dart:io`) route traffic through the proxy configured on the device.

1. Add the dependency to your `pubspec.yaml` (use the latest version from pub.dev):

    ```yaml
    dependencies:
      http_proxy: ^1.2.3
    ```

2. Initialize `HttpOverrides.global` before `runApp()` and before any network calls:

    ```dart
    import 'dart:io';

    import 'package:flutter/widgets.dart';
    import 'package:http_proxy/http_proxy.dart';

    void main() async {
      WidgetsFlutterBinding.ensureInitialized();

      HttpProxy httpProxy = await HttpProxy.createHttpProxy();
      HttpOverrides.global = httpProxy;

      runApp(MyApp());
    }
    ```

3. Rebuild and restart the application.

If the device proxy is configured to point to the Fiddler Everywhere host, you should now see the Flutter app sessions appear in Fiddler Everywhere.

## Notes for common Flutter HTTP stacks

- `dart:io` (`HttpClient`) respects `HttpOverrides.global`, so it will use the device proxy when configured as shown above.
- `package:http` on mobile typically uses `dart:io` under the hood (for example via `IOClient`), so it will usually follow `HttpOverrides.global` as well.
- `dio` on Android/iOS typically uses a `dart:io` adapter by default, so it will usually follow `HttpOverrides.global`. If you use a custom adapter or a native networking plugin/SDK, proxy handling may differ.
- `WebView` traffic and some native SDK/plugin traffic may not go through `dart:io` at all, so setting `HttpOverrides.global` might not affect it.

## Troubleshooting

### I only see `CONNECT` tunnels (port 443)

This usually means the app is proxying traffic, but TLS decryption fails (the app does not trust the user-installed CA).

- Android apps often need an explicit debug-time configuration to trust user-added CAs.
- Follow the steps in [Capture Mobile Application Traffic](slug://capture-mobile-android-traffic#capture-mobile-application-traffic).

### I still see no traffic from the Flutter app

- Confirm the device proxy is set (Wi-Fi proxy) and that browser traffic from the same device is visible in Fiddler Everywhere.
- Ensure `HttpOverrides.global` is set before any networking is initialized (keep it at the very start of `main()` as shown above).
- If the app uses native networking outside of `dart:io` (some plugins, SDKs, or `WebView` traffic), it may follow different proxy and certificate rules.

>important Proxy and certificate changes are intended for development and debugging. Avoid shipping a production build with custom trust or proxy behavior enabled.
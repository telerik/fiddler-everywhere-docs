---
title: Capturing Traffic from Remote Devices
description: "Use Fiddler Everywhere to capture remote HTTPS traffic from other computers, consoles, tablets, and other smart devices."
slug: fiddler-capture-other-computers
publish: true
position: 60
previous_url: /knowledge-base/how-to-capture-traffic-from-another-pc, /knowledge-base/capturing-from-remote-pc, /knowledge-base/how-to-track-different-devices
---

# Capturing Traffic from Remote Devices

Fiddler Everywhere can capture HTTP/HTTPS traffic from any remote device on your local network—computers, gaming consoles, smartphones, smart TVs, IoT devices, and more. This capability is essential for debugging mobile applications, testing cross-platform compatibility, and analyzing traffic from devices that can't run Fiddler directly.

This article covers generic remote device setup. For mobile-specific instructions, see our dedicated guides for [Android]({%slug capture-mobile-android-traffic%}) and [iOS]({%slug capture-mobile-ios-traffic%}) devices.

## How It Works

Remote traffic capturing works by configuring your target device to route its internet traffic through Fiddler's proxy server. Here's the basic flow:

1. **Fiddler Host**: Your computer running Fiddler Everywhere acts as a proxy server
2. **Remote Device**: Any device on your network configured to use Fiddler's proxy
3. **Traffic Flow**: Remote device → Fiddler proxy → Internet → Fiddler proxy → Remote device

## Prerequisites & Network Requirements

### Software Requirements

- [Latest version of Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) installed on host computer
- Remote device with proxy configuration capabilities
- Administrative access on both host and remote devices (for certificate installation)

### Network Requirements

- Both devices must be on the same local network (e.g., same Wi-Fi network)
- Fiddler proxy port (default: 8866) must be accessible between devices
- No firewall blocking communication between devices

### Corporate Network Considerations

Company networks often restrict proxy usage and network discovery. If you encounter issues:
- Check with your system administrator about network policies
- Consider using a personal hotspot for testing
- Ensure port 8866 (or your custom port) is not blocked by corporate firewalls

### Alternative Network Setups

While same-network setup is recommended, you can configure remote capturing across different networks if you have administrative control over both networks and can:
- Open the Fiddler proxy port in firewalls
- Ensure network routing allows communication between the devices
- Configure appropriate security measures

## Quick Setup: Automated Tutorials

Fiddler Everywhere provides automated setup wizards for Windows and macOS devices:

### Windows Remote Device Setup
1. Start Fiddler Everywhere
2. Go to **Home** → **Remote Devices** → **Windows**
3. Follow the step-by-step tutorial

### macOS Remote Device Setup
1. Start Fiddler Everywhere  
2. Go to **Home** → **Remote Devices** → **macOS**
3. Follow the step-by-step tutorial

Both tutorials require administrative privileges on the remote device to install Fiddler's CA certificate and configure system proxy settings.

## Manual Setup Guide

For devices not covered by automated tutorials, follow this comprehensive manual setup process.

### Step 1: Configure Fiddler Host

#### Enable Remote Connections
1. Open Fiddler Everywhere
2. Go to **Settings** → **Connections**
3. Check **Allow remote devices to connect**
4. Optionally check **Keep it ON after app restart** for persistence
5. Note the **Fiddler listens on port** value (default: 8866)

#### Find Your Host IP Address

Use one of these methods to find your Fiddler host's IP address:

**Method 1: Fiddler Status Bar**

- Look at the connection status in the lower-right corner of Fiddler

**Method 2: Command Line**

```bash
# Windows
ipconfig

# macOS/Linux  
ifconfig
```

**Example Output:**

```
Wireless LAN adapter Wi-Fi:
IPv4 Address. . . . . . . . . . . : 192.168.1.100
```

In this example, your Fiddler host IP is `192.168.1.100`.

### Step 2: Configure Remote Device

#### Download and Install Fiddler Certificate

1. **Open browser on remote device**
2. **Navigate to Fiddler's echo service:**
   ```
   http://192.168.1.100:8866
   ```
   (Replace `192.168.1.100` with your actual Fiddler host IP)

3. **Download the CA certificate**
   - Click the "Download Fiddler Certificate" link
   - Save the certificate file to your device

4. **Install and trust the certificate:**

   **Windows:**
   - Double-click the downloaded certificate
   - Click "Install Certificate"
   - Choose "Current User" or "Local Machine"
   - Select "Place all certificates in the following store"
   - Click "Browse" and select "Trusted Root Certification Authorities"
   - Complete the installation

   **macOS:**
   - Double-click the certificate to open Keychain Access
   - Enter your password when prompted
   - Find "Fiddler Root Certificate Authority" in Keychain
   - Double-click it and set to "Always Trust"

   **Linux:**
   ```bash
   # Copy certificate to system store
   sudo cp Fiddler_Root_Certificate_Authority.crt /usr/local/share/ca-certificates/
   sudo update-ca-certificates
   ```

#### Configure Proxy Settings

Configure your device to use Fiddler as its HTTP/HTTPS proxy:

**Windows 10/11:**
1. Go to **Settings** → **Network & Internet** → **Proxy**
2. Under "Manual proxy setup," toggle **Use a proxy server** to On
3. Set **Address:** `192.168.1.100` (your Fiddler host IP)
4. Set **Port:** `8866` (or your custom port)
5. Check **Don't use the proxy server for local addresses**
6. Click **Save**

**macOS:**
1. Go to **System Preferences** → **Network**
2. Select your active connection and click **Advanced**
3. Go to the **Proxies** tab
4. Check **Web Proxy (HTTP)** and **Secure Web Proxy (HTTPS)**
5. For both, enter:
   - **Web Proxy Server:** `192.168.1.100:8866`
   - **Secure Web Proxy Server:** `192.168.1.100:8866`
6. Click **OK** and **Apply**

**Linux (Ubuntu):**
1. Go to **Settings** → **Network**
2. Click the gear icon next to your connection
3. Go to **Proxy** tab
4. Select **Manual**
5. Set **HTTP Proxy:** `192.168.1.100:8866`
6. Set **HTTPS Proxy:** `192.168.1.100:8866`
7. Click **Apply**

## Practical Examples

### Example 1: Windows Laptop on Wi-Fi

**Scenario:** Testing a web application from a Windows laptop while debugging with Fiddler on your main development machine.

**Setup:**
- Fiddler host: Desktop PC at `192.168.1.100`
- Remote device: Windows laptop at `192.168.1.150`
- Both connected to "HomeWiFi" network

**Steps:**
1. Configure Fiddler on desktop PC to allow remote connections
2. On Windows laptop, navigate to `http://192.168.1.100:8866`
3. Download and install Fiddler certificate
4. Set laptop proxy to `192.168.1.100:8866`
5. Test by browsing to any website—traffic should appear in Fiddler

### Example 2: Smart TV or IoT Device

**Scenario:** Analyzing network requests from a smart TV or IoT device.

**Setup:**
- Fiddler host: MacBook at `192.168.1.110`
- Remote device: Samsung Smart TV
- Home Wi-Fi network

**Steps:**
1. Configure Fiddler for remote connections
2. On Smart TV:
   - Access network settings (varies by manufacturer)
   - Find proxy or advanced network settings
   - Enter proxy: `192.168.1.110:8866`
3. Use TV's browser to download Fiddler certificate
4. Install certificate in TV's certificate store (if supported)
5. Monitor TV's app traffic in Fiddler

## Verification and Testing

After completing setup:

1. **Test basic connectivity:**
   ```bash
   # From remote device, ping Fiddler host
   ping 192.168.1.100
   ```

2. **Verify proxy configuration:**
   - Browse to `http://httpbin.org/ip` from remote device
   - The response should show your Fiddler host's public IP

3. **Check HTTPS traffic:**
   - Visit `https://httpbin.org/get` from remote device  
   - Verify the request appears in Fiddler's Live Traffic

4. **Test certificate installation:**
   - Visit `https://www.google.com` from remote device
   - Should load without certificate warnings
   - Traffic should be decrypted and visible in Fiddler

## Troubleshooting Common Issues

### Connection Refused Errors
- Verify Fiddler host firewall allows port 8866
- Check that "Allow remote devices to connect" is enabled
- Confirm both devices are on same network

### Certificate Errors  
- Ensure certificate is installed in correct certificate store
- Verify certificate is marked as "trusted"
- Try clearing browser cache/cookies on remote device

### No Traffic Appearing
- Double-check proxy settings on remote device
- Verify proxy address and port are correct
- Test with HTTP traffic first before HTTPS

### Network Connectivity Issues
- Confirm devices can ping each other
- Check for corporate firewalls blocking traffic
- Try different ports if 8866 is blocked

## Security Considerations

- Only use on trusted networks
- Remove proxy settings when finished testing
- Consider removing Fiddler certificate after testing
- Be aware that all HTTPS traffic is decrypted and visible
- Use strong authentication if exposing Fiddler to wider networks

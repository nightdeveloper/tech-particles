---
title: "Wi-fi"
metaTitle: ""
metaDescription: ""
---

### Basic commands

iwconfig - shows wifi options for interface

iwlist scan - scan for available networks


### Debug wpa_supplicant:

To run wpa_supplicant in foreground mode with debug

```
ps aux | grep wpa_

sudo kill *specify wpa_supplicant process ids*

wpa_supplicant -i wlan0 -c /etc/wpa_supplicant/wpa_supplicant.conf -B -D
```


---
title: "Camera"
metaTitle: ""
metaDescription: ""
---

### Installing camera

Look for pictures, in text it is:

 - Look at the cable, find blue part, it must faces the USB ports.
 - CSI port is the nearest port to the USB ports;
 - If your camera not being connected to the cable, connectors side have to lay on the schema side;

### Enabling CSI camera

- Use console tool:
```
sudo raspi-config

# Interfacing options -> camera -> enable

# Reboot
```

and reboot. OR enable it by editing config.txt, add in the 'all' section:

```
start_x=1
gpu_mem=256
```

### Disabling camera red LED

Edit config.txt, add this in the 'all' section:

```
disable_camera_led=1
```

### Camera diagnostic

```
pi@raspberry:~ $ vcgencmd get_camera
supported=1 detected=1
```

If supported = 0, try updating firmware. If detected = 1 check camera connection.

### Updating firmware

```
sudo rpi-update
```

### Test camera from console

Simple get image to file:
```
raspistill -o cam.jpg
```

Horizontal and vertical flip image:

```
raspistill -vf -hf -o cam2.jpg
```

---
title: "Basic Diagnostic"
metaTitle: ""
metaDescription: ""
---

### Determine debian version

```
pi@raspberrypi:~ $ cat /etc/debian_version
10.3
```

### Show kernel version

```
pi@raspberrypi:~ $ uname -a
Linux raspberrypi 4.19.97+ #1294 Thu Jan 30 13:10:54 GMT 2020 armv6l GNU/Linux
```

## Show hardware version

```
pi@raspberrypi:~ $ cat /proc/cpuinfo
processor       : 0
model name      : ARMv6-compatible processor rev 7 (v6l)
BogoMIPS        : 697.95
Features        : half thumb fastmult vfp edsp java tls
CPU implementer : 0x41
CPU architecture: 7
CPU variant     : 0x0
CPU part        : 0xb76
CPU revision    : 7

Hardware        : BCM2835
Revision        : 0010
Serial          : 0000000034b74d8f
Model           : Raspberry Pi Model B Plus Rev 1.2
```

## CPU info

- CPU frequency:
```
pi@raspberrypi:~ $ vcgencmd measure_clock arm
frequency(45)=700072000
```

- CPU Voltage:
```
pi@raspberrypi:~ $ vcgencmd measure_volts
volt=1.2000V
```

- Is CPU was under voltage and throttled now:
```
pi@raspberrypi:~ $ vcgencmd get_throttled
throttled=0x0
```

- Show CPU Temperature:
```
pi@raspberrypi:~ $ cat /sys/class/thermal/thermal_zone0/temp
40622
```

- Show GPU Temparature:
```
pi@raspberrypi:~ $ vcgencmd measure_temp
temp=40.1'C
```

- Get total memory:

GPU memory
```
vcgencmd get_mem gpu
```

CPU memory
```
vcgencmd get_mem arm
```

## Show boot messages

- Show kernel boot messages:

```
dmesg
```

- Show boot time messages:

```
vcdbg log msg
```


---
title: "Booting images from usb"
metaTitle: ""
metaDescription: ""
---

# Why USB?

Usb drives like external USB Flash / HDD / SSD are more long-term working devices, giving more speed, more stable.

# What do we need?

- SD card greater then 4Gb. Really we can use 512Mb+, but easier user 4GB+ (where can u find 512Mb Sd?..);

- Usb Flash (or any storage) 4Gb+ (I recommend 16/32Gb+ storage);

- Card reader with SD or microSD adapter for Raspberry Pi Card;

- Free device with USB port;

- Software to write image files to the external storage (Win32Imager / Usb Image Tool for Windows or any else;

# How we can do it?

1) Download latest Raspbian image from [official raspbian site](https://www.raspberrypi.org/downloads/raspberry-pi-os/);

2) Write same raspbian image to SD card and USB device;

3) Open SD card in file browser (first boot partition is FAT file system).
You will see many files, we are interested in the cmdline.txt, default content is:

console=serial0,115200 console=tty1 root=PARTUUID=738a4d67-02 rootfstype=ext4 elevator=deadline fsck.repair=yes rootwait quiet init=/usr/lib/raspi-config/init_resize.sh

Modify parameters:

- init - we can do resize from usb boot partition, this parameter won't read from raspbian;
- quiet - we need additional info on boot for debug;
- root - remove hardcoded partition UUID, set USB partition name - /dev/sda2.

Add parameters:

- rootdelay=2 for additional compatibility for wi-fi device;

4) Rename SD Card's volume name to 'USB-BOOT' (or any else other from BOOT);

>  On boot raspberry has two devices - /dev/mmcblk0 for SD card device and /dev/sda for first USB devices. Digit 2
> stands for second partition

# What we can do else for finishing tuning?

- place empty file 'ssh' on the USB storage boot partition for permitting ssh access by default;
- place wpa_supplicant.conf in the same partition for auto-connecting to wi-fi network

```
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=US

network={
     ssid="network.name"
     psk="plain.text.password"
     key_mgmt=WPA-PSK
}
```

# My partitions are not at the whole USB stoarge size!

Now we need resize root partition online:

```
pi@raspberrypi:~ $ sudo parted /dev/sda

GNU Parted 3.2
Using /dev/sda
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) *p*
Model: JetFlash Transcend 32GB (scsi)
Disk /dev/sda: 31.3GB
Sector size (logical/physical): 512B/512B
Partition Table: msdos
Disk Flags:

Number  Start   End     Size    Type     File system  Flags
 1      4194kB  273MB   268MB   primary  fat32        lba
 2      273MB   1850MB  1577MB  primary  ext4

(parted) *resizepart 2*
End?  [1850MB]? *31.3GB*
(parted) *p*
Model: JetFlash Transcend 32GB (scsi)
Disk /dev/sda: 31.3GB
Sector size (logical/physical): 512B/512B
Partition Table: msdos
Disk Flags:

Number  Start   End     Size    Type     File system  Flags
 1      4194kB  273MB   268MB   primary  fat32        lba
 2      273MB   31.3GB  31.0GB  primary  ext4

(parted) *quit*
Information: You may need to update /etc/fstab.

*pi@raspberrypi:~ $ resize2fs /dev/sda2*

resize2fs 1.44.5 (15-Dec-2018)
open: Permission denied while opening /dev/sda2
pi@raspberrypi:~ $ sudo resize2fs /dev/sda2
resize2fs 1.44.5 (15-Dec-2018)
Filesystem at /dev/sda2 is mounted on /; on-line resizing required
old_desc_blocks = 1, new_desc_blocks = 2
The filesystem on /dev/sda2 is now 7575040 (4k) blocks long.

pi@raspberrypi:~ $ df -h

Filesystem      Size  Used Avail Use% Mounted on
/dev/root        29G  1.3G   27G   5% /
devtmpfs        212M     0  212M   0% /dev
tmpfs           217M     0  217M   0% /dev/shm
tmpfs           217M  5.8M  211M   3% /run
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs           217M     0  217M   0% /sys/fs/cgroup
/dev/sda1       253M   53M  200M  21% /boot
tmpfs            44M     0   44M   0% /run/user/1000

```

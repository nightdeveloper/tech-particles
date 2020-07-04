---
title: "Creating Service"
metaTitle: ""
metaDescription: ""
---

## How to create service

### Creating basic service

Create service file my.service

```
[Unit]
Description=My service
After=network.target

[Service]
ExecStart=/usr/bin/python -u main.py
WorkingDirectory=/home/pi/myservice
StandardOutput=inherit
StandardError=inherit
Restart=always
User=pi

[Install]
WantedBy=multi-user.target
```

Copy service file to the /etc:

```
sudo cp my.service /etc/systemd/system/my.service
```

Update configuration:

```
sudo systemctl daemon-reload
```

Start service:

```
sudo systemctl start my
```

Stop service:

```
sudo systemctl stop my
```

### Start on a boot

Enable service for starting on a boot

```
sudo systemctl enable my
```

Check status:

```
sudo systemctl status my
```


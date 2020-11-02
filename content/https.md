---
title: "HTTPS with let's encrypt"
metaTitle: ""
metaDescription: ""
---

### Install certbot

```
sudo add-apt-repository ppa:certbot/certbot
sudo apt install certbot
sudo certbot certonly --standalone -d www.example.com

ls /etc/letsencrypt/live/example.com
```



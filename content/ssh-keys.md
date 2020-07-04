---
title: "Using SSH keys"
metaTitle: ""
metaDescription: ""
---

## Generate ssh keypair

### Using windows

- Download PuttyGen;
- Generate RSA keypair;
- Don't use password if you don't want to enter it;
- Save public and private key;
- Copy public key from window 'Public key for pasting into OpenSSH authorized_keys file';

## Using linux
- Run ssh-keygen;

```
root@raspi:~# ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa):
Created directory '/root/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /root/.ssh/id_rsa.
Your public key has been saved in /root/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:UHqwV9PaDA4XfT55XseC1e28X07V1ODpIr5Vy+hpi1g root@raspi-3-3
The key's randomart image is:
...
```

- Your public key - cat ~/.ssh/id_rsa.pub;
- Your private key - cat ~/.ssh/id_rsa;

## Create user

```
root@raspi-3-3:~# adduser test
Adding user `test' ...
Adding new group `test' (1001) ...
Adding new user `test' (1001) with group `test' ...
Creating home directory `/home/test' ...
Copying files from `/etc/skel' ...
New password:
Retype new password:
passwd: password updated successfully
Changing the user information for test
Enter the new value, or press ENTER for the default
        Full Name []: Test
        Room Number []:
        Work Phone []:
        Home Phone []:
        Other []:
Is the information correct? [Y/n] Y
```

### Adding sudo capability to user

```
usermod -aG sudo username
```

### Create ssh directory

```
install -d -m 700 /home/test/.ssh
sudo chmod 644 /home/test/.ssh/authorized_keys
sudo chown pi:pi /home/test/.ssh/authorized_keys
```

Copy public key to authorized_keys file

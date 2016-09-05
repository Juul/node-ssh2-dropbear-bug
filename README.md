
# How to replicate

Generate a new ssh key pair with OpenSSH:

```
ssh-keygen -t ssh-keygen -t rsa -N "" -f mykey
```

Start server on localhost port 222:

```
npm install
./server.js
```

Download, compile and run client (if you have a x86 64 bit system you can skip this):

```
wget "https://matt.ucc.asn.au/dropbear/releases/dropbear-2016.74.tar.bz2"
tar xvjf dropbear-2016.74.tar.bz2
cd dropbear-2016.74/
./configure
make
cp dbclient ../
cd ../
```

Connect to the server triggering the bug:

```
./dbclient -p 2222 localhost
```


apt update ; \
apt install -y wget ; \
hash -r ; \
wget -qO- https://github.com/creater0822/android-config/raw/master/termux/scripts/setup.sh | busybox ash -x

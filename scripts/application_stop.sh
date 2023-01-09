echo "stopping any existing node servers"
sudo systemctl stop EmailApi.service
sudo systemctl disable EmailApi.service
sudo rm -f /etc/systemd/system/EmailApi.service
echo "stopping any existing node servers"
STATUS="$(systemctl is-active EmailApi.service)"
if [ "${STATUS}" = "active" ]; then
    sudo systemctl stop EmailApi.service
    sudo systemctl disable EmailApi.service
    sudo rm -f /etc/systemd/system/EmailApi.service 
    echo "Execute your tasks ....."
fi

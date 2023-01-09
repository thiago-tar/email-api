#!/bin/bash

#give permission for everything in directory
sudo chmod -R 777 /home/ec2-user/deploy/api/email-api

#navigate into our working directory where we have all our github files
cd /home/ec2-user/deploy/api/email-api

echo "NPM INSTALL"
#install node modules
npm install
echo "NPM START"
#start our node app in the background
npm start
echo "Finish"
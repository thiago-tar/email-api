#create our working directory if it doesnt exist
DIR="/home/ec2-user/deploy/api/email-api"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir -p ${DIR}
fi
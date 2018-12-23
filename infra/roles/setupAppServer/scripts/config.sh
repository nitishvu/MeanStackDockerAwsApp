sudo apt update

sudo apt  install docker.io
sudo usermod -aG docker ubuntu
sudo service docker start
sudo apt install git
git clone https://github.com/nitishvu/MeanStackDockerAwsApp.git
cd MeanStackDockerAwsApp/app
docker-compose up -d
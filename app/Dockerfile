

FROM node:8

# install dependencies
WORKDIR /opt/app
COPY package.json package-lock.json* ./
RUN npm cache clean --force && npm install

# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY . /opt/app

# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
ENV PORT 80
EXPOSE 80

CMD [ "npm", "run", "start" ]

#export ANSIBLE_HOST_KEY_CHECKING=False
#docker build -t msgapp .
#docker run -p 3000:80 -d msgapp
#docker logs
#docker build -f mongoDocfile -t mongodb .
#docker build -f Dockerfile -t msgapp .
#docker images -a  |awk '{print $3}' |xargs docker rmi --force
#docker-compose up -d
#docker-compose ps
# docker-compose rm
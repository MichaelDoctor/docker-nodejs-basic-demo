# Docker + Node.js

Dockerize a Node.js app. 

Watch the full [Docker video](https://youtu.be/gAkwW2tuIqE) on YouTube or read the [Docker Tutorial](https://fireship.io/lessons/docker-basics-tutorial-nodejs/) on Fireship.io. 

# Docker
## Build an image
docker build -t mdoctor/fireship-docker-node . 

## Push and Pull docker after travis ci?

## Run with port forwarding from local:container
docker run -p 5000:8080 mdoctor/fireship-docker-node

## Share Data across multiple containers (Volumes)
docker volume create shared-stuff-example

### Create files that can be mounted to multiple containers
docker run \
--mount source=shared-stuff-example,target=/stuff

## Debugging
docker exec -it mdoctor/fireship-docker-node bash

# Docker Compose
### Run multiple containers at the same time
### 1 process per container
### Each key in services is a different container

## run containers
docker-compose up

## stop containers
docker-compose down

## push
docker push mdoctor/fireship-docker-node

## pull
docker pull mdoctor/fireship-docker-node
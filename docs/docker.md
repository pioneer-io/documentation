---
id: docker
title: Docker
---

The Pioneer application is run as a Docker network. By default, one Docker container is run per Pioneer component; however, each of the containers are available as individual images from [Docker Hub](https://hub.docker.com/repository/docker/ljdavies/pioneer), enabling you to scale components as required.

<div style={{textAlign: 'center'}}>
  <img src={require('./assets/docker_network.png').default} alt='Pioneer docker network' />
</div>

Additionally, the Scout and Compass components are available from [GitHub](https://github.com/pioneer-io).
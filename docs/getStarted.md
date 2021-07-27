---
id: intro
title: Getting Started
slug: /
hide_table_of_contents: true
---

# Pioneer
Welcome to Pioneer, a light-weight feature flag management tool.

Pioneer is a self-hosted application that can be installed on your own server and run with just a single command.

## Quick Start
To install and run Pioneer, [GitHub](https://cli.github.com/) and [Docker](https://docs.docker.com/get-docker/) are required. 

### Clone GitHub repository
```
git clone https://github.com/pioneer-io/pioneer.git
cd pioneer
```

### Run Docker
Running the `docker-compose.yml` file provided will create a single Docker network that runs all of the Pioneer application components. 

To start the Pioneer application:
```
docker-compose up
```

### Access the User Interface
Visit `http://localhost:3000` and start creating your own feature flags!

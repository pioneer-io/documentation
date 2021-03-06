---
id: install
title: Installation
hide_table_of_contents: true
---

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

<div style={{textAlign: 'center'}}>
  <img src={require('./assets/pioneer_startup.gif').default} alt='Pioneer startup process in terminal' />
</div>

### Access the User Interface
Visit `http://localhost:3000` and start creating your own feature flags!

<div style={{textAlign: 'center'}}>
  <img src={require('./assets/flag_dashboard.png').default} alt='Pioneer main dashboard' />
</div>

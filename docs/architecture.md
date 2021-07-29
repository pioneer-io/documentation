---
id: architecture
title: Architecture
---

**Diagram of system architecture**

The Pioneer application is comprised of multiple components:
* Compass - a React application that provides a GUI for users.
* PostgreSQL - database to store flag, log and SDK key data.
* NATS - messaging service to provide asynchronous, fault-tolerant communication between app components.
* Scout - daemon that serves feature flag data from Compass to connected SDK clients.

PostgreSQL and NATS are open-source software utilized by our application. Compass and Scout were created by our team and are available on [GitHub](https://github.com/pioneer-io) and as individual [Docker images](https://hub.docker.com/repository/docker/ljdavies/pioneer).
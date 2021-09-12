# dockerfile-example

[![Dependency Status](https://david-dm.org/guilhermedelemos/dockerfile-example.svg)](https://david-dm.org/guilhermedelemos/dockerfile-example)

## How to run

```
docker build -t nodejs-docker-example:v1.0.0 .
docker run -p 4000:8080 nodejs-docker-example:v1.0.0
curl http://localhost:4000/ping
```

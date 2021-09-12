const { v4: uuidv4 } = require('uuid');

var restify = require('restify');

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/ping', function (req, res, next) {
  res.send({
    id: uuidv4(),
    timestamp: new Date().toISOString(),
    msg: 'pong',
  });
  return next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
  console.log('Process: ', process.id);
});
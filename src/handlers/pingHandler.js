const pingHandler = {};

pingHandler.pong = function(request, response) {
  response.json({ping: "pong"});
};

module.exports = pingHandler;

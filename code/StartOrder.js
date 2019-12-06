var console = require('console')
module.exports.function = function startOrder (userRequest) {
  console.log(userRequest);
  if (userRequest && !userRequest.quantity) {
    userRequest.quantity = 1;
  }
  var order = {
    userRequests : [userRequest]
  }
  return order;
}

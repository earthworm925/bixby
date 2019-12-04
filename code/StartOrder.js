var console = require('console')
module.exports.function = function startOrder (userRequest) {
  console.log(userRequest);
  var order = {
    userRequests : [userRequest]
  }
  console.log(order);
  return order;
}

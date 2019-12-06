var console = require('console')

module.exports.function = function startOrder (userRequest) {
  console.log(userRequest);

  if (userRequest && !userRequest.quantity) {
    userRequest.quantity = 1;
    // 디폴트 값으로 정해도 되고, BuildUserRequest에서 인풋 Quantity 컨셉을 Required로
    // 해서 항상 되묻도록 해도됩니다.
  }
  var order = {
    userRequests : [userRequest]
  }
  return order;
}

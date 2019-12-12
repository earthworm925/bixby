var fail = require('fail');
var console = require('console');
module.exports.function = function addItem (order, userRequest) {

  if (!order.orderedItems) {
    order.orderedItems = [];
  }
  if (userRequest) {
    if (!userRequest.quantity) {
      userRequest.quantity = 1;
    }

    var itemExist = false;
    if (order.menuItems.find(item => {
      return item.productName.toString() == userRequest.productName.toString()
    })) {
      itemExist = true;
    }

    if (itemExist) {
      order.orderedItems.push({
        productName : userRequest.productName,
        quantity : userRequest.quantity
      })
      var cnt = 0;

      order.orderedItems.forEach( item => {
        cnt = cnt + item.quantity;
      })
      order.itemCount = cnt;
      console.log("item exists")
      throw fail.checkedError("Add success. show cart", "GoShowCart", {resultOrder:order});
    } else {
      order.errorMessage = '말씀하신 상품은 없네요'
      console.log("item NOT exists")
      throw fail.checkedError("Add failed. show menu", "GoShowMenu", {resultOrder:order});
    }
  }
  // should not be here
  return order;
}

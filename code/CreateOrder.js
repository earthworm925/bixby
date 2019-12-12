module.exports.function = function createOrder () {

  var menuItems = [
    {productName : '딸기 우유'},
    {productName : '커피 우유'},
    {productName : '초코 우유'},

    {productName : '딸기 사탕'},
    {productName : '커피 사탕'},
    //{productName : '초코 사탕'},

    {productName : '딸기 아이스크림'},
    {productName : '커피 아이스크림'},
    {productName : '초코 아이스크림'},
  ]

  return {
    itemCount : 0,
    menuItems : menuItems
  }
}

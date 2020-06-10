var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["ONE"] = 1] = "ONE";
    OrderStatus[OrderStatus["TWO"] = 2] = "TWO";
    OrderStatus[OrderStatus["THREE"] = 3] = "THREE";
})(OrderStatus || (OrderStatus = {}));
console.log(OrderStatus.ONE);
var one = OrderStatus.ONE;
let orderStatus = OrderStatus[one];
console.log(orderStatus);

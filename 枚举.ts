enum OrderStatus
{
    ONE=1,
    TWO,
    THREE
}

console.log(OrderStatus.ONE);
var one = OrderStatus.ONE;

let orderStatus = OrderStatus[one];
console.log(orderStatus);

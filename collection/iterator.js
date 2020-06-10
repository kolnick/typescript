const array = [233, "hello", true];
// 可以操作任何对象
for (let arrayElement in array) {
    console.log(arrayElement);
}
for (let arrayElement of array) {
    console.log(arrayElement);
}

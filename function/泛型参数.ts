/**
 * 泛型参数
 * @param arg
 * @constructor
 */
function Hello<T>(arg: T): T {
    return arg;
}

console.log(Hello(1))
console.log(Hello("2331"))


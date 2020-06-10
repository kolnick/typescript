/**
 * 有名字函数
 * @param x
 * @param y
 */
function add1(x, y) {
    return x + y;
}

console.log()

/**
 * TS函数
 * @param x
 * @param y
 *
 */
function add(x: number, y: number): number {
    return x + y;
}

console.log(add(1, 2));
/**
 * 给一个变量赋值一个函数类型
 * @param x
 * @param y
 */
/*
let add3 = (x: number, y: number) => number;
console.log(add3(3, 2));
*/

/**
 * 匿名函数
 * @param x
 * @param y
 */
const sum = function (x, y) {
    return x + y;
};

let sum1 = sum(1, 2);
console.log(sum1);

/**
 * 设置函数参数默认值
 * @param firstName
 * @param lastName? 表示可以0个或1个 未赋值用underfined;
 *
 */
function buildName(firstName: string = "cao", lastName?: string) {
    return firstName + " " + lastName;
}

console.log(buildName("33"));

/**
 * 剩余参数
 */
function buildName2(fistName: string, ...names: string[]) {
    return fistName + " " + names;
}

console.log(buildName2("1", "d", "e131", "dd"));



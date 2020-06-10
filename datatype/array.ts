/**
 *
 */
let defList: number[] = [1, 2, 5, 8, 10, 3];


let defList2: Array<number> = [1, 3, 8, 4, 2, 5, 10];
/**
 * 升序
 */
let numbers = defList2.sort((a, b) => a - b);

console.log(numbers);
/**
 * 倒序
 *  */
let numbers2 = defList2.sort((a, b) => b - a);
console.log(numbers2)
/**
 * 升序
 */
let numbers3 = defList2.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    }
    return 0;
});

console.log(numbers3);

/**
 * 倒序
 */
let numbers4 = defList2.sort((a, b) => {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
});

console.log(numbers4);
/**
 * 经过排序后会影响之前的List
 */
console.log(defList2);
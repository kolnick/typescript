let myArray: Array<string> = ["aa", "bb"];
let myArrayElement = myArray[0];
console.log(myArrayElement);

/**
 * 可索引的类型
 */
interface StringArray {
    [index: number]: string;
}

let strArr: StringArray = ["aa", "bb", "cc"];
console.log(strArr[0]);


/**
 * 只读可索引的类型-防止给索引赋值
 */
interface ReadOnlyStringArray {
    readonly  [index: number]: string;
}


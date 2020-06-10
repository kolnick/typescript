interface Point {
    /**
     * 只读属性
     */
    readonly x: number,
    readonly  y: number;
}

let p3: Point = {x: 100, y: 200};
console.log(p3.x);

/**
 * 只读数组
 */
let a2: number[] = [1, 2, 3, 4];
let readOnyArray2: ReadonlyArray<number> = a2;
console.log(readOnyArray2);


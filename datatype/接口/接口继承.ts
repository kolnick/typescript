/**
 *  和类一样，接口也可以相互继承。能够从一个接口里将成员复制到另一个接口里，可以更灵活地将接口分割到可重用的模块中.
 */

interface Shape {
    color: string
}

interface PenStroke {
    penWith: number;
}

/**
 *  可以多继承接口
 * */
interface Square extends Shape, PenStroke {
    sideLength: number;
}

let squre = <Square>{};
squre.color = 'blue';
squre.sideLength = 500;
squre.penWith = 300;
console.log(squre);


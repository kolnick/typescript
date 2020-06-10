type Age = number;

let age: Age = 0;

type AgeCreate = () => Age;


function getAge(arg: AgeCreate): Age {
    return arg();
}

type Man<T> = {
    age: T
};


let man: Man<5>;


function pluck<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
    return names.map(name => obj[name]);
}

interface PersonTest {
    readonly  name?: string,
    readonly age?: number;
}

const vvvv: PersonTest = {
    name: 'kolnick',
    age: 18
};


pluck(vvvv, ['name']);


let fun1 = (a: number) => 0;
let fun2 = (b: number, s: string) => 0;

fun2 = fun1;


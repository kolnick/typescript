namespace Validation {
    export interface StringValid {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const NumberRegexp = /^[0-9]+$/;


    export class LettersOnlyValidator implements StringValid {
        isAcceptable(s: string): boolean {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValid {
        isAcceptable(s: string): boolean {
            return NumberRegexp.test(s);
        }
    }

    let strings = ["hello", "9802"];

    let validator: { [s: string]: Validation.StringValid; } = {};

    validator["Zip code"] = new Validation.ZipCodeValidator();
    validator["Letters only"] = new Validation.LettersOnlyValidator();

    for (let s of strings) {
        for (let name in validator) {
            console.log(`"${s}" -${validator[name].isAcceptable(s)?"matches":"dose not match"}${name}`);
        }
    }
}
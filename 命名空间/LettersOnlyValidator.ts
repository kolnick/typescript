namespace Validation {

    const lettersRegexp = /^[A-Za-z]+$/;

    export class LettersOnlyValidator implements StringValid {
        isAcceptable(s: string): boolean {
            return lettersRegexp.test(s);
        }
    }

}



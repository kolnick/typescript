var Validation;
(function (Validation) {
    const lettersRegexp = /^[A-Za-z]+$/;
    const NumberRegexp = /^[0-9]+$/;
    class LettersOnlyValidator {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    class ZipCodeValidator {
        isAcceptable(s) {
            return NumberRegexp.test(s);
        }
    }
    Validation.ZipCodeValidator = ZipCodeValidator;
    let strings = ["hello", "9802"];
    let validator = {};
    validator["Zip code"] = new Validation.ZipCodeValidator();
    validator["Letters only"] = new Validation.LettersOnlyValidator();
    for (let s of strings) {
        for (let name in validator) {
            console.log(`"${s}" -${validator[name].isAcceptable(s) ? "matches" : "dose not match"}${name}`);
        }
    }
})(Validation || (Validation = {}));

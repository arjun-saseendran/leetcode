const plusOne = (digits) => {

    let num = Number(digits[digits.length - 1]);
    if (digits.length !== 1) {
        digits[digits.length - 1] = num + 1;

        return digits;

    } else {
        let text = digits.join().split('');
        text[0] = Number(text[0]);
        text[1] = Number(text[1]);
        if (typeof text[1] !== Number) {
            return [text[1], 1]
        }
        return text;
    }

}


const result = plusOne([1]);
console.log(result);
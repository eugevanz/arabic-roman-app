export function toRoman(arabic) {
    // Convert string to a number
    arabic = parseInt(arabic);
    // Possible roman values
    const romanNumList = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
    let roman = '', a;
        
    for (let key in romanNumList) {
        // Compare roman values to user input
        a = Math.floor(arabic / romanNumList[key]);
        if (a > 0) {
            for (let i = 0; i < a; i++) {
            roman += key;
            }
        }
        // Move to the next number in the user input
        arabic = arabic % romanNumList[key];
    }
    return roman;
}

export function fromRoman(roman) {
    let pre, curr;

    let char_to_int = function (c) {
        switch (c) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return -1;
        }
    }
    // First letter in user input
    let arabic = char_to_int(roman.charAt(0))

    for (let i = 1; i < roman.length; i++) {
        curr = char_to_int(roman.charAt(i));
        pre = char_to_int(roman.charAt(i-1));

        if (curr <= pre) {
            arabic += curr;
        } else {
            arabic = arabic - pre * 2 + curr;
        }
    }

    return arabic;
}
function amazon(str) {
    if (str.length === 1) {
        return str;
    }
    if (isCoded(str) === true) {
        return decode(str);
    }
    return code(str);
} 

function code(str) {
    var buffer = '';
    var current = str[0];
    var counter = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === current) {
            counter++;
            if (i === str.length - 1) {
                buffer += counter;
                buffer += str[i];
            }
        } else {
            buffer += counter;
            buffer += str[i - 1];
            counter = 1;
            current = str[i];
            if (i === str.length - 1) {
                buffer += counter;
                buffer += str[i];
            }
        }
    }
    return buffer;
}

function decode(str) {
    var buffer = '';
    var counter = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            if (counter === 0) {
                counter = parseInt(str[i]);
            } else {
                counter = counter * 10 + parseInt(str[i]);
            }
        } else {
            for (j = 0; j < counter; j++) {
                buffer += str[i];
            }
            counter = 0;
        }
    }
    return buffer;
}

function isCoded(buffer) {
    return /\d/.test(buffer);
}

//VERIFICATION
console.log(amazon('AAAABBBCCDAA')); //Return coded '4A3B2C1D2A'
console.log(amazon('4A3B2C1D2A')); //Return decoded 'AAAABBBCCDAA'
console.log(amazon('')); //Return a empty string
console.log(amazon('A')); //Return just one character
console.log(amazon('acbcba')); //Return '1a1c1b1c1b1a'
console.log(amazon('1a1c1b1c1b1a')); //Return 'acbcba'
console.log(amazon('@##$$%')); //Return '1@2#2$1%'
console.log(amazon('1@2#2$1%')); //Return '@##$$%'
console.log(amazon('aa   bbbcc')); //Return '2a3 3b2c'
console.log(amazon('2a3 3b2c')); //Return 'aa   bbbcc'
console.log(amazon('aAaBBb')); //Return '1a1A1a2B1b'
console.log(amazon('1a1A1a2B1b')); //Return 'aAaBBb'
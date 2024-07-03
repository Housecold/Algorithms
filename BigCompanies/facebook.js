function facebook(brackets) {
    var length = brackets.length;
    if (length % 2 != 0 || length === 0) {
        return false;
    }
    for (i = 0; i < length / 2; i++) {
        if (closing(brackets[i]) != brackets[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function closing(char) {
    if (char === '(') {
        return ')';
    } else if (char === '[') {
        return ']';
    } else if (char === '{') {
        return '}';
    }
    return '';
}

//VERIFICATION
console.log(facebook('([])')); //Return true
console.log(facebook('([)]')); //Return false
console.log(facebook('((()')); //Return false
console.log(facebook('()')); //Return true
console.log(facebook('{[()]}')); //Return true
console.log(facebook('{[()]')); //Return false
console.log(facebook('{[()]}}')); //Return false
console.log(facebook('{[()]')); //Return false
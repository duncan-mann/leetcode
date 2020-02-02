const reverseString = (s) => {

// 0 - 4    -> i[0] - i[length -1]
//  1 - 3    -> i[1] - i[length -2]
//  2 - 2    -> i[2] - i[length -3]

let len = s.length/2;

for ( let i = 0; i < len; i++) {
    let copy = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = copy;
}

return s;
}

let string = ["h","e","l","l","o"];

console.log(reverseString(string));
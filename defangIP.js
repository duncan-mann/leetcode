// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

var defangIPaddr = function(address) {
    let ans = '';

    for (let i = 0; i < address.length; i++) {
        console.log(typeof parseInt(address[i]));
        if (address[i] === "." ) {
            ans += '[.]';
        } else {
            ans += address[i];
        }
    }
    return ans;
};

console.log(defangIPaddr("255.100.50.0"));
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

var defangIPaddr = function(address) {
    let copy = address;
    for (let i = 0; i < address.length; i++) {
        if (typeof address[i] !== "number") {
            copy = address.substring(0, i) + '[.]' + address.substring(i + 1, address.length)
        }
    }
};
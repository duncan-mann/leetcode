var findNumbers = function(nums) {
    let res = 0;
    for (let each of nums) {
        if (each.toString().length % 2 === 0) {
            res++;
        }
    }

    return res;
};

console.log(findNumbers([12,345,2,6,7896]))
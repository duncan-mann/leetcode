const decompressRLElist = function(nums) {
    let ans = [];
    for (let i=0; i < nums.length; i++) {
        if (i % 2 !== 1 ) {
            for (let j=0; j<nums[i]; j++) {
                ans.push(nums[i+1]);
            }
        }
    }
    return ans;
}

console.log(decompressRLElist([42,39]));
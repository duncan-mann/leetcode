const decompressRLElist = function(nums) {
    let ans = [];
    for (let i=0; i < nums.length; i++) {
        if (nums[i] % 2 !==0) {
            for (let j=0; j<nums[i]; j++) {
                ans.push(nums[i+1]);
            }
        }
    }
    return ans;
}

console.log(decompressRLElist([1,2,3,4]));
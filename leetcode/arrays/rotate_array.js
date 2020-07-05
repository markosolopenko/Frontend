var rotate = function(nums, k) {
    for(let i = 0; i < k; i++) {
        let del = nums.pop();
        nums.unshift(del);
    }
    return nums;
};
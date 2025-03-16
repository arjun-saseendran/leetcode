
const sumIndicesWithKSetBits = (nums, k) => {
    let result = 0;
    for(let i = 0; i < nums.length; i++){
        const filtered = i.toString(2).split("").filter((item) => item === '1');
        if(filtered.length === k){
            result += nums[i];
        }
    }

    return result;


};
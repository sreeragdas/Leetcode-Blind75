/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
//sortNum[i+1] =index
//sortNum[i] +1 =array value 
let sortNum = [...new Set(nums)].sort((a,b) => a - b);

for (let i = 0; i < sortNum.length; i++) {
    if (sortNum[i] !== i) {
        return i;
    }
}
return sortNum.length;







};
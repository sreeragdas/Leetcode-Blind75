/**
 * @param {number[]} nums
 * @return {number}
 */


var longestConsecutive = function(nums) {
  let set = new Set(nums);
  let maxLen = 0;

 for (let num of set) {  
 

    // start of sequence
    if (!set.has(num - 1)) {
      let current = num;
      let streak = 1; // reset for each sequence

      while (set.has(current + 1)) {
        current++;
        streak++;
      }

      maxLen = Math.max(maxLen, streak);
    }
  }

  return maxLen;
};


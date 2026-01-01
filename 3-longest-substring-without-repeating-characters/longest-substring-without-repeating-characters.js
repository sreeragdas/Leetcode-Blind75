/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {


let max_window=[]
for (let i = 0; i < s.length; i++) {
      let current_window = [];
    for (let j = i; j < s.length; j++) {
        if (!current_window.includes(s[j])) {
            current_window.push(s[j]);
        } else {
            break;
        }
    }

    if (current_window.length > max_window.length) {
        max_window = [...current_window];
    }
}
return max_window.length; 
};
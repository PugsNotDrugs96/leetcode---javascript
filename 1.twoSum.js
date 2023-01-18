/**
 * Time complexity O(n^2)
 * Space complexity O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function solutionOne(nums, target) {
    for (var i = 0; i < nums.length; i++){
        for (var j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
    return("No match")
};

/**
 * Time complexity O(n)
 * Space complexity O(n)
 * @param {*} nums 
 * @param {*} target 
 * @returns {number[]}
 */
function solutionTwo(nums, target){
    var map = {};
    for (var i = 0; i < nums.length; i++){
        var value = nums[i];
        var complimentPair = target - value;
        if (map[complimentPair] !== undefined) {
            return [map[complimentPair], i];
        } else {
            map[value] = i
        }
    }
    return("No match")
}
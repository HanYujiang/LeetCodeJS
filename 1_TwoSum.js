/**

https://leetcode.com/problems/two-sum/

Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2

Tags:
  1. Array
  2. Hash Table

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var dic = {};
    for (var i=0; i<nums.length; i++) {
        var firstNumber = nums[i];
        var numberToFind = target - firstNumber;
        if (dic[numberToFind]) {
            return [dic[numberToFind], i+1]
        } else {
            dic[firstNumber] = i+1;
        }
    }
};

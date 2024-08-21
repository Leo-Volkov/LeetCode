// https://leetcode.com/submissions/detail/1363800909/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let sum = 0;
  Array.from(jewels).forEach(element => {
      for(let i = 0; i <= stones.length; i++) {
          if (stones[i] == element) {
              sum++;
          }
      }
  })

  return sum;
};

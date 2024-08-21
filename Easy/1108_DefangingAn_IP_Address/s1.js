// https://leetcode.com/problems/defanging-an-ip-address/submissions/1363852501/

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  return address.replaceAll(".","[.]")
};
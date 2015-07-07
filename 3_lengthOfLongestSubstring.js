var lengthOfLongestSubstring = function(s) {
  var len = s.length;
  if (len < 2) {
    return len;
  } else {
    var dic = {};
    var result = 1;
    var dis = 1;
    dic[s[0]] = 0;
    for (var i=1; i<len; i++) {
      var c = s[i];
      if (dic[c] || dic[c] === 0) {
        if (dis < i - dic[c]) {
          dis++;
        } else {
          dis = i - dic[c];
        }
      } else {
        dis++;
      }
      dic[c] = i;
      if (dis > result) {
        result = dis;
      }
    }
    return result;
  }
}

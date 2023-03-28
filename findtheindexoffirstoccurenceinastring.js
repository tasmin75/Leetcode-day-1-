
var strStr = function (haystack, needle) {
  if (!needle.length) return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (
      haystack[i] === needle[0] &&
      haystack.substr(i, needle.length) === needle
    ) {
      return i;
    }
  }
  return -1;
};

function checkForSpam(str) {
  "use strict";
  let strForCheck = str.toLowerCase();
  return strForCheck.includes(`spam`) || strForCheck.includes(`sale`);
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

//console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

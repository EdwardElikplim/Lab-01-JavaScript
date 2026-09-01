function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);

}
function reverse(str) {
    return str.split('').reverse().join('');
}
function isPalindrome(str) {
  const lower = str.toLowerCase();
  // converts everything to lowercase

  let cleaned = '';
  for (let i = 0; i < lower.length; i++) {
    //go through every character until every character has been checked
    const char = lower[i];
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
        //If the character is a letter from a to z OR a number from 0 to 9, keep it.
      cleaned += char; // add it onto our result string
    }
  }

  const reversed = cleaned.split('').reverse().join('');
  // reverses the cleaned string
  return cleaned === reversed;
}
function wordCount(str) {
  const trimmed = str.trim(); // removes spaces at the very start/end
  
  if (trimmed.length === 0) return 0; // if empty string has 0 words

  let count = 1; // if there's any text at all, that's at least 1 word
  let previousWasSpace = false;

  for (let i = 0; i < trimmed.length; i++) {
    const char = trimmed[i];

    if (char === ' ') {
      // only count a new word if we weren't ALREADY in a run of spaces
      // (this is what "collapsing consecutive spaces" means)
      if (!previousWasSpace) {
        count++;
      }
      previousWasSpace = true;
    } else {
      previousWasSpace = false;
    }
  }

  return count;
}
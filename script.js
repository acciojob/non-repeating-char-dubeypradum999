function firstNonRepeatedChar(s) {
    let charCount = {};

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }
   return null;
}

// Test cases
console.log(firstNonRepeatedChar('aabbcdd'));
console.log(firstNonRepeatedChar('aabbcc'));   
function repeatedWord(str) {
  const wordObj = {};
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (wordObj[word]) {
      return word;
    }
    wordObj[word] = true;
  }
}

module.exports = { repeatedWord };

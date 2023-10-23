function reverseWordsInSentence(sentence) {
  // Split the sentence into words
  const words = sentence.split(" ");

  // Reverse each word and store them in an array
  const reversedWords = words.map((word) => reverseWord(word));

  // Join the reversed words to form the final reversed sentence
  const reversedSentence = reversedWords.join(" ");

  return reversedSentence;
}

function reverseWord(word) {
  // Convert the word to an array of characters, reverse it, and join it back to a string
  return word.split("").reverse().join("");
}

// Example usage:
const inputSentence = "This is a sunny day ";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log("Reversed Sentence:", reversedSentence);

function reverseWords(sentence) {
   
    const words = sentence.split(' ');

    
    const reversedSentence = words.map(word => reverseWord(word)).join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}

const inputSentence = "This is a sunny day";
const reversed = reverseWords(inputSentence);
console.log(reversed); // Output: "sihT si a ynnus yad"

const word = "extravaganza";
const lastFour = word.slice(-4);
console.log(lastFour); 

const food = "The quick fox jumped over the lazy dog";
const insertString = "eat";
const newFood = food.slice(0, 4) + insertString + food.slice(4);
console.log(newFood);

const story = "The quick brown fox jumps over the lazy dog";

const countOccurrences = (str, target) => {
  let count = 0;
  let index = 0;
  while ((index = str.toLowerCase().indexOf(target.toLowerCase(), index)) !== -1) {
    count++;
    index += target.length;
  }
  return count;
};

const theCount = countOccurrences(story, "the");
const brownCount = countOccurrences(story, "brown");

console.log("Count of 'the':", theCount);
console.log("Count of 'brown':", brownCount); 

const sentence1 = "The pupils are reading in the library";
const sentence2 = "The child was sitting on the table before it fell";

const findWord = (str, target) => {
  if (str.toLowerCase().includes(target.toLowerCase())) {
    return target;
  } else {
    return null;
  }
};

const areWord = findWord(sentence1, "are");
const sittingWord = findWord(sentence2, "sitting");

console.log("Found 'are':", areWord); 
console.log("Found 'sitting':", sittingWord);

const adj1 = "wonderful";
const adj2 = "amazing";
const adj3 = "UndERneath";
const phrase = "A wonderful world";

const upperCaseadj1= adj1.toUpperCase();
const lowerCaseadj2 = adj2.toLowerCase();
const lowerCaseadj3 = adj3.toLowerCase();

const titleCasePhrase = phrase
  .toLowerCase()
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log("UpperCase:", upperCaseadj1); 
console.log("LowerCase amazing:", lowerCaseadj2); 
console.log("LowerCase UndERneath:", lowerCaseadj3); 
console.log("Title Case:", titleCasePhrase); 
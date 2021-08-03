let word = "trybe";
let ending = "be";

let wordSplit = word.split("");
let endingSplit = ending.split("");

let slicer = -1 * endingSplit.length;
let wordEnding = wordSplit.slice(slicer).join("");

if (wordEnding === ending) {
  console.log(true);
} else {
  console.log(false);
}

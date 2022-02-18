
let outputText = document.getElementById("checkerOutput");
let wordToCheck = document.getElementById("checkWord");


function isPalindrome(){
    const reverser  = str => str.split("").reverse().join("");
    //const phraseReverser  = str => str.split("").reverse().join("").split(" ").join("");  will be using the commented out code to check is phrases are palindromes
    let reverseWordNumberToCheck = reverser(wordToCheck.value);
    //let reversePhraseToCheck = phraseReverser(wordToCheck.value);
    //let reversePhrase = wordToCheck.value.split(" ");

    if(!reverseWordNumberToCheck.match(/^\s*$/)){
        wordToCheck.value == reverseWordNumberToCheck ? outputText.innerText = wordToCheck.value +" " + "is a palindrome" : outputText.innerText = wordToCheck.value +" " + "is not a palindrome";    
    }
    else{
        alert("Please enter a word/number to check whether it is a palindrome or not");
        wordToCheck.value=""; //clear whitespace before focus
        wordToCheck.focus();
    }
    
}

function clearEverything(){
    wordToCheck.value="";
    outputText.innerText="";

}
(function(){

let word = "Cheese";
let letter = "e"

let letterCount = (word.match(new RegExp(letter, "g")) || []).length;


if (letterCount>0) { console.log("Yeah, the letter " + letter + " exists " +  letterCount  +" times in my word")
    
} else { console.log("Nope, that letter doesn't exist in my word.")
    
}


document.write("hello from hangman-lite.js");


})();
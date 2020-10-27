//console.log("Working!")

/* ======= String and Number   ======= */


const firstNumber = +"5"; //+prompt("Введіть перше число!");
const secondNumber = parseInt("5"); //parseInt(prompt("Введіть друге число!"));

let finalResult = firstNumber + secondNumber;

document.write( finalResult );
document.write( "Hello " + "World " + "i'am" + ( parseInt(" 10") + 5) );
document.write( parseInt("555") + " | " + parseInt("555asdas") + " | " + parseInt("asd555"));


let numberOne = Number("56");
let numberTwo = Number("12");
console.log( numberOne + numberTwo );

console.log(
	1.4555545.toFixed(3), 
	parseFloat(1.4555545.toFixed(3)), 
	parseInt(1.4555545.toFixed(3))
);


let textString = "      Lorem ipsum dolor sit #tag amet, consectetur adipiscing sit elit, sed do #tag eiusmod tempor incididunt ut labore #taget dolore magna aliqua.     ";
console.log("Text length is: ", textString.length);
console.log(textString.charAt(4));

let mathWord = "sit";
console.log( textString.match(mathWord) );
console.log( [...textString.matchAll(mathWord)] );


textString = textString.replaceAll(mathWord, "CAT");
console.log(textString);

console.log(textString.trim(), textString.trimLeft());

let splitText = textString.split("#tag");
console.log(splitText);

let splitByCharacters = textString.split("");
console.log(splitByCharacters);

document.write( splitByCharacters.join("-") )

let textSubstring = textString.substr(textString.length - 10, textString.length - 1);
console.log(textSubstring);


let indexOfCharacter = textString.indexOf("ipsum");
console.log(indexOfCharacter);


// amet
// tempor

let wordsAa = "amet";
let wordsBb = "tempor";
let searchWords = textString.substr( textString.indexOf(wordsAa),  textString.indexOf(wordsBb));

console.log(searchWords);

let countOfExcerpt = 30;

let finalExcerpt = textString.trim().substr(0, countOfExcerpt) + "...  | Read more";
document.write(finalExcerpt);


let user = {
	userName: "John",
	userCity: "LA",
	userAge: 30
}

let stringTemplate = `Hello my name: ${ user.userName }
i live in: ${ user.userCity }
i am: ${ user.userAge }  year old`;

document.write( stringTemplate );


let sringEnter = "some \"long\" text \n second long text \
another long text "; 
console.log(sringEnter)

let regExp = new RegExp(/do+l/, "i");
let resault = textString.match(regExp);
console.log( resault );


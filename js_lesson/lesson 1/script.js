//console.log("Working!")

/* ======= String and Number   ======= */


/*const firstNumber = +"5"; //+prompt("Введіть перше число!");
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

*/

/*============== Array =================*/


/*let myArray = ["Bob", "Sara", "John"];
console.log(myArray[2])


myArray[1] = "Nensy";

let arrayName2 = ["Вова", "Вася"];
let finalArray = [...myArray, ...arrayName2];

console.log(myArray, myArray[1], myArray.length, finalArray);

let multyArray = [
	[1, 45, 56],
	[34, 56, 67],
	[33, 5, 90]
];

console.log( multyArray[1][2] );*/

let mySecondArray = [];
mySecondArray.push("John");
mySecondArray.push("Stephanie");
mySecondArray.push("Hermione");
//mySecondArray.push(prompt("введіть своє ім'я"));
mySecondArray.push("Вася");

console.log(mySecondArray)

mySecondArray.pop();
console.log(mySecondArray)

mySecondArray.unshift("Elin");
console.log(mySecondArray)

mySecondArray.unshift("Tiana");
console.log(mySecondArray)

mySecondArray.shift();
console.log(mySecondArray)

mySecondArray.splice(1, 2, "Dart Vaider", "Erika", "Maryam", "Rush", "Erika");
console.log(mySecondArray)


let shortArray = mySecondArray.slice(3, 5);
console.log(shortArray)

let searchPerson = mySecondArray.find( name => {
	return name == "Erika";
})
let fileredArray = mySecondArray.filter( name => {
	return name == "Erika";
})


mySecondArray = mySecondArray.map( name => {
	return name + " A Pirate name";
});
mySecondArray.forEach( (name, index) => {
	document.write(`${index} Name is: ${name} || `);
}) 


console.log(searchPerson, fileredArray)


let numberArray = [2, 345, 5, 23, 89, 23, 80, 5, 1];

let rearangedArray = numberArray.sort((a, b) => {
	return a - b;
});
console.log(rearangedArray);











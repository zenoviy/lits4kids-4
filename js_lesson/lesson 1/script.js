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
/*
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
console.log(rearangedArray);*/

//  ===================   Loop  Цикл  =========================  ///

// for     for of     for in        ( умова кінцевості, внутрішшня змінна)  приводить змінну до умови кінечності
// while      ( умова ) доки умова  != true   Infinity
// do while     do буде виконане полюбому 1 раз

/*const nameArr = [ "Elin", "Dart Vaider", "Erika", "Maryam", "Rush", "Erika", "Hermione" ];
const multyLayerArray = [  
	[1, 45, 56],
	[34, 56, 67, 34, 45, 78, 12, 67],
	[33, 5, 90],
	["Hello", "i", "am", "a", "automated", "script"]
];
multyLayerArray[1][2];
const object = {
	name: "Erika",
	state: "Lviv",
	age: 23
}

// break 
// continue
for(let i = 10; i > 0; i--){
	if( i < 5 && i > 2 ) continue;
	//if( i < 5 && i > 2 ) break;
	document.write(i)
}

for(let i = 0; i <= 10; i++){
	for(let j = 0; j <=10; j++){
		console.log(`${i} x ${j} = ${ i * j }` );
	}
}

for(let a = 0; a < multyLayerArray.length; a++){
	for(let m = 0; m < multyLayerArray[a].length; m++){
		console.log( multyLayerArray[a][m], "Mukty")
	}
}


for(let i = 0; i < nameArr.length; i++){
	//console.log( nameArr[i] )
	document.write( nameArr[i]  + " > ")
}


for(let item in object){
	console.log(item, object[item])
}

for(let name of nameArr){
	console.log(name, nameArr.indexOf(name))
}

///   while

let someItarableNumber = 20;
while(someItarableNumber > 10) {
	someItarableNumber = Math.floor(Math.random() * 105 + 1);
	//document.write(someItarableNumber + " || ")
}

let someDoWhileNumber = 0;
let randomNumberArr = [];
do{
	//document.write("I am Default DO WHILE: " + someDoWhileNumber + " || ");
	someDoWhileNumber = Math.floor(Math.random() * 105 + 1);
	document.write(someDoWhileNumber + " || ")
	randomNumberArr.push(someDoWhileNumber)
} while (someDoWhileNumber > 10)


console.log(randomNumberArr, " < Random Array")

let myNumber = 1;

//  i++		i--
//  ++i   --i 

myNumber += 1;
console.log( myNumber, ++myNumber )

//console.log(myNumber)*/



//  ===================   Logic    goTo  =========================  ///

let a = -50;
let b = 10;
let c = 45;

let trully = true;
let falsy = false;
/*if( falsy ){
	document.write("Hello")
} else if( !falsy ){
	document.write("I am FALSY")
} else {
	document.write("I am ELSE")
}*/


//  >   <    <=    >=

if(a > b){
	if( a > c ) document.write( a + " A is the greates" )
	else document.write( c + " C is the greates" )
} else if( b > c ){
		// B is the gratest
		document.write( b + " B is the greates" )
} else {
	// C is the gratest
	document.write( c + " C is the greates" )
}

//  ==   ===   !   !=   !==  

// &&    ||

if( (5 + 10) >= 10) {
	document.write("(5 + 10) >= 10")
}

if( true && true && true && true ){
	document.write(" I am a true branch  || ")
}


if( true && true && true && false ){
	document.write(" I am unricheble code becourse FALSE ")
} else {
	document.write(" Failure branch || ")
}



if( false || false || true || false ){
	document.write(" I am works becourse i'm using << OR >> || ")
} else {
	document.write(" Failure branch || ")
}



if( (a > b) && (a > c) ){ 
	document.write( a + " A is the greates" )
} else if( b > c && b > a){
	document.write( b + " B is the greates" )
} else {
	document.write( c + " C is the greates" )
}


const calcNumberA = parseInt(prompt("Введіть число A"));
const calcNumberB =  parseInt(prompt("Введіть число B", 0));
const mathLogic = prompt("Введіть Дію над числом A і B  може бути + - * /", "+");

if( (!calcNumberA && calcNumberA != 0) || !calcNumberB && calcNumberB != 0 ){
	alert("Неправильно введені дані мають бути числа")
} else if(mathLogic != "+" && mathLogic != "-" && mathLogic != "*" && mathLogic != "/" ){
	alert("Неправидьна дія має бути + - * /")
}
else {
	let mathResult = 0;
	if( mathLogic === "+") {
		mathResult = calcNumberA + calcNumberB;
	} else if(mathLogic === "-") {
		mathResult = calcNumberA - calcNumberB;
	} else if(mathLogic === "*") {
		mathResult = calcNumberA * calcNumberB;;
	} else if(mathLogic === "/") {
		mathResult = calcNumberA / calcNumberB;
	}
	alert( `${calcNumberA} ${mathLogic} ${calcNumberB} = ${mathResult}  || Оператор ${ mathLogic }` );
}






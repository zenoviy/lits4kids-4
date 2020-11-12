/*  Functions   */

//  DRY   Dont Repeat Yourself
//  Виклик функцій багато разів 
//  Функція - універсальний виконавець 
//  SOLID   - 1 функція - 1 дія   // 30 рядків +-10 
//  функції приймають в себе значення  і   повертають якийсь результат ЗАВЖДИ   


//  Функція деклараційна
//  Функція вираз
//  ES6  - Arrow function 
//  IIFE   - функції самовиклику   Immediately Invoked Function Expression

console.log(myFirstFunction())



function myFirstFunction() {        //  Declaration function 
    return "hello"
}


/*  Function program Declaration */

runSum(13, 6, true);
runSum(45, 21, false);
runSum(56, 33, 56);
runSum(78, 45, 45);

function sumOfTwoNumber(a, b) {
    let result = a + b;
    return result
}
function logResult(finalResult){
    console.log(finalResult)
    return finalResult
}
function runSum(a, b = 10){
    console.log( arguments )
    let sumResult = sumOfTwoNumber(a, b);
    return logResult(sumResult)
}

/*  Expession function   вираз */

const myExpressionFunction = function (a, b) {
    return logResult(a * b + " Expression")
}
myExpressionFunction(45, 45)


/*  ES 6  Arrow Functions  */

const myArrowFunction = (a, b) => {
    return logResult(a - b + " i am Arrow")
} 
myArrowFunction(10, 3);


const simpleArrowFunction = a => logResult(a + " => instant function call");



//console.log( sumOfTwoNumber(5, 4) )

/*   IIFE    */
/*(function(a, b){
    logResult(a / b + " IIFE");
    myArrowFunction(100, 3);
})(13, 15)*/


/**/
// ===================================================  Function Calculator =========================================
(function(){
	initCalculation()
	function initCalculation(){
		// debugger
		let userData = getDataFromUser();
		let validationResult = inputValidation(userData);
		if( validationResult[0] ){
			let calculationInfo = calculation(userData);
			/*displayResult(validationResult[0], calculationInfo);
			if(confirm("Continue calculation?")){
				initCalculation()
			}*/
			displayAndReuseCalculation(initCalculation, validationResult[0], calculationInfo)
		} else {
			/*displayResult(validationResult[0], validationResult[1]);
			if(confirm("Continue calculation?")){
				initCalculation()
			}*/
			displayAndReuseCalculation(initCalculation, validationResult[0], validationResult[1])
		}
	}
})()


function displayAndReuseCalculation(callback, status, information){
	displayResult(status, information);
	if(confirm("Continue calculation?")){
		callback()
	}
}

function getDataFromUser(){
	const calcNumberA = parseInt(prompt("Введіть число A"));
	const calcNumberB = parseInt(prompt("Введіть число B", 0));
	const mathLogic = prompt("Введіть Дію над числом A і B  може бути + - * /", "+");

	return [calcNumberA, calcNumberB, mathLogic]
}




function inputValidation(inputArray){
	let [calcNumberA, calcNumberB, mathLogic] = inputArray;
	
	//console.log(calcNumberA, calcNumberA, mathLogic, " < Test")
	if( (!calcNumberA && calcNumberA != 0) || !calcNumberB && calcNumberB != 0 ){
		return [false, "Неправильно введені дані мають бути числа"]
	} else if(mathLogic != "+" && mathLogic != "-" && mathLogic != "*" && mathLogic != "/" ){
		return [false, "Неправидьна дія має бути + - * /"]
	} else if( mathLogic === "/" && calcNumberB === 0){
		return [false, "На 0 не можна ділити!!!"]
	}
	return [true, "Все гаразд з валідацією"]
}




function calculation(inputArray) {
	let [calcNumberA, calcNumberB, mathLogic] = inputArray;

	let mathResult = 0;
	if( mathLogic === "+") {
		mathResult = calcNumberA + calcNumberB;
	} else if(mathLogic === "-") {
		mathResult = calcNumberA - calcNumberB;
	} else if(mathLogic === "*") {
		mathResult = calcNumberA * calcNumberB;
	} else if(mathLogic === "/") {
		mathResult = calcNumberA / calcNumberB;
	}
	return [calcNumberA, mathLogic, calcNumberB, mathResult]
}




function displayResult(status, information){
	if( status && information ) {
		const [calcNumberA, mathLogic, calcNumberB, mathResult] = information;
		alert( `${calcNumberA} ${mathLogic} ${calcNumberB} = ${mathResult}  || Оператор ${ mathLogic }` );	
	} else {
		alert(information)
	}
}

// ============================================================================================



/*  Callback  */

/*
function callback(a, b){
	return console.log(a + b + " I am callback")
}

function mainFunction(a, b, callback, secondCallback ){

	a = a + b;
	b = a * b;

	secondCallback(a, b)
	return callback(a, b)
}



mainFunction( 4, 5, callback, (a, b) => {
	alert(a - b + "  innerCallback")
})*/


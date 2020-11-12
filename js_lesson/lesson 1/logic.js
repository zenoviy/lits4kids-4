//  ===================   Logic    goTo  =========================  ///
/*
let a = -50;
let b = 10;
let c = 45;

let trully = true;
let falsy = false;*/
/*if( falsy ){
	document.write("Hello")
} else if( !falsy ){
	document.write("I am FALSY")
} else {
	document.write("I am ELSE")
}*/


//  >   <    <=    >=

/*
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

//  &&    ||

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
}*/
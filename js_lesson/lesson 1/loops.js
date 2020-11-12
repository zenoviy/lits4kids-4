//  ===================   Loop  Цикл  =========================  ///

// for     for of     for in        ( умова кінцевості, внутрішшня змінна)  приводить змінну до умови кінечності
// while      ( умова ) доки умова  != true   Infinity
// do while     do буде виконане полюбому 1 раз

/*

const nameArr = [ "Elin", "Dart Vaider", "Erika", "Maryam", "Rush", "Erika", "Hermione" ];
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


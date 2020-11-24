/* Об'єкти в JS Об'єкти потрібні для зберігання даних (часто в масивах) */

/*
    контейнер для нашої інформації
    дуже детальний  
    структура даних - дерево

    запит до об'єкта через . 

    значень  - любого типу
    методи  - внутрішні функції
*/

/*let key = "age";


const userObject = {
    name : "John",
    age : 34,
    myCars : ['car-1', 'car-2'],
    myTask : {
        prymeTask: "Must work",
        secondary: "must go home"
    }
};

console.log( userObject.name,  userObject[key] )

userObject.city = "Lviv";
userObject.city = "New-York";

console.log(userObject)

console.log( userObject.myTask.prymeTask )*/

const userMainData = {
    name : "John",
    age : 25,
    showMyName(){
        let nameText = `My name is ${ this.name }`;
        console.log( nameText, this )
        this.showDetailInformation()
    },
    showMyAge : function() {
        let ageText = `My age is ${ this.age }`;
        console.log( ageText )
    },
    showDetailInformation(){
        let detailText = `Hi My age is ${ this.name } and My name is ${ this.age }`;
        console.log( detailText )
    }
}
//console.log(userMainData.showMyName())

const exampleMethods = {
    grade : 100,
    regFunction(){
        console.log(this)
    },
    arrowFunction : () => {
        console.log(this)
    }
}

exampleMethods.regFunction()
exampleMethods.arrowFunction()

const userDetailInformation = {
    work : {
        company : "MIT",
        position : "Developer",
        scope : "Front-end",
        details : {
            startDate : "2017/03/20",
            sallary : 2100,
            daylyDuty : {
                toDo : "Write some new application features",
                workBreak : "do some coffe"
            },
            risePrice(newPrice){
                this.sallary = newPrice;
                console.log(`Worker sallery was raised up to ${this.sallary} $`)
            },
            showWorkInfo(){
                let companyName = this.work.company;
                let position = this.work.position;
                let scope = this.work.scope;
                let startDate = this.work.details.startDate;

                let infoText = `Company Name: ${ companyName }; position: ${scope} ${position}; since: ${startDate}`;
                console.log(infoText)
            }
        }
    },
    cars : ["volvo", "mersedes"],
    city : "Los Angeles",
    country : "USA",
    showSallary(){
        const sallary = this.work.details.sallary;
        console.log(`Worker: ${this.name}  sallery is: ${sallary} $`);
    }
}

/*userDetailInformation.showSallary()
userDetailInformation.work.details.risePrice(3000)

userDetailInformation.showSallary()
userDetailInformation.work.details.showWorkInfo.call(userDetailInformation)*/

//  call  // apply bind



/*const completeUser = Object.assign(userMainData, exampleMethods, userDetailInformation);

completeUser.showSallary()
console.log(completeUser)*/



/* присвоєння об'єкта до змінної - це насправді посилання з доступом до цього об'єкта а не новий об'єкт */
/*const newObject = new Object({name: "test", value: 3});
const linkToObject = newObject;
const trueCopy = Object.assign({}, newObject);

console.log(newObject, linkToObject)

linkToObject.name = "Changed";
linkToObject.doSomething = function(a, b) {
    console.log(a + b);
}
console.log(newObject, linkToObject, trueCopy)


//Object.freeze(linkToObject);   // запобігає додаванню або зміні будь яких даних
Object.seal(linkToObject);

linkToObject.name = "Try to change";
linkToObject.newItem = 34;


console.log(newObject, linkToObject, trueCopy)
console.log(  Object.isFrozen(linkToObject) ) 

*/


/* Конструктори Об'єктів  */

/*
function CreateUserOfFunction(props) {
    this.name = (props.name)? props.name : "Unknown user" ;
    this.age = (props.age)? props.age :
    (!props.name)? 5 : 10  ;
    this.daylyDuty = (props.daylyDuty)? props.daylyDuty : {
        toDo : "Write todo!",
        must : "fill all empty fields!" 
    };
    this.city = (props.city)? props.city : "Unknown City";

    this.showName = function(){
        console.log(`My name is: ${this.name}`)
    }
}
CreateUserOfFunction.prototype.showDuty = function(){
    let dutyText = `1) ${this.daylyDuty.must} 2) ${this.daylyDuty.toDo} `;
    console.log(dutyText)
}
CreateUserOfFunction.prototype.moveToCity = function(city){
    if( !city ){ return }

    let prevCity = this.city;
    this.city = city;
    console.log(`Move from ${prevCity} to ${this.city}`)
} 


const user1 = new CreateUserOfFunction({
    name : "Alex",
    age : 23,
    city : "LA", 
    daylyDuty : {
        toDo : "Go to te work",
        must : "write his own project" 
    }
})

const user2 = new CreateUserOfFunction({
    name : "Homer",
    age : 50,
    city : "Springfield", 
    daylyDuty : {
        toDo : "Wake up",
        must : "Wath TV" 
    }
})

const user3 = new CreateUserOfFunction({name: "Василь"})
console.log(user1, user2, user3)*/


/*  ES - 6   Class */

/*class CreateNewUser {
    constructor(props){
        this.name = (props.name)? props.name : "Unknown";
        this.age = (props.age)? props.age : "Unknown";
    }
    showName (){
        console.log(`My name is: ${this.name}`)
    }
    get getUserData(){
        let userText = `Name is: ${this.name}, Age is: ${this.age}`;
        console.log(userText)
    }
    set setUseAge(age){
        this.age = (age) ? age : this.age;
    }
}
CreateNewUser.prototype.showAge = function() {
    console.log(`My age is: ${this.age}`)
}


const user4 = new CreateNewUser({
    name : "John", 
    age :34
})*/


const listOfAvailebleName = ["Stephanie", "Hermione", "Вася", "Tiana", "Dart Vaider", "Erika", "Maryam", "Rush", "Erika"];
const listOfAvailebleWork = ["MIT", "Google", "Facebook", "SpaceX", "Boeing", "Nasa", "Рукавичка"];

const allUsers = [];
const maxUserNumber = 555;

class CreateUserByNumber {
    constructor(props){
        this.name = (props.name) ? props.name : "NoName";
        this.work = (props.work) ? props.work : "Unemployed";
    }
    displayUserOnScreen(){
        let userInfoText = ` Name: ${ this.name } work at ${ this.work }  ||`;
        document.write(userInfoText)
    }
}


for(let i = 0; i < maxUserNumber; i++){
    let randomNameIndex = Math.floor(Math.random() * listOfAvailebleName.length);
    let randomWorkIndex = Math.floor(Math.random() * listOfAvailebleWork.length + 1);

    let newUse = new CreateUserByNumber ({
        name : listOfAvailebleName[randomNameIndex],
        work : listOfAvailebleWork[randomWorkIndex]
    })
    allUsers.push(newUse)
}

console.log(allUsers)

for(let userItem of allUsers) {
    userItem.displayUserOnScreen()
    //alert("User was created!")
}










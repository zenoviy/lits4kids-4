console.log("Async ")


/*
  Works with Application Inteface  API

  XMLHttpRequest
  fetch()


    function fetchSomething(){
        return new Promise( ( re))
    }
function fetchSomething(val){
    return new Promise( ( resolve, reject) => {
        if(val) {
            resolve("resolve")
        }
    })
}
async function callPromise(){
    let promise = fetchSomething(5)
    promise.then(res => console.log(res), rej => console.log(srej))
}
 */



 const httpRequest = new XMLHttpRequest();
 const _URL_DUMMY_DATA = "https://jsonplaceholder.typicode.com/photos";

console.log(0)

httpRequest.addEventListener("load", (e) => {
    console.log(1)
   
    console.log( httpRequest )
    let transformToObject = JSON.parse(httpRequest.responseText)
    console.log( transformToObject )
})

console.log(2)


httpRequest.open("GET", _URL_DUMMY_DATA)
httpRequest.send();

console.log(3)


/* ======= fetch ========= */
const _USER_API_DUMMY = "https://jsonplaceholder.typicode.com/users";
const userArea = document.querySelector("#user-area");


initRequest()
async function initRequest() {
    let userObjects = fetchRequest(_USER_API_DUMMY);
    userObjects
    .then(res => res.json())
    .then(res => {
        console.log(res, " < response")
        displayUser(userArea, res);
    })
}

function displayUser(selector, allUsers){
    let userText = ""; 
    for(let user of allUsers) {
         userText += ` <li><h3>${user.username}</h3></li>`;
    }
    selector.innerHTML = userText;
}

function fetchRequest(url){
    return fetch(url)
}



/* ==============  Promise =============
 */
let myFirstPromise = new Promise((resolve, reject) => {
    // Викликаємо resolve(...), коли те, що ми робили асинхронно, успішно виконалось, і reject(...), якщо неуспішно.
    // В цьому прикладі ми використовуємо setTimeout(...) для симуляції асинхронного коду.
    // В житті ви, ймовірно, використовуватиме щось на кшталт XHR або HTML5 API.
    setTimeout( function() {
      resolve("Успіх!")  // Є! Все пройшло добре!
    }, 2050)
  })
  
  myFirstPromise.then((successMessage) => {
    // successMessage - це те, що ми передаємо у наведену вище функцію resolve(...).
    // Це не обов'язково має бути рядок, але, якщо це повідомлення про успіх, то, мабуть, це буде він.
    console.log("Є! " + successMessage)
  });



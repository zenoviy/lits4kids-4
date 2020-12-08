
/*
Глобальне сховище додатка зберігаються усі змінні і об'єкти
*/
const appStorage = {
    allUsers: [],
    selectors: {
      mainForm: document.forms['userMainForm'],
      userList: document.querySelector('#userList')  
    }
}



/*  
головний івент який запускає ланцюг скриптів
реагує на валідну форму
*/
appStorage.selectors.mainForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log("submit")
    let userData = convertDataToObject(appStorage.selectors.mainForm);
    
    let checkUniqueUser = checkExistUser(userData, appStorage); /*Перевіряємо чи є юзер*/
    if(checkUniqueUser) return alert(`User with ${userData.userMail} already exist`) /* якщо юзер був знайдений то видасть цей alert */
    
    appStorage.selectors.mainForm.reset();
    saveToLocalStorage(appStorage, userData)
    viewUserList(appStorage)
    //console.log(appStorage.allUsers)
})



/*
функція діставання з любої форми даних по поля вводу 
з цих полів дістається name : value  
на виході дані додані в об'єкт
*/
function convertDataToObject(form) {
    const userObject = {};
    for(let input of form) {
        if(input.name && input.value) {  
            if(input.type === 'radio') {   // перевірка чи тип інпуту type == 'radio'
                if(input.checked){
                    userObject[input.name] = input.value; // знімаємо з інпуту інформацію якщо він вибраний
                } 
            } else {
                userObject[input.name] = input.value;
            }
            
        }
    }
    userObject['id'] = new Date().getTime();
    console.log(userObject)
    return userObject
}



/*
функція зберігання нових юзерів в базу
*/

function saveToLocalStorage(storage, dataToSave) {
    if(!storage || !dataToSave){
        console.error("There is no data or storage");
        return
    }
    const allUsers = storage.allUsers;
    allUsers.push(dataToSave);
}



/*
Функція відображення, перемальовування списків юзера
використаємо функцію генерації елемента і додамо ще івент

*/
function viewUserList(appStorage){
    let allUsers = appStorage.allUsers;
    let userList = appStorage.selectors.userList;
    userList.innerHTML = '';

    for(let singleUserData of allUsers) {
        let dateToRegistrate = new Date(singleUserData.id);

        let year = dateToRegistrate.getFullYear();
        let month = dateToRegistrate.getMonth() + 1;
        let day = dateToRegistrate.getDate();
        let hour = dateToRegistrate.getHours();
        let minutes = dateToRegistrate.getMinutes();
        let userHtml = `
            <span style="color: ${singleUserData.userColor};">
            Name: ${singleUserData.userName}

             ${singleUserData.userAge ? '| user age: ' + singleUserData.userAge : ''}
            </span>
            <i>
                <small>${year}/${month}/${day}  ${hour}:${minutes}</small>
            </i>
        `;
        let newElement = generateNewElement("li", "list-style", userHtml);
        let delateButton = generateNewElement("button", "delate-btn", "Del");
        
        delateButton.addEventListener("click", (e) => {
            //alert(`Try to delete user ${singleUserData.id}`);
            if(confirm(`Delate user ${singleUserData.userName} ? `)){
                delateUser(singleUserData.id, appStorage);
            }
            
        });

        newElement.appendChild(delateButton);
        userList.appendChild(newElement);
    }
}



/*
Функція створення нового html елементу
tag className  innerHTML 
*/
function generateNewElement(tagName, styleClass, textHtml ){
    let newElement = document.createElement(tagName);
    if(styleClass) newElement.className = styleClass;
    if(textHtml) newElement.innerHTML = textHtml;
    return newElement
}


/*
функція видалення юзера з масива
і перемальовка списку
*/
function delateUser(id, appStorage){
    let allUsers = appStorage.allUsers;
    let findIndex = null;
    let userFinder = allUsers.find((user, index) => {
        if(user.id === id){
            findIndex = index;
            return user
        } 
    });
    if(!findIndex && findIndex != 0) return

    allUsers.splice(findIndex, 1);
    viewUserList(appStorage)
    //console.log(userFinder, findIndex, allUsers);
}




/*
    Потрібно перевіряти дублікати, якщо знаходить в списку юзерів такого ж
    з таким же емейлом то повертає true якщо не знаходить то false
    ця функція запускається при створенні юзера одразу після перетворення форми
    в формат об'єкта
*/
function checkExistUser(currentUser, appStorage) {
    let allUsers = appStorage.allUsers;
    let searchUser = allUsers.find(user => {
        if(user.userMail === currentUser.userMail) return user
    });

    return searchUser ? true : false
}
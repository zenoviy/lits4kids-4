const appStorage = {
    allUsers: [],
    selectors: {
      mainForm: document.forms['userMainForm'],
      userList: document.querySelector('#userList')  
    }
}


appStorage.selectors.mainForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log("submit")
    let userData = convertDataToObject(appStorage.selectors.mainForm);
    saveToLocalStorage(appStorage, userData)
    console.log(appStorage.allUsers)
})


function convertDataToObject(form) {
    const userObject = {};
    for(let input of form) {
        if(input.name && input.value) {
            userObject[input.name] = input.value;
        }
    }
    userObject['id'] = new Date().getTime();
    return userObject
}


function saveToLocalStorage(storage, dataToSave) {
    if(!storage || !dataToSave){
        console.error("There is no data or storage");
        return
    }
    const allUsers = storage.allUsers;
    allUsers.push(dataToSave);
}
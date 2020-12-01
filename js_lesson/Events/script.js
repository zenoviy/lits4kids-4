console.log("Test")


const appDataBase = {
    numberOfHtmlClicks: 0,
    eventButtonState: false,
    userboxLocation: {
        positionX: 0,
        positionY: 0
    }
};

const myButton = document.querySelector("#myButton");
const eventButton = document.querySelector("#eventButton");
const userBox = document.querySelector("#userBox");

function onHtmlClick() {
    appDataBase.numberOfHtmlClicks += 1;
    console.log(appDataBase.numberOfHtmlClicks);
}
function onHtmlClickDecrease() {
    appDataBase.numberOfHtmlClicks -= 1;
    console.log(appDataBase.numberOfHtmlClicks);
}

function onExternalLink( targetLink ) {
    location.href = targetLink;
}

myButton.onclick = onHtmlClickDecrease;
/* Event listenern */


eventButton.addEventListener("click", (event) => {
    console.log("click by EventListener", 
    appDataBase.numberOfHtmlClicks);

    console.log(event);

    appDataBase.eventButtonState = !appDataBase.eventButtonState;

    if(appDataBase.eventButtonState) {
        event.target.style = `
            background: red; 
            padding: 10px; 
            color: #fff;
            border: 0px;
        `;
    } else {
        event.target.style = `
        background: green; 
        padding: 10px; 
        color: #fff;
        border: 0px;
    `; 
    }
    
});

document.addEventListener("click", (event) => {
    console.log(event.target.dataset, event.target)
    if(event.target.dataset.buttonSet === "clicker"){
        console.log("Here is clicker");
    } else if(event.target.dataset.buttonSet === "cat"){
        console.log("Hello i am a Cat");
    }
});

document.addEventListener("keydown", (event) => {
    console.log(event)

    let minimalStep = 5; 

    if(event.keyCode === 38){
        console.log("Move Up");
        assingValue("up", minimalStep)
        
    } else if (event.keyCode === 39) {
        console.log("Move Right");
        assingValue("right", minimalStep)


    } else  if (event.keyCode === 40) {
        console.log("Move Down");
        assingValue("down", minimalStep)


    } else if(event.keyCode === 37) {
        console.log("Move Left");
        assingValue("left", minimalStep)

    }
});

function assingValue(keyStatus, step) {
    if(keyStatus === "up") {
        appDataBase.userboxLocation.positionY -= step;
    } else if(keyStatus === "right") {
        appDataBase.userboxLocation.positionX += step;
    } else if(keyStatus === "down") {
        appDataBase.userboxLocation.positionY += step;
    } else if(keyStatus === "left") {
        appDataBase.userboxLocation.positionX -= step;
    }
    placeUserBox()
}


function placeUserBox() {
    let positionX = appDataBase.userboxLocation.positionX;
    let positionY = appDataBase.userboxLocation.positionY;
    userBox.style = `margin-top: ${positionY}px; 
    margin-left: ${positionX}px;`;
}
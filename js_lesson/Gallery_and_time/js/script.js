console.log('Work')

const controlObject = {
    galleryMainBase: [{
        id: 1,
        url: "https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2019/07/new-york2.jpg",
        title: "Title 1",
        description: "Small description about the city 1",
    }, {
        id: 2,
        url: "https://www.nightcity.love/build/images/og-share-3248bc34.jpg",
        title: "Title 2",
        description: "Small description about the city 2",
    }, {
        id: 3,
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/City_of_London%2C_seen_from_Tower_Bridge.jpg/1200px-City_of_London%2C_seen_from_Tower_Bridge.jpg",
        title: "Title 3",
        description: "Small description about the city 3",
    }],
    timerSeasonSets: [],
    gallerySettings: {
        currentImageIndex: 0
    },
    selectors : {
        pageTimer: document.querySelector('#page-timer'),
        galleryDisplayArea: document.querySelector('#gallery-dispaly-area'),
        /* Class selecors must be */
    }
}

/* Events gallery  left right click*/
document.addEventListener("click", (event) => {
    //console.log(event.target.dataset)
    const galleryBtn = event.target.dataset.galleryBtn;
    if(galleryBtn === "left") {
        changeGalleryItem(-1, controlObject)
    }else if(galleryBtn === "right"){
        changeGalleryItem(1, controlObject)
    }
    
    if(galleryBtn === "left" || galleryBtn === "right"){
        assignGalleryElement(controlObject)
    }
    
});

/* Assign image src ? create new object */
function changeGalleryItem(step, mainObject){
    let galleryMainBaseLength =  mainObject.galleryMainBase.length;
    mainObject.gallerySettings.currentImageIndex += step;
    
    if(mainObject.gallerySettings.currentImageIndex >= galleryMainBaseLength){
        mainObject.gallerySettings.currentImageIndex = 0;
    } else if(mainObject.gallerySettings.currentImageIndex < 0){
        mainObject.gallerySettings.currentImageIndex = galleryMainBaseLength - 1;
    }
    //console.log(mainObject.gallerySettings.currentImageIndex)
}


assignGalleryElement(controlObject)  // пенрша картинка при загрузці

function assignGalleryElement(mainObject){
    let galleryDisplayArea = mainObject.selectors.galleryDisplayArea;
    let galleryMainBase = mainObject.galleryMainBase;
    let currentImageIndex = mainObject.gallerySettings.currentImageIndex

    let currentGallery = galleryMainBase[currentImageIndex];

    let galleryImage = createNewElement({
        tag: "img",
        styleClasses: "gallery-item",
        src: currentGallery.url
    });

    let pictureInnerText = createNewElement({
        tag: "div",
        styleClasses: "inner-text-area",
        innerText: `
            <h2>${currentGallery.title}</h2>
            <p>${currentGallery.description}</p>
        `
    })

    galleryDisplayArea.innerHTML = "";


    galleryDisplayArea.appendChild(pictureInnerText)
    galleryDisplayArea.appendChild(galleryImage)
    
}



/* Create new Element */
function createNewElement(elementInformation) {
    const newElement = document.createElement(elementInformation.tag);
    if(elementInformation.styleClasses) newElement.className = elementInformation.styleClasses;
    if(elementInformation.tag === 'img' && elementInformation.src){
        newElement.src = elementInformation.src;
    }
    if(elementInformation.innerText) newElement.innerHTML = elementInformation.innerText;
    return newElement
}
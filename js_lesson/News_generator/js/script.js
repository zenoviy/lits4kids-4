
    const __NEWS_DATA = {
        API_KEY: "lWFC8gndbyBSQDRYIrBNSObzhVE0TuRNe7DQ8Lxw",
        HOST_NASA: "https://api.nasa.gov",
        pagePerClick: 8,
        pageCurrentImage: 8,
        routings: {
            apod: "/planetary/apod",
            marsRoverPhoto: "/mars-photos/api/v1/rovers/curiosity/photos"
        },
        newsStorage: {
            allApodNew: [],
            roverPhotos: []
        },
        selectors: {
            newsImageBackground: document.querySelector("#news-image-background"),
            nasaSingleNews: document.querySelector("#nasa-single-news"),
            marsRoverImages: document.querySelector("#mars-rover-images"),
            loadImage: document.querySelector("#load-image"),
            roverDataInput: document.querySelector("#rover-data-input"),
            searchRoverBtn: document.querySelector("#search-rover-btn")
        }
    }

    /*   reload  data using sol  */

    __NEWS_DATA.selectors.searchRoverBtn.addEventListener("click", () => {
        let roverDataInput = __NEWS_DATA.selectors.roverDataInput;
        __NEWS_DATA.pageCurrentImage = __NEWS_DATA.pagePerClick;
        if(roverDataInput.value){
            nasaRoverPhotoRequest(roverDataInput.value, 'mast')
        }
    })

    /*   show more button   */
    __NEWS_DATA.selectors.loadImage.addEventListener("click", () =>{
        __NEWS_DATA.pageCurrentImage += __NEWS_DATA.pagePerClick;
        displayPhoto( __NEWS_DATA  )
    })

    /*   Get asingle news in header   */
    function initApodNewsRequest(){
        let url = `${__NEWS_DATA.HOST_NASA}${__NEWS_DATA.routings.apod}?api_key=${__NEWS_DATA.API_KEY}`;

        getServerData(url)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            __NEWS_DATA.newsStorage.allApodNew = response;
            displayHeaderSingleNews(response, __NEWS_DATA.selectors)
        })
    }

    /*   Get all photos   */
    function nasaRoverPhotoRequest(sol, camera, page){
        let url = `${__NEWS_DATA.HOST_NASA}${__NEWS_DATA.routings.marsRoverPhoto}?sol=${sol}&camera=${camera}&api_key=${__NEWS_DATA.API_KEY}`;
        
        getServerData(url)
        .then(response => response.json())
        .then(response => {

            __NEWS_DATA.newsStorage.roverPhotos = response.photos;
            console.log(response)
            displayPhoto( __NEWS_DATA  )
        })
    }
    nasaRoverPhotoRequest(1000, 'mast')
    initApodNewsRequest()


function getServerData(url){
    return fetch(url)
}

function displayHeaderSingleNews(news, selectors){
    let newsImageBackground = selectors.newsImageBackground;
    let nasaSingleNews = selectors.nasaSingleNews;
    newsImageBackground.style = `background-image: url(${news.url}); `;

    nasaSingleNews.innerHTML = `
        <div class="single-news-wrapper">
            <div class="single-news-image-area">
                <div class="image-center">
                    <img src=${ news.url }> 
                    <i>${ news.title }</i>
                </div>
            </div>
            <div class="single-news-content-area">
                <h1>${ news.title }</h1>
                <i>${ news.date.replaceAll('-', '/') }</i>
                <p>${ news.explanation }</p>
            </div>
        </div>
    `;
}




/*   display Mars photo  */

function displayPhoto( appData ) {
    const roverPhoto = appData.newsStorage.roverPhotos.slice(0, appData.pageCurrentImage);
    const marsRoverImages = appData.selectors.marsRoverImages;

    marsRoverImages.innerHTML = "";
    for(let image of roverPhoto) {
        let cardInnerBody = `
            <div class=" card">
                <img src=${ image.img_src } class="card-img-top" alt=${image.id}>
                <div class="card-body">
                <p class="card-text">sol: ${image.sol} Rover: ${image.rover.name} id: ${ image.id }</p>
                <p class="card-text">Camera: ${image.camera.name} </p>
                </div>
            </div>
        `
        let newCard = generateElement( "div", "col photo-card", cardInnerBody)
        let linkBtn = generateElement( 
            "button", 
            "btn btn-success", 
            "Watch this photo", 
            (event) => {
                if( confirm(`You want to wisit photo ${image.id}`)){
                    location.href = `templates/singlepage.html?photo_id=${image.id}&sol=${image.sol}`;
                }
            }
        )
        newCard.appendChild( linkBtn )
        marsRoverImages.appendChild( newCard ) 
    }
}

function generateElement(tagName, styleClass, innerText, action) {
    const newElement = document.createElement(tagName);
    if(styleClass) newElement.className = styleClass;
    if(innerText) newElement.innerHTML = innerText;

    if(action) newElement.addEventListener('click', (e) => { action(e) })

    return newElement
}






(function(){
    const __NEWS_DATA = {
        API_KEY: "lWFC8gndbyBSQDRYIrBNSObzhVE0TuRNe7DQ8Lxw",
        HOST_NASA: "https://api.nasa.gov/planetary",
        routings: {
            apod: "/apod"
        },
        newsStorage: {
            allApodNew: []
        },
        selectors: {
            newsImageBackground: document.querySelector("#news-image-background"),
            nasaSingleNews: document.querySelector("#nasa-single-news")
        }
    }
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
    initApodNewsRequest()
})()

function getServerData(url){
    return fetch(url)
}

function displayHeaderSingleNews(news, selectors){
    let newsImageBackground = selectors.newsImageBackground;
    let nasaSingleNews = selectors.nasaSingleNews;
    newsImageBackground.style = `background-image: url(${news.url}); `;
}
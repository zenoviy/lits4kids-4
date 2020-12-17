const timeScriptDB = {
    timerAssets: [
        {
            id: 1,
            monthName: 'January',
            pictureUrl: 'https://www.woodstockvt.com/sites/default/files/styles/hero_x_large/public/media-images/snowmobiletrail.jpg',
            mainColor: '#2642A6',
            secondaryColor: '#1E3585'
        },
        {
            id: 2,
            monthName: 'February',
            pictureUrl: 'https://cdn.wallpapersafari.com/17/75/PCIihZ.jpg',
            mainColor: '#476582',
            secondaryColor: '#355597'
        },
        {
            id: 3,
            monthName: 'March',
            pictureUrl: 'https://cdn.pixabay.com/photo/2014/02/07/20/05/trail-261308__340.jpg',
            mainColor: '#629A97',
            secondaryColor: '#62B297'
        },
        {
            id: 4,
            monthName: 'April',
            pictureUrl: 'https://blog.siciliansecrets.it/wp-content/uploads/2019/04/aprile.jpg',
            mainColor: '#62D880',
            secondaryColor: '#36A652'
        },
        {
            id: 5,
            monthName: 'May',
            pictureUrl: 'https://mapio.net/images-p/73318689.jpg',
            mainColor: '#6BC75A',
            secondaryColor: '#3D9D2C'
        },
        {
            id: 6,
            monthName: 'June',
            pictureUrl: 'https://c.tadst.com/gfx/600x337/june-solstice-ten-things.jpg?1',
            mainColor: '#C4CF54',
            secondaryColor: '#9EB543'
        },
        {
            id: 7,
            monthName: 'July',
            pictureUrl: 'https://www.wallpaperup.com/uploads/wallpapers/2013/06/09/99967/8d26660573a64499063ba8912a04c540.jpg',
            mainColor: '#FDB73E',
            secondaryColor: '#DE7636'
        },
        {
            id: 8,
            monthName: 'August',
            pictureUrl: 'https://s2.best-wallpaper.net/wallpaper/1920x1200/1502/Sky-fields-harvest-machine_1920x1200.jpg',
            mainColor: '#D88B3E',
            secondaryColor: '#B57434'
        },
        {
            id: 9,
            monthName: 'September',
            pictureUrl: 'https://www.escape2poland.co.uk/poland-guide/wp-content/uploads/2016/10/jesie%C5%841.jpg',
            mainColor: '#E47D5F',
            secondaryColor: '#B5644B'
        },
        {
            id: 10,
            monthName: 'October',
            pictureUrl: 'https://i.pinimg.com/originals/c9/88/b5/c988b5621745c70b592c54326b720cc2.jpg',
            mainColor: '#B50056',
            secondaryColor: '#8E0045'
        },
        {
            id: 11,
            monthName: 'November',
            pictureUrl: 'https://images7.alphacoders.com/924/thumb-1920-924364.jpg',
            mainColor: '#5D46D0',
            secondaryColor: '#4836A0'
        },
        {
            id: 12,
            monthName: 'December',
            pictureUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/snow-covered-pine-trees-on-sunset-royalty-free-image-615101076-1541521490.jpg',
            mainColor: '#568BDB',
            secondaryColor: '#3F66A0'
        }
    ],
}

const timerSettings = {
    timerAssets: timeScriptDB.timerAssets, 
    curentTime: null,
    selectors: {
        pageTimer: document.querySelector('#page-timer'),
        pictureArea: document.querySelector('body'),
        classStyleSeason: document.querySelectorAll('.season-style')
    }
}


/*  Timer engine  */
let timeEngine = setInterval(function() {
    timerUpdater(timerSettings);
    showTime(timerSettings);
    // clearInterval(timeEngine)
}, 1000);

/*  Timer updater  */
function timerUpdater(timerData){
    timerData.curentTime = new Date();
}

/*  Timer Display  */
function showTime(timerData){
    let year = timerData.curentTime.getFullYear();
    let month = timerData.curentTime.getMonth() + 1;
    let day = timerData.curentTime.getDate();
    let hours = timerData.curentTime.getHours();
    let minutes = timerData.curentTime.getMinutes();
    let seconds = timerData.curentTime.getSeconds();

    let currentMonthObject = timerData.timerAssets[month - 1];
    let timeTarget = timerData.selectors.pageTimer;

    let timerText = `
    <h3>${year} Month: ${currentMonthObject.monthName} </h3>
    <p>${year}/${month}/${day} </p>
    <p>${hours} ${seconds % 2 === 0 ? ':' : '&nbsp;'} ${minutes} ${seconds % 2 === 0 ? ':' : '&nbsp;'}  ${seconds}</p>`;

    displayTime(timeTarget, timerText);
    assignBackground(timerData, currentMonthObject);
    assignSeasonTheme(timerData, currentMonthObject);
}

function displayTime(target, text) {
    target.innerHTML = text;
}
/* Set time data */

function assignBackground(timerData, seasonObject){

    let bodyObject = timerData.selectors.pictureArea; 
    bodyObject.style = `background-color: ${seasonObject.mainColor}; 
    ${ seasonObject.pictureUrl ? `background-image: url(${seasonObject.pictureUrl});` 
    : ''}`;

}

/* 
    функція яка присвоює другорядний стиль до Хедера і футера до всіх елементів
    які мають клас .season-style
*/
function assignSeasonTheme(timerData, seasonObject){   
    let classStyleSeason = timerData.selectors.classStyleSeason;
    for(let element of classStyleSeason){
        element.style = `background-color: ${seasonObject.secondaryColor};`
    }
}


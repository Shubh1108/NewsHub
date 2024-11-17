// const API_KEY ="70ffc9f537aa4b3e93cc82e32b3508be";
// const url ="https://newsapi.org/v2/everything?q=";

// window.addEventListener('load', () => fetchNews("India"));

// async function fetchNews (query){
//     const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
//     const data = await res.json();
//     let output = "";
//     data.articles.forEach(element => {
//         if(element.urlToImage !=null) {

//         output+= `<div class="card"><div class="card-header"><img src="${element.urlToImage}"  alt="News Image" id="news-img"></div><div class="card-content"><h3 id="news-title">${element.title}</h3><h6 class="news-source" id="news-source">End Gadget ${element.publishedAt}</h6><p class="news-desc" id="news desc" >${element.content}</p></div></div>`;
//         }   

//     });
//     document.getElementById("card-container").innerHTML = output;
//     // document.getElementById("news-img").setAttribute("src",data.articles[0].urlToImage);
//     bindData(data.articles);

// }

// function bindData(articles){
//     const cardsContainer = document.getElementById('cards-container');
//     const newsCardTemplate = document.getElementById('template-news-card');

//     cardsContainer.innerHTML = "";

//     articles.forEach(articles => {
//         if(!articles.urlToImage) return;
//         const cardClone = newsCardTemplate.contentEditable.cloneNode(true);
//         cardsContainer.appendChild(cardClone);
//     });
//     cardClone.firstElementChild.addEventListener("click", () => {
//         window.open(articles.url,"_blank");
//     });
// }

// let curSelectedNav = null ;
// function onNavItemClick(id) {
//     fetchNews(id);
//     const navItem = document.getElementById(id);
//     curSelectedNav?.classlist.remove('active');
//     customElements = navItem;
//     curSelectedNav.classList.add('active');
// }






// const API_KEY = "70ffc9f537aa4b3e93cc82e32b3508be";
// const url = "https://newsapi.org/v2/everything?q=";

// window.addEventListener('load', () => fetchNews("India"));

// async function fetchNews(query) {
//     const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
//     const data = await res.json();
//     let output = "";

//     data.articles.forEach(element => {
//         if (element.urlToImage) {
//             output += `
//             <div class="card">
//                 <div class="card-header">
//                     <img src="${element.urlToImage}" alt="News Image" id="news-img">
//                 </div>
//                 <div class="card-content">
//                     <h3 id="news-title">${element.title}</h3>
//                     <h6 class="news-source" id="news-source">End Gadget ${element.publishedAt}</h6>
//                     <p class="news-desc" id="news-desc">${element.content}</p>
//                 </div>
//             </div>`;
//         }
//     });

//     document.getElementById("card-container").innerHTML = output;
// }

// let curSelectedNav = null;

// function onNavItemClick(id) {
//     fetchNews(id);
//     const navItem = document.getElementById(id);
//     curSelectedNav?.classList.remove('active');
//     curSelectedNav = navItem;
//     curSelectedNav.classList.add('active');
// }

// function reload() {
//     window.location.reload();
// }

// const searchButton = document.getElementById('search-button');
// const searchText = document.getElementById('search-text');

// searchButton.addEventListener('click', () => {
//     const query = searchText.value;
//     if(!query) return;
//     fetchNews(!query);
//     curSelectedNav?.classList.remove('active');
//     curSelectedNav = null;
// })



const API_KEY = "70ffc9f537aa4b3e93cc82e32b3508be";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', () => fetchNews("India"));

async function fetchNews(query) {
    try {
        const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        let output = "";

        data.articles.forEach(element => {
            if (element.urlToImage) {
                output += `
                <div class="card">
                    <div class="card-header">
                        <img src="${element.urlToImage}" alt="News Image" id="news-img">
                    </div>
                    <div class="card-content">
                        <h3 id="news-title">${element.title}</h3>
                        <h6 class="news-source" id="news-source">${element.source.name} ${element.publishedAt}</h6>
                        <p class="news-desc" id="news-desc">${element.content}</p>
                    </div>
                </div>`;
            }
        });

        document.getElementById("card-container").innerHTML = output;
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

let curSelectedNav = null;

function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove('active');
    curSelectedNav = navItem;
    curSelectedNav.classList.add('active');
}

function reload() {
    window.location.reload();
}

const searchButton = document.getElementById('search-button');
const searchText = document.getElementById('search-text');

searchButton.addEventListener('click', () => {
    const query = searchText.value;
    if (!query) return;
    fetchNews(query); // Fixed: pass query, not !query
    curSelectedNav?.classList.remove('active');
    curSelectedNav = null;
});





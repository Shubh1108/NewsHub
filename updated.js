const url = "https://newsapi.org/v2/everything?q="; // Ensure HTTPS is used
const API_KEY = "70ffc9f537aa4b3e93cc82e32b3508be";

// Load default news on window load
window.addEventListener("load", () => fetchNews("India"));

async function fetchNews(query) {
  try {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Ensure JSON content type
      },
    });

    // Check if the response is OK
    if (!res.ok) {
      throw new Error(`Failed to fetch news: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    // Handle case where no articles are found
    if (!data.articles || data.articles.length === 0) {
      document.getElementById("card-container").innerHTML =
        "<p>No news found.</p>";
      return;
    }

    // Generate news cards
    let output = "";
    data.articles.forEach((element) => {
      if (element.urlToImage) {
        output += `
                <div class="card">
                    <div class="card-header">
                        <img src="${
                          element.urlToImage
                        }" alt="News Image" id="news-img">
                    </div>
                    <div class="card-content">
                        <h3 id="news-title">${element.title}</h3>
                        <h6 class="news-source" id="news-source">${
                          element.source.name
                        } ${new Date(element.publishedAt).toLocaleString()}</h6>
                        <p class="news-desc" id="news-desc">${
                          element.content || "No content available."
                        }</p>
                    </div>
                </div>`;
      }
    });

    document.getElementById("card-container").innerHTML = output;
  } catch (error) {
    console.error("Error fetching news:", error);
    document.getElementById("card-container").innerHTML =
      "<p>Error fetching news. Please try again later.</p>";
  }
}

let curSelectedNav = null;

// Handle navigation item clicks
function onNavItemClick(id) {
  fetchNews(id);
  const navItem = document.getElementById(id);
  curSelectedNav?.classList.remove("active");
  curSelectedNav = navItem;
  curSelectedNav.classList.add("active");
}

// Reload page
function reload() {
  window.location.reload();
}

// Handle search functionality
const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
  const query = searchText.value.trim();
  if (!query) return;
  fetchNews(query);
  curSelectedNav?.classList.remove("active");
  curSelectedNav = null;
});

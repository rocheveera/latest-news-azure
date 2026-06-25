function searchNews() {

    const key = document.getElementById("search").value || "technology";

    const API_KEY = "2ab4265ded714f54aea25f8e21e54d65";

    const url = `https://newsapi.org/v2/everything?q=${key}+news&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            const container = document.getElementById("newsContainer");
            container.innerHTML = "";

            if (!data.articles || data.articles.length === 0) {
                container.innerHTML = "<p>No news found</p>";
                return;
            }

            data.articles.forEach(article => {

                const div = document.createElement("div");
                div.className = "card";

                
div.innerHTML = `
<img src="${article.urlToImage || 'https://via.placeholder.com/300x150'}" class="image" />

<h3 class="title">${article.title}</h3>

<p class="desc">${article.description || ""}</p>

<a href="${article.url}" target="_blank" class="link">
    Read More →
</a>
`;


                container.appendChild(div);
            });

        })
        .catch(error => {
            console.error("Error:", error);
        });
}
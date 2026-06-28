function searchNews() {

    const key = document.getElementById("search").value || "technology";
    const url = `https://latest-news-api-cvhrc9g8b8fwfeh4.centralindia-01.azurewebsites.net/api/getNews?q=${key}`;
    
fetch(url)
.then(res => res.json())
.then(data => {

    const container = document.getElementById("newsContainer");
    container.innerHTML = "";

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

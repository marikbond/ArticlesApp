
function saveArticle() {
    var title = document.getElementById("article-title").value;
    var content = document.getElementById('article-content').value;
    var article = {
        title: title,
        content: content,
        creationDate: new Date(),
        author: ""
    };
    saveArticleToStorage(article);
    addArticleToView(article);
}

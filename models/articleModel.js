
function saveArticleToStorage(article) {
    article['id'] = db.generateId();
    articles[article.id] = article;
    localStorage.setItem('articles', JSON.stringify(articles));
}
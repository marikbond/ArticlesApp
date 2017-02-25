var articleModel = (function () {

    return {
        save: function (article) {
            article['id'] = db.generateId();
            articles[article.id] = article;
            localStorage.setItem('articles', JSON.stringify(articles));
            return article;
        }
    }
})();


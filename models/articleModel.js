var articleModel = (function () {

    return {
        save: function (article) {
            article.author = userModel.getLoggedIn();
            article.sequanceName = 'article_sequence'; //TODO
            db.create('articles', article);
            return article;
        }
    }
})();
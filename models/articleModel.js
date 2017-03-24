var Article = (function () {

    var _modelParams_ = {
        model: 'Article',
        storage_key: 'articles',
        sequence: 'article_sequence',
        associations: [{model: User, as: 'author'}]
    };

    return {
        getModel: function () {
            return _modelParams_.model;
        },
        getStorageKey: function () {
            return ''; //TODO
        },
        create: function (article) {
            article.author = User.getLoggedIn();
            article.model = Article;
            db.create('articles', article);
            return article;
        },
        find: function (articleId) {
            var article = db.get('articles', articleId);
            article.author = User.find(article.author);
            return article;
        }
    }
})();



// {
//     id: 33,
//     title: 'sdf',
//     content: 'hhh'
//     author: 432
// }
//
var Article = (function () {

    var _modelParams_ = {
        model: 'Article',
        storage_key: 'articles',
        sequence: 'article_sequence',
        associations: [
            {model: User, as: 'author'}
        ]
    };

    function fillInstanceMethods(article) {
        article.getCreationDate = function () {
            //this.creationDate
            //day-month-year
            return '21-03-2017';
        }
    }

    function prepareArticlesToRender(articles) {
        var articlesInArr = [];
        var i = 0;
        for (var key in articles) {
            articles[key].author = User.getLoggedIn(); //TODO переделать под автора созания статьи
            articlesInArr[i++] = articles[key];
        }
        return articlesInArr;
    }

    return {
        getModel: function () {
            return _modelParams_.model;
        },
        getStorageKey: function () {
            return _modelParams_.storage_key;
        },
        create: function (article) {
            var storageKey = this.getStorageKey();
            article.author = User.getLoggedIn();
            db.create(storageKey, article);
            fillInstanceMethods(article);
            return article;
        },
        find: function (articleId) {
            var storageKey = this.getStorageKey();
            var article = db.get(storageKey, articleId);
            article.author = User.find(article.author);
            return article;
        },
        findAll: function() {
            var allArticlesInJSON = localStorage.getItem('articles');
            var parsedArticles = JSON.parse(allArticlesInJSON);
            return prepareArticlesToRender(parsedArticles);
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
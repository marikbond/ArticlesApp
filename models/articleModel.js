var Article = (function () {

    var _modelParams_ = {
        model: 'Article',
        storage_key: 'articles',
        sequence: 'article_sequence',
        associations: [
            {model: User, as: 'author'}
        ]
    };
    
    function fillRelatedData(article) {
        if (typeof article.author !== 'object') {
            article.author = User.find();
        }
        article.getCreationDate = function () {
            // var date = new Date();
            // date.getHours();
            //day-month-year
            return '06-07-89';
        };
        if (article.creationDate !== 'undefined') {
            article.creationDate = article.getCreationDate();
        }

        return article;
    }

    function getPreparedInstance(articles) {
        var articlesInArr = [];
        var i = 0;
        for (var key in articles) {
            articlesInArr[i++] = fillRelatedData(articles[key]);
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
            fillRelatedData(article);
            return article;
        },
        find: function (articleId) {
            var storageKey = this.getStorageKey();
            var article = db.get(storageKey, articleId);
            article.author = User.find(article.author);
            return article;
        },
        findAll: function() {
            var allItems = db.get('articles');
            return getPreparedInstance(allItems);
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
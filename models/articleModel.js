var Article = (function () {

    var _modelParams_ = {
        model: 'Article',
        storage_key: 'articles',
        sequence: 'article_sequence',
        associations: [
            {model: User, as: 'author'},
        ]
    };

    function fillInstanceMethods(article) {
        article.getCreationDate = function () {
            //this.creationDate
            //day-month-year
            return '21-03-2017';
        }
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
            //...
            return {};
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
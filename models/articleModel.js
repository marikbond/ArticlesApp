var Article = (function () {

    var _modelParams_ = {
        model: 'Article',
        storage_key: 'articles',
        sequence: 'article_sequence',
        associations: [
            {model: User, as: 'author'}
        ]
    };
    
    function fillAssociations(article) {
        if (typeof article.author !== 'object') {
            article.author = User.findOne(article.author);
        }
    }

    function preparedInstance(article) {
        fillAssociations(article);
        var date = new Date();
        article.creationDate = new Date(article.creationDate);
        return article;
    }

    return {
        getModel: function () {
            return _modelParams_.model;
        },
        getStorageKey: function () {
            return _modelParams_.storage_key;
        },
        getSequanceName: function () {
            return _modelParams_.sequence;
        },
        create: function (article) {
            var storageKey = this.getStorageKey();
            article.author = User.getLoggedIn();
            var sequance = this.getSequanceName();
            db.save(storageKey, sequance, article);
            return article;
        },
        findOne: function (articleId) {
            var storageKey = this.getStorageKey();
            var article = db.getOne(storageKey, articleId);
            preparedInstance(article);
            return article;
        },
        findAll: function() {
            var storageKey = this.getStorageKey();
            var articles = db.getAll(storageKey);
            for (var key in articles) {
                if (!articles.hasOwnProperty(key)) continue;
                preparedInstance(articles[key]);
            }
            return articles;
        }
    }
})();
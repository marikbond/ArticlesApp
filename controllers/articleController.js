var articleCtrl = (function () {

    return {
        saveArticle: function () {
            var title = document.getElementById("article-title").value;
            var content = document.getElementById('article-content').value;
            var articleParams = {
                title: title,
                content: content,
                creationDate: new Date(),
                authorFullName: 'Lyosha Popov'
            };
            var article = articleModel.save(articleParams);
            articleView.render(article);
        }
    };
})();

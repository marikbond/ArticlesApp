var articleCtrl = (function () {

    return {
        saveArticle: function () {
            var title = document.getElementById("article-title").value;
            var content = document.getElementById('article-content').value;
            articleView.clearModal();
            var article = Article.create({
                title: title,
                content: content,
                creationDate: new Date()
            });
            articleView.render(article);
        },
        clearModal: function () {
            articleView.clearModal();
        }
    };
})();

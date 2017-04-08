registerTemplates();

var articles = Article.findAll();
articleView.renderAll(articles);

function registerTemplates() {
    [
        'article-template'
    ].forEach(templateManager.registerTemplate);
}
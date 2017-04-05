var templateManager = (function () {
    var compiledTemplate = function () {
        var articleTemplate = document.getElementById('articleTemplate').innerHTML;
        return _.template(articleTemplate);
    }();

    return {
        renderTemplate: function (name, article) {
            return compiledTemplate(article);
        },
        registerTemplate: function () {

        }
    }
})();
var articleView = (function () {

    function getRowForArticle() {
        var row = getElementById('article-container').lastElementChild;
        if (!row || row.childElementCount >= colCountInOneRow) {
            row = document.createElement('div');
            row.className = 'row';
            getElementById('article-container').appendChild(row);
        }
        return row;
    }

    function getColForArticle() {
        var col = document.createElement('div');
        col.className = 'col-md-' + (12 / colCountInOneRow);
        return col;
    }

    return {
        render: function (article) {
            var articleContainer = document.getElementById("article-container");
            var articleRow = getRowForArticle();
            articleContainer.appendChild(articleRow);
            var col = getColForArticle();
            articleRow.appendChild(col);
            var articleTemplate = document.getElementById('articleTemplate').innerHTML;
            var compiledArticleTemplate = _.template(articleTemplate); //TODO
            col.innerHTML = compiledArticleTemplate(article);
        }
    }
})();
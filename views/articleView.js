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

    function identifyId() {
        var target = event.target;
        while (target.tagName !== 'ARTICLE') {
            target = target.parentNode;
            if (target.tagName === 'ARTICLE') return target.id;
        }
    }

    function deleteFromLocalStorage(id) {
        var articles = db.getAll('articles');
        delete articles[id];
        localStorage.setItem('articles', JSON.stringify(articles));
    }

    function deleteFromScreen(id) {
        var item = document.getElementById(id);
        var parentElem = item.parentNode;
        var grandParent = parentElem.parentNode;
        grandParent.removeChild(parentElem);
    }

    return {
        render: function (article) {
            var articleContainer = document.getElementById("article-container");
            var articleRow = getRowForArticle();
            articleContainer.appendChild(articleRow);
            var col = getColForArticle();
            articleRow.appendChild(col);
            col.innerHTML = templateManager.renderTemplate('article-template', article);
        },
        renderAll: function (articles) {
            for (var key in articles) {
                if (!articles.hasOwnProperty(key)) continue;
                this.render(articles[key]);
            }
        },
        clearModal: function () {
            document.getElementById('article-title').value = '';
            document.getElementById('article-content').value = '';
        },
        delete: function () {
            var id = identifyId();
            deleteFromLocalStorage(id);
            deleteFromScreen(id);
        }
    }
})();
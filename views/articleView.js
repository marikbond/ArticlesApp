

function addArticleToView(article) {
    var articleContainer = document.getElementById("article-container");
    var articleRow = getRowForArticle();
    articleContainer.appendChild(articleRow);
    var col = getColForArticle();
    articleRow.appendChild(col);
    var articleElem = createArticleElement(article);
    col.appendChild(articleElem);
}

function getRowForArticle() {
    var row = _('article-container').lastElementChild;
    if (!row || row.childElementCount >= colCountInOneRow) {
        row = document.createElement('div');
        row.className = 'row';
        _('article-container').appendChild(row);
    }
    return row;
}

function getColForArticle() {
    var col = document.createElement('div');
    col.className = 'col-md-' + (12 / colCountInOneRow);
    return col;
}

function createArticleElement(article) {

    function createHeaderElem() {
        var spanELem = document.createElement('span');
        spanELem.innerHTML = "Creation date: ";

        var timeElem = document.createElement('time');
        timeElem.innerHTML = article.creationDate;

        var pencilBtn = document.createElement('a');
        var pencilSpanBtn = document.createElement('span');
        pencilSpanBtn.className = 'glyphicon glyphicon-pencil';
        pencilBtn.appendChild(pencilSpanBtn);

        var removeBtn = document.createElement('a');
        var removeSpanBtn = document.createElement('span');
        removeSpanBtn.className = 'glyphicon glyphicon-remove';
        removeBtn.appendChild(removeSpanBtn);

        var controlsElem = document.createElement('div');
        controlsElem.className = 'article-controls pull-right';
        controlsElem.appendChild(pencilBtn);
        controlsElem.appendChild(removeBtn);

        var headerElem = document.createElement('header');
        headerElem.appendChild(spanELem);
        headerElem.appendChild(timeElem);
        headerElem.appendChild(controlsElem);
        return headerElem;
    }

    function createMainElem() {
        var titleElem = document.createElement('h2');
        titleElem.innerHTML = article.title;
        var contentElem = document.createElement('p');
        contentElem.innerHTML = article.content;
        var mainElem = document.createElement('main');
        mainElem.appendChild(titleElem);
        mainElem.appendChild(contentElem);
        return mainElem;
    }

    function createFooterElem() {
        var divElem = document.createElement('div');
        divElem.className = 'pull-left';
        var authorTex = document.createTextNode("Author:");
        var brElem = document.createElement('br');
        var authorNameText = document.createTextNode(article.author);
        divElem.appendChild(authorTex);
        divElem.appendChild(brElem);
        divElem.appendChild(authorNameText);

        var buttonElem = document.createElement('button');
        buttonElem.className = 'btn btn-default pull-right view-btn';
        buttonElem.setAttribute('type', 'button');
        buttonElem.textContent = 'View Details >>';

        var footerElem = document.createElement('footer');
        footerElem.className = 'clearfix';
        footerElem.appendChild(divElem);
        footerElem.appendChild(buttonElem);
        return footerElem;
    }

    var articleElem = document.createElement("article");
    articleElem.className = "article";
    articleElem.appendChild(createHeaderElem());
    articleElem.appendChild(createMainElem());
    articleElem.appendChild(createFooterElem());
    return articleElem;
}
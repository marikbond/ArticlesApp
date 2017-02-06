var colCountInOneRow = 3;
var articles = {};

try {
    articles = JSON.parse(localStorage.getItem('articles'));
} catch (error) {
    articles = {};
}

for (var key in articles) {
    var article = articles[key];
    addArticleToView(article);
}


/**
    js articles                         |    localstorage

    1{}                                 <--- {id: 1, title: 'hello'}

    2                                   ====  {id: 1, title: 'hello'}
    var articles  = {
        '1': {id: 1, title: 'hello'}
    }

    3 {title: 'hello2'}                 <--- generateId {id: 1, title: 'hello'}

    4 {id: 2, title: 'hello2'}               {id: 1, title: 'hello'}

    5                                        {id: 1, title: 'hello'}
    var articles = {
        '1': {id: 1, title: 'hello'},        {id: 1, title: 'hello'} {id: 2, title: 'hello2'}
        '2': {id: 2, title: 'hello2'}
}*/



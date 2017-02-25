var colCountInOneRow = 3;
var articles = {};

try {
    articles = JSON.parse(localStorage.getItem('articles'));
} catch (error) {
    articles = {};
}
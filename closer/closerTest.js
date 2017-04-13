function Entity(params) {}

Entity.prototype.getModel = function () {};
Entity.prototype.getStorageKey = function () {};
Entity.prototype.getSequanceName = function () {};
Entity.prototype.create =  function (article) {};
Entity.prototype.findOne = function (articleId) {};
Entity.prototype.findAll = function() {};


function Article(params) {
    this.title = params.title;
}
extend(Article, Entity);

var article = new Article({title: 'hello'});




function extend(Child, Parent) {
    function F() {}
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}
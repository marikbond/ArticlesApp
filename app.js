var colCountInOneRow = 3;

var articles = Article.findAll();
articleView.renderAll(articles);



var animal = {
    eats: true,
    getBirthDay: function () {
        return this.birthDay;
    }
};

var rabbit1 = {
    birthDay: '25-03-2017',
    jumps: true
};

var rabbit2 = {
    birthDay: '22-03-2107'
};


rabbit1.__proto__ = animal;
rabbit2.__proto__ = animal;
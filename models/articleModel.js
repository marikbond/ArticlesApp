var Article = (function () {

    var DataTypes = Entity.dataTypes;

    function Article() {
        this.model = 'Article';
        this.storageKey = 'articles';
        this.sequence = 'article_sequence';
        this.definition = {
            title: DataTypes.STRING,
            content: DataTypes.STRING,
            creationDate: DataTypes.DATE,
            author: {
                type: DataTypes.ENTITY,
                association: User,
                defaultValue: User.getLoggedIn()
            }
        };
        this.classMethods = {};
        this.instanceMethods = {};
    }

    extend(Article, Entity);
    return new Article();
})();
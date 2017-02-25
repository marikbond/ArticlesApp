var db = (function () {

    var sequence = {
        nextValue: function (sequenceName) {
            var value = +localStorage.getItem(sequenceName);
            localStorage.setItem(sequenceName, ++value);
            return value;
        }
    };

    return {
        generateId: function () {
            return sequence.nextValue('articles_sequence');
        }
    };
})();
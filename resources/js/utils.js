var cache = {};

function getElementById(id) {
    if (cache[id]) {
        return cache[id];
    }
    cache[id] = document.getElementById(id);
    return cache[id];
}

var extend = (function () {
    var F = function () {};
    return function (Child, Parent) {
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.parent = Parent;
    };
}());
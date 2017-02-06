var cache = {};

function _(id) {
    if (cache[id]) {
        return cache[id];
    }
    cache[id] = document.getElementById(id);
    return cache[id];
}

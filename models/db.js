var db = (function () {

    var sequence = {
        nextValue: function (sequenceName) {
            var value = +localStorage.getItem(sequenceName);
            localStorage.setItem(sequenceName, ++value);
            return value;
        }
    };

    function normalizeItemToSave(item) {
        for (var key in item) {
            if (!item.hasOwnProperty(key)) continue;
            var value = item[key];
            if (isObject(value)) {
               item[key] = value.id;
            }
        }
        return item;
    }

    function isObject(value) {
        return value && value.constructor === Object;
    }

    return {
        generateId: function (sequence_name) {
            return sequence.nextValue(sequence_name);
        },
        create: function (key, value) {
            var valueForSave = value;
            if (isObject(value)) {
                value.id = db.generateId(value.sequanceName);
                var items = this.get(key);
                items[value.id] = normalizeItemToSave(value);
                valueForSave = items;
            }
            localStorage.setItem(key, JSON.stringify(valueForSave));
        },
        get: function (key) {
            return JSON.parse(localStorage.getItem(key));
        }
    };
})();
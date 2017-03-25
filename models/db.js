var db = (function () {

    var sequence = {
        nextValue: function (sequenceName) {
            var value = +localStorage.getItem(sequenceName);
            localStorage.setItem(sequenceName, ++value);
            return value;
        }
    };

    function getObjectForSave(item) {
        var objectForSave = {};
        for (var key in item) {
            if (!item.hasOwnProperty(key)) continue;
            var value = item[key];
            if (isObject(value)) {
               value = value.id;
            }
            objectForSave[key] = value;
        }
        return objectForSave;
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
                items[value.id] = getObjectForSave(value);
                valueForSave = items;
            }
            localStorage.setItem(key, JSON.stringify(valueForSave));
        },
        get: function (key, id) {
            var allItems = JSON.parse(localStorage.getItem(key));
            return id ? allItems[id] : allItems;
        }
    };
})();
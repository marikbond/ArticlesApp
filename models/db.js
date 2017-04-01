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

    function generateId(sequence_name) {
        return sequence.nextValue(sequence_name);
    }

    return {
        save: function (key, sequence, value) {
            var valueForSave = value;
            if (isObject(value)) {
                value.id = generateId(sequence);
                var items = this.get(key);
                items[value.id] = getObjectForSave(value);
                valueForSave = items;
            }
            localStorage.setItem(key, JSON.stringify(valueForSave));
        },
        getAll: function (key) {
            return JSON.parse(localStorage.getItem(key));
        },
        getOne: function (key, id) {
            return this.getAll(key)[id];
        }
    };
})();
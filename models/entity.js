var Entity = (function () {

    function Entity() {}

    Entity.dataTypes = {
        STRING: new DataType('STRING', true),
        DATE: new DataType('DATE', true),
        NUMBER: new DataType('NUMBER', true),
        ENTITY: new DataType('ENTITY', false)
    };

    Entity.prototype.create = function (data) {
        var instance = {};
        fillPrimitiveValues(instance, data, this.definition);
        fillEntitiesValues(instance, data, this.definition);
        fillDefaultValuesIfNeeded(instance, this.definition);
        fillInstanceMethods();
        db.save(this.storageKey, this.sequence, instance);
        return instance;
    };

    Entity.prototype.findOne = function (storageKey, id) {
        var data = db.getOne(storageKey, id);
        return prepareInstanceFrom(data, this.definition);
    };

    Entity.prototype.findAll = function () {
        var items = db.getAll(this.storageKey);
        for (var key in items) {
            if (!items.hasOwnProperty(key)) continue;
            items[key] = prepareInstanceFrom(items[key], this.definition);
        }
        return items;
    };

    function prepareInstanceFrom(data, definition) {
        var instance = {
            id: data.id
        };
        fillPrimitiveValues(instance, data, definition);
        fillEntitiesById(instance, data, definition);
        fillInstanceMethods();
        return instance;
    }

    function fillPrimitiveValues(instance, data, definition) {
        for (var field in definition) {
            if (!definition.hasOwnProperty(field)) continue;
            var fieldType = getFieldType(definition[field]);
            if (fieldType.primitiveType) {
                instance[field] = resolveValueByPrimitiveType(data[field], fieldType);
            }
        }
    }

    function fillEntitiesValues(instance, data, definition) {
        for (var field in definition) {
            var fieldType = getFieldType(definition[field]);
            if(!fieldType.primitiveType) {
                instance[field] = data.author;
            }
        }
    }

    function fillEntitiesById(instance, data, definition) {
        for (var field in definition) {
            if (!definition.hasOwnProperty(field)) continue;
            var fieldType = getFieldType(definition[field]);
            if (!fieldType.primitiveType) {
                var AssociatedEntity = definition[field].association;
                instance[field] = AssociatedEntity.findOne(data[field]);
            }
        }
    }

    function fillDefaultValuesIfNeeded(instance, definition) {
    }
    function fillInstanceMethods() {
    }

    function resolveValueByPrimitiveType(value, fieldType) {
        if (!value) return null;
        var DataTypes = Entity.dataTypes;
        switch (fieldType) {
            case DataTypes.STRING: return '' + value;
            case DataTypes.DATE: return new Date(value);
            case DataTypes.NUMBER: return Number(value);
            default: throw new Error("Unsupported data type: " + fieldType);
        }
    }

    function getFieldType(fieldDescription) {
        if (fieldDescription instanceof DataType) {
            return fieldDescription;
        }
        return fieldDescription.type;
    }

    function DataType(typeKey, primitiveType) {
        this.key = typeKey;
        this.primitiveType = !!primitiveType;
    }

    return Entity;
})();
var User = (function () {

    var DataTypes = Entity.dataTypes;

    function User() {
        this.model = 'Users';
        this.storageKey = 'users';
        this.sequence = 'user_sequence';
        this.definition = {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING
        };
        this.classMethods = {
            getLoggedIn: function () {
                return loggedInUserMock;
            }
        };
        this.instanceMethods = {
            getFullName: function () {
                return this.firstName + ' ' + this.lastName;
            }
        };
    }

    var loggedInUserMock = {
        id: '436',
        firstName: 'Alexey',
        lastName: 'Popov',
        getFullName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    };

    extend(User, Entity);
    return new User();
})();
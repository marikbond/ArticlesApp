var User = (function () {

    var _modelParams_ = {
        model: 'Users',
        storage_key: 'users',
        sequence: 'user_sequence',
        associations: []
    };

    var loggedInUserMock = {
        id: '436',
        firstName: 'Alexey',
        lastName: 'Popov',
        getFullName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    };

    return {
            create: function () {
                //TODO реальзовать функцию
            },
            findOne: function (userId) {
                //TODO реализовать функцию поиска нужного юзера
                //данное значение выступает в качестве mock
                return loggedInUserMock;
            },
            getLoggedIn: function () {
                //TODO реализовать получение зарегистрированного пользователя
                //данное значение выступает в качестве mock
                return loggedInUserMock;
            }
        }
    }
)();
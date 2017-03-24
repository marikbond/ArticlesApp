var User = (function () {

    var _modelParams_ = {
        model: 'Users',
        storage_key: 'users',
        sequence: 'user_sequence',
        associations: []
    };

    return {
            create: function () {
                //TODO реальзовать функцию
            },
            find: function (userId) {
                //TODO реализовать функцию поиска нужного юзера
                //данное значение выступает в качестве mock
                return {
                    id: '436',
                    firstName: 'Alexey',
                    lastName: 'Popov',
                    getFullName: function () {
                        return this.firstName + ' ' + this.lastName;
                    },
                    model: User
                };
            },
            getLoggedIn: function () {
                //TODO реализовать получение зарегистрированного пользователя
                //данное значение выступает в качестве mock
                return {
                    id: '436',
                    firstName: 'Alexey',
                    lastName: 'Popov',
                    getFullName: function () {
                        return this.firstName + ' ' + this.lastName;
                    },
                    model: User
                }
            }
        }
    }
)();
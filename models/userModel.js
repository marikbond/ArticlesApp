var userModel = (function () {
    function getFullName() {
        var fullName = user.name + ' ' + user.lastName;
        return fullName;
    }
        var user = {
            'id436': {
                'name': 'Alexey',
                'lastName': 'Popov',
                'fullName': getFullName(),
                'id': 412,
                'age': 24
            }
        };
    return {
            save: function () {
            },
            getLoggedIn: function () {
                return user.id436
            }

        }
    }
)();
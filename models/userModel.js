var userModel = (function () {
        // function getFullName() {
        //     var fullName = user.id436.name + ' ' + user.id436.lastName;
        //     console.log(fullName);
        //     return fullName;
        // },
        var user = {
            'id436': {
                'firstName': 'Alexey',
                'lastName': 'Popov',
                'fullName': function () {
                    return this.firstName + ' ' + this.lastName;
                },
                'id': '436'
                }
            };
    return {
            save: function () {
                //TODO
            },
            getLoggedIn: function () {
                return user.id436.fullName()
            }
        }
    }
)();
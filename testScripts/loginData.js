var LoginData = function () {
    return [{
            user: '',
            password: '',
            validEmail: false,
            expected: 'Enter an email or phone number'
        },
        {
            user: '!@#',
            password: '',
            validEmail: false,
            expected: 'Enter a valid email or phone number'
        },
        {
            user: 'gonzalo.spe',
            password: '',
            validEmail: true,
            expected: 'Enter a password'
        },
        {
            user: 'gonzalo.spe',
            password: '123',
            validEmail: true,
            expected: 'Wrong password. Try again or click Forgot password to reset it.'
        },
        {
            user: 'gonzalo.spe',
            password: '*****',
            validEmail: true,
            expected: 'Success'
        }
    ];
}
module.exports = new LoginData()

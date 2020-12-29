const shorten = require('./functions/shorten')
const redirect = require('./functions/redirect')
const remove = require('./functions/remove')
const count = require('./functions/count')
const colors = require('colors/safe')

const router = async (command) => {
    /*
        [ROUTER]
        The router function is the first level of command processing in the program. It takes the user's input and then
        routes it to the corresponding controller. If the requested command doesn't exist, it returns the 404 status
        to the main function.
    */
    const arguments = command && command.split("?")
    if (arguments) {
        let reqStatus = {}
        switch (arguments[0]) {
            case '/shorten':
                reqStatus = await shorten(arguments[1])
                console.log(reqStatus)
                return 200
            
            case '/redirect':
                reqStatus = await redirect(arguments[1])
                console.log(reqStatus)
                return 200
            
            case '/delete':
                reqStatus = await remove(arguments[1])
                console.log(reqStatus)
                return 200
            
            case '/count':
                reqStatus = await count(arguments[1])
                console.log(reqStatus)
                return 200

            case '/exit':
                return 0

            case '/help':
                const entries = [
                    colors.bold('Available Commands:'),
                    '1. /shorten?url=FULL_URL&short_path=SHORT_PATH - Shortens the requested URL.',
                    '2. /redirect?url=SHORTENED_URL - Returns the full page URL of the requested short URL (analogous to an http redirect in an HTTP app).',
                    '3. /delete?url=SHORTENED_URL - Deletes the requested shortened URL from the database.',
                    '4. /count?url=SHORTENED_URL - Returns the amount of times that the requested link has been used.',
                    '5. /exit - Exits the program.'
                ]
                entries.forEach(item => {
                    console.log(item)
                })
                return 200

            default:
                return 404
        }
    }
    
}

module.exports = router
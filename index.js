console.log('\n'.repeat(process.stdout.rows))
const prompt = require('prompt');
const colors = require("colors/safe")


const commandRouter = require('./modules/commandRouter')

prompt.message = ''
prompt.delimiter = colors.green(' >')
prompt.start();  // Initiate user prompt module

const main = async () => {
    prompt.get([colors.green('Pendekin.js')], async (err, result) => {
        /* 
            [MAIN PROMPT]
            This function prompts the user for input. It then passes the command into the commandRouter module which will
            handle the application's functionality based on the user's request. The commandRouter module returns the request 
            status as an integer.
        */
        let status = await commandRouter(result[colors.green('Pendekin.js')])

        if (status == 404) {
            console.log('Command not found! Type /help to get a list of commands.')
        }
        else if (status == 0) {
            console.log('Exiting...')
            return process.exit(0)
        }

        // Because of the prompt module's asynchronous nature in Javascript, to loop back to start we have to call
        // the main function recursively.
        main()
    })
}

main()


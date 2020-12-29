const split = async (request) => {
    /*
        [SPLIT]
        The split function processes a user request for easier user in other parts of the program (for those familiar with
        Express.js, this function basically emulates the request processing in that framework, wherein it returns URL queries
        as a JSON object accessible by using request.query).
    */
    request = request && request.split('&')
    if (request) {
        let args = {}
        request.forEach(item => {
            argument = item.split('=')
            if (argument[0] && argument[1]) {
                args[argument[0]] = argument[1]
            }
        })
        return args
    }
}

module.exports = split
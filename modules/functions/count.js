const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const splitter = require('./splitter')

const count = async (request) => {
    /*
        [COUNT]
        This function handles a count request. It takes the user's URL argument and then checks it against the database.
        If the requested URL exists, it returns the URL's view count to the user (i.e: a rudimentary analytics function).
    */
    const args = await splitter(request)
    const shortID = args && args['url'].split('https://pendekin.id/')[1]
    
    if (shortID) {
        result = await prisma.links.findUnique({
            where: {
                link: shortID || ' '
            }
        })
        
        if (result) {
            return result.count
        }
        else {
            return `Error: ${args['url']} not found in the service.\n`
        }
    }
    else {
        return `Error: Please specify a valid URL.\n`
    }
    
}


module.exports = count
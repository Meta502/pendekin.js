const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const splitter = require('./splitter')

const redirect = async (request) => {
    /*
        [REDIRECT]
        The redirect function handles a redirect request. It takes the user's URL query and checks it against the database.
        If the requested link exists, it increments the URL's redirect count in the database and returns the URL to the user.
        (if this were an http application, an analogy it would probably redirect the user to an external site after handling 
        the analytics.)
    */
    const args = await splitter(request)
    const shortID = args && args['url'].split('https://pendekin.id/')[1]

    if (shortID) {
        result = await prisma.links.findUnique({
            where: {
                link: shortID
            }
        })
        
        if (result) {
            await prisma.links.update({
                where: {
                    link: shortID
                },
                data: {
                    count: {
                        increment: 1
                    }
                }
            })
            return result.fullLink
        }
        else {
            return `Error: ${args['url']} not found in the service.\n`
        }
    }
    else {
        return `Error: Please specify a valid URL`    
    }  
}


module.exports = redirect
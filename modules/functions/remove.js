const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const splitter = require('./splitter')

const remove = async (request) => {
    /*
        [REMOVE]
        This function handles a remove request. It takes the user's URL argument and then checks the user's URL against the
        database. If it finds the requested link, it will then remove it from the database and returns "Success".
    */
    const args = await splitter(request)
    const shortID = args && args['url'].split('https://pendekin.id/')[1]
    
    if (args && args['url']) {
        result = await prisma.links.findUnique({
            where: {
                link: shortID
            }
        })
        
        if (result) {
            await prisma.links.delete({
                where: {
                    link: shortID
                }
            })
            return `Success`
        }
        else {
            return `Error: ${args['url']} not found in the service.\n`
        }
    }
    else {
        return `Error: Please specify a URL`
    }
    
}


module.exports = remove
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { customAlphabet } = require('nanoid')
const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890', 8)
const splitter = require('./splitter')

const shorten = async (request) => {
    /*
        [SHORTEN]
        This function handles a shorten request. It first passes the request into the splitter function to get all the
        required parameters. Afterwards, it checks if a link with the requested short path exists in the database. It then
        inserts a new shortened link into the links table with either the requested short path or a random, 8 character link.
        At the end of the function, it returns the shortened URL.
    */
    const args = await splitter(request)
    let check = await prisma.links.findUnique({
        where: {
            link: args && args['short_path'] || ' '
        }
    })

    if (!check) {
        if (args && args['url']) {
            let inserted = await prisma.links.create({
                data: {
                    fullLink: args['url'],
                    link: args['short_path'] || nanoid(),
                    count: 0
                }
            })
            return `https://pendekin.id/${inserted['link']}`
        }
    
        else {
            return 'You must insert a URL.'
        }
    }
    else {
        return 'The requested short path already exists.'
    }
    
}

module.exports = shorten
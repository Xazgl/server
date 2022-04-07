import { NextApiRequest } from 'next'
import { unsign } from './signature'
import db from '../../prisma'

export default async function checkCookie (req: NextApiRequest) {
    const token = req.cookies['sid']
    if (token) {
        const sessionToken = unsign(token, process.env.SECRET!)
        if (sessionToken && typeof sessionToken === 'string') {
            const session = await db.session.findUnique({ where: { sessionToken }, 
                include: { admin: true } })
            if (session) {
                return { admin: session.admin }
            }
        }
    }
}
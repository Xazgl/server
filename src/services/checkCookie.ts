export default async function checkSession (token: string) {
    // const token = req.cookies['sid']
    // if ((typeof window === 'undefined') && token) {
        if ((typeof global === 'object') && token) {
        const unsign = (await import('./signature')).unsign
        const sessionToken = unsign(token, process.env.SECRET!)
        if (sessionToken && typeof sessionToken === 'string') {
            const db = (await import('../../prisma')).default
            const session = db.session.findUnique({ where: { sessionToken }, 
                include: { admin: true } })
            if (session) {
                return { admin: session.admin }
            }
        }
    }
}
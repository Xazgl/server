import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma';
import checkCookie from '../../src/services/checkCookie';

export default async function findClient(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const admin = await checkCookie(req)
            if (admin) {
                const clients = await prisma.client.findMany()
                res.send(clients)
            } else {
                res.status(403).send({ message: "Нет прав доступа" })
            }
            //найти клиентов из базы
        }catch (error) {
            res.status(500).send({ message: "Ошибка сервера" })
        }
    }else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}






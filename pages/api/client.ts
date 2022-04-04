import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma';

export default async function findClient(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            //найти клиентов из базы
            const clients = await prisma.client.findMany()
            res.send(clients)
        }catch (error) {
            res.status(500).send({ message: "Ошибка сервера" })
        }
    }else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}






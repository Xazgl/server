import type { NextApiRequest, NextApiResponse } from 'next'
import { CreateSaleDto } from '../../@types';
import db, { Sales } from '../../prisma';

export default async function findClient(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { title, description, img } = req.body as CreateSaleDto
        try {
            //найти клиентов из базы
            const newSale = await db.sales.create({
                data: {
                    title, description, img, active: true
                }
            })
            res.send(newSale)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: "Ошибка сервера" })
        }
    } else if (req.method === 'GET') {
        try {
            //найти клиентов из базы
            const sales = await db.sales.findMany()
            res.send(sales)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: "Ошибка сервера" })
        }
    } else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}
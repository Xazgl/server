import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';
import db from '../../prisma';
// import  clientsModel  from '../src/schema/model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {  buyOrService,carModel,selectBuy,complect} = req.body
        try {
            //письмо
            let testEmailAccount = await nodemailer.createTestAccount()
            let transporter = nodemailer.createTransport({
                host: 'smtp.yandex.ru',
                port: 465,
                secure: true,
                auth: {
                    user: 'UriyAPKOHT@yandex.ru',
                    pass: 'hhioyggtvmasygyq',
                },
            })
            let result = await transporter.sendMail({
                from: '"Заявка на Покупку" UriyAPKOHT@yandex.ru',
                to: 'UriyAPKOHT@yandex.ru,a.morgunova@arkont.ru,verbickij@arkont.ru,gubin@arkont.ru,lukyanov@arkont.ru,rusakova@arkont.ru',
                subject: 'Заявка на Покупку',
                text: `Заявка на  ${buyOrService} машины модели ${carModel}  с помощью ${selectBuy}комплектации ${complect}с opel.ru`,
                html:
                    `Заявка на  ${buyOrService} машины модели ${carModel}  с помощью ${selectBuy}комплектации ${complect}с opel.ru`,
            })
            // //регистрация в базу
            // const clientSend = await db.client.create({data: {
            //     modal,
            //     serviceNameMain,

            // }})
            res.send(result);
        } catch (error) {
            res.status(500).send({ message: "Ошибка сервера" })
        }
    } else {
        res.status(404).send({ message: "Неверный адрес" })
    }
}
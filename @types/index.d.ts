import { Client, Sales,ClientеTradeIn } from "@prisma/client";

export type ClientDto = Omit<Client, 'updatedAt'>
export type ClientеTradeInDto = Omit<ClientеTradeIn, 'updatedAt'>

export type CreateSaleDto = Pick<Sales, 'title' | 'description'>


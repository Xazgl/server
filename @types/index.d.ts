import { Client, Sales } from "@prisma/client";

export type ClientDto = Omit<Client, 'updatedAt'>

export type CreateSaleDto = Pick<Sales, 'title' | 'description' | 'img'>
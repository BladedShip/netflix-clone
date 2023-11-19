import { PrismaClient } from "@prisma/client";

const client = global.prismaDB || new PrismaClient();

if(process.env.NODE_ENV === 'production') global.prismaDB = client;

export default client;


// Why does this exist?
// HMR kinda breaks prisma, so we need to make sure we only have one instance of it
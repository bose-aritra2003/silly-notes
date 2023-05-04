import { PrismaClient } from '@prisma/client'
import {hash} from "bcrypt";

const client = new PrismaClient()

const main = async () => {
    const password = await hash("12345", 12);
    const seedUser = await client.user.upsert({
        where: {email: "test@test.com"},
        update: {},
        create: {
            email: "test@test.com",
            name: "Aritra Bose",
            password: password
        }
    })
    console.log(seedUser);
}

main()
    .then(async () => {
        await client.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await client.$disconnect()
        process.exit(1)
    })
import { Prisma, PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
})

const prisma = new PrismaClient(
    {
        adapter
    }
)

const userData: Prisma.UserCreateInput[]=[
    {
        name: "Nick Fury",
        email: "anasfaiz0811@gmail.com",
        password: "12345678"
    }
]

export async function main(){
    for (const u of userData){
        await prisma.user.create({data: u})
    }
}

main()

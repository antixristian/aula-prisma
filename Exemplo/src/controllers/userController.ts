import { Prisma, PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma = new PrismaClient();

class UserController {
    async create(req: Request, res: Response) {
        try {
            const { email, name } = req.body;
            let userInput: Prisma.UserCreateInput = {
                email,
                name
            };
            const user = await prisma.user.create({
                data: userInput
            });
            return res.status(201).json(user);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    async show(req: Request, res: Response) {
        try {
            const user = await prisma.user.findMany({
                include: {
                    posts: true
                }
            });
            return res.status(200).json(user);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new UserController();
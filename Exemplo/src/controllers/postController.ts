import { Prisma, PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma = new PrismaClient();

class PostController {
    async create(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { title, content} = req.body;
            let postInput: Prisma.PostCreateInput = {
                author : { connect: { id: Number(id) } },
                title,
                content
            };
            const post = await prisma.post.create({
                data: postInput
            });
            return res.status(201).json(post);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    async show(req: Request, res: Response) {
        try {
            const post = await prisma.post.findMany({
                include: {
                    categories: true
                }
            });
            return res.status(200).json(post);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new PostController();
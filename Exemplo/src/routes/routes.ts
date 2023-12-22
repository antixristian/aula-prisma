import { Router } from "express";
import UserController from "../controllers/userController";
import PostController from "../controllers/postController";

const routes = Router()

routes.post("/user", UserController.create)
routes.get("/users", UserController.show)

routes.post("/post/:id", PostController.create)
routes.get("/posts", PostController.show)

export default routes;
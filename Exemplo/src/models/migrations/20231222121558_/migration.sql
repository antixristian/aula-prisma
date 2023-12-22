-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" VARCHAR(30),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

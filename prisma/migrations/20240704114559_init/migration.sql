/*
  Warnings:

  - You are about to alter the column `user_username` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(25)`.
  - A unique constraint covering the columns `[user_username_lower]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_description` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_username_lower` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'MODERATOR';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "user_description" VARCHAR(255) NOT NULL,
ADD COLUMN     "user_username_lower" VARCHAR(25) NOT NULL,
ALTER COLUMN "user_username" SET DATA TYPE VARCHAR(25);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_username_lower_key" ON "User"("user_username_lower");

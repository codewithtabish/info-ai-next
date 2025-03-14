/*
  Warnings:

  - You are about to drop the column `creadits` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "creadits",
ADD COLUMN     "credits" INTEGER DEFAULT 5000;

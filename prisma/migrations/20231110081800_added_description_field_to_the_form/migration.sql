/*
  Warnings:

  - Added the required column `description` to the `Form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Form" ADD COLUMN     "description" TEXT NOT NULL;

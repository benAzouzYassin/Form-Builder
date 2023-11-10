/*
  Warnings:

  - A unique constraint covering the columns `[ownerEmail]` on the table `Form` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Form_ownerEmail_key" ON "Form"("ownerEmail");

-- CreateIndex
CREATE INDEX "Form_ownerEmail_idx" ON "Form"("ownerEmail");

/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `EventCreator` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "EventCreator_email_key" ON "EventCreator"("email");

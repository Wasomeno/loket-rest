/*
  Warnings:

  - Added the required column `sale_end` to the `EventTicketType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sale_start` to the `EventTicketType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EventTicketType" ADD COLUMN     "sale_end" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "sale_start" TIMESTAMP(3) NOT NULL;

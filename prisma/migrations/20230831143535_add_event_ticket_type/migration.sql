/*
  Warnings:

  - You are about to drop the column `time` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "time",
ADD COLUMN     "end_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "end_time" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "start_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "start_time" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "EventTicketType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "description" INTEGER NOT NULL,
    "event_id" INTEGER NOT NULL,

    CONSTRAINT "EventTicketType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EventTicketType" ADD CONSTRAINT "EventTicketType_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_partyId_fkey";

-- AlterTable
ALTER TABLE "Member" ALTER COLUMN "partyId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE SET NULL ON UPDATE CASCADE;

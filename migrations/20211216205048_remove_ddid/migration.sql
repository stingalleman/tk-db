/*
  Warnings:

  - You are about to drop the column `ddId` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `ddId` on the `Party` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Member_ddId_key";

-- DropIndex
DROP INDEX "Party_ddId_key";

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "ddId";

-- AlterTable
ALTER TABLE "Party" DROP COLUMN "ddId";

-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ddId" TEXT NOT NULL,
    "cabinet" BOOLEAN NOT NULL,
    "cabinetTitle" TEXT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "seat" INTEGER,
    "profileUrl" TEXT NOT NULL,
    "slogan" TEXT,
    "pictureUrl" TEXT NOT NULL,
    "partyId" TEXT NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Party" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ddId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "shorthand" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,

    CONSTRAINT "Party_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_ddId_key" ON "Member"("ddId");

-- CreateIndex
CREATE UNIQUE INDEX "Member_slug_key" ON "Member"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Member_name_key" ON "Member"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Party_ddId_key" ON "Party"("ddId");

-- CreateIndex
CREATE UNIQUE INDEX "Party_slug_key" ON "Party"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Party_shorthand_key" ON "Party"("shorthand");

-- CreateIndex
CREATE UNIQUE INDEX "Party_name_key" ON "Party"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Party_position_key" ON "Party"("position");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

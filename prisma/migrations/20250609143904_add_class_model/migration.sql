-- CreateTable
CREATE TABLE "_UserTaughtClasses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserTaughtClasses_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_UserStudentClasses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserStudentClasses_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserTaughtClasses_B_index" ON "_UserTaughtClasses"("B");

-- CreateIndex
CREATE INDEX "_UserStudentClasses_B_index" ON "_UserStudentClasses"("B");

-- AddForeignKey
ALTER TABLE "_UserTaughtClasses" ADD CONSTRAINT "_UserTaughtClasses_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserTaughtClasses" ADD CONSTRAINT "_UserTaughtClasses_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserStudentClasses" ADD CONSTRAINT "_UserStudentClasses_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserStudentClasses" ADD CONSTRAINT "_UserStudentClasses_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

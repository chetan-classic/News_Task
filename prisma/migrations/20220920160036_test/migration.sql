/*
  Warnings:

  - You are about to drop the column `description` on the `News` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `News` table. All the data in the column will be lost.
  - Added the required column `ceo` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyname` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `insider` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outsider` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "News" DROP COLUMN "description",
DROP COLUMN "year",
ADD COLUMN     "ceo" TEXT NOT NULL,
ADD COLUMN     "companyname" TEXT NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "insider" TEXT NOT NULL,
ADD COLUMN     "outsider" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

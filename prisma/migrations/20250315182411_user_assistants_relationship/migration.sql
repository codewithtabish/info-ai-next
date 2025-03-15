-- CreateTable
CREATE TABLE "UserAIAssistant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "instruction" TEXT NOT NULL,
    "userInstruction" TEXT NOT NULL,
    "sampleQuestions" TEXT[],
    "userId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAIAssistant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserAIAssistant" ADD CONSTRAINT "UserAIAssistant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

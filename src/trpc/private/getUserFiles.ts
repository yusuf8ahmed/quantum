import { privateProcedure } from "@/trpc/trpc";
import { db } from "@/db";

export default privateProcedure.query(async ({ ctx }) => {
  const { userId } = ctx;

  return await db.file.findMany({
    where: {
      userId: userId,
    },
  });
});

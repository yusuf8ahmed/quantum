import { privateProcedure } from "@/trpc/trpc";
import { db } from "@/db";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export default privateProcedure
  .input(z.object({ key: z.string() }))
  .mutation(async ({ ctx, input }) => {
    const { userId } = ctx;

    const file = await db.file.findFirst({
      where: {
        key: input.key,
        userId,
      },
    });

    if (!file) throw new TRPCError({ code: "NOT_FOUND" });

    return file;
  });

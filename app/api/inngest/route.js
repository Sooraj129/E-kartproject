import { serve } from "inngest/next";
import { inngest, syncDeleteUser, syncUserCreation, syncUserUpdate } from "@/Config/inngest";

export const { GET, POST, PUT } = serve(
  inngest,
  [syncUserCreation, syncUserUpdate, syncDeleteUser]
);


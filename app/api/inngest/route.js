import { serve } from "inngest/next";
import { inngest, syncDeleteUser, syncUserCreation, syncUserUpdate } from "@/Config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdate,
    syncDeleteUser
  ],
});

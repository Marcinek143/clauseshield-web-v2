import "server-only";
import { createClient } from "@supabase/supabase-js";

type SupabaseServerOptions = {
  useServiceRole?: boolean;
};

export function supabaseServer(options: SupabaseServerOptions = {}) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const apiKey = options.useServiceRole
    ? supabaseServiceRoleKey
    : supabaseAnonKey;

  if (!supabaseUrl || !apiKey) {
    if (options.useServiceRole) {
      throw new Error("SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY missing");
    }
    throw new Error("SUPABASE_URL or SUPABASE_ANON_KEY missing");
  }

  return createClient(supabaseUrl, apiKey, {
    auth: { persistSession: false },
  });
}

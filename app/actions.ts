"use server";

export async function leakEnv() {
  return process.env.VERCEL_PLATFORM_PROTECTION || "NO_ENV_FOUND";
}

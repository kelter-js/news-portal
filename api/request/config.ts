const IS_PRODUCTION = process.env.NODE_ENV === "production";

const protocol = IS_PRODUCTION ? "https" : "http";
const host = process.env.NEXT_PUBLIC_VERCEL_URL || "localhost:3000";

export const config = {
  baseUrl: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`,
};

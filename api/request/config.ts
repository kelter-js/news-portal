const IS_PRODUCTION = process.env.NODE_ENV === "production";

const protocol = IS_PRODUCTION ? "https" : "http";
const host = process.env.NEXT_PUBLIC_BASE_URL || "localhost:3000";

export const config = {
  baseUrl: `https://news-portal-o92egsazf-arkadiys-projects-29e903eb.vercel.app/api`,
};

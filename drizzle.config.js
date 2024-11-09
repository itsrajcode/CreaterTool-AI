/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://cloudy_owner:DpJFW7cZNCM6@ep-autumn-forest-a2ob9ons.eu-central-1.aws.neon.tech/CreatorTool-AI?sslmode=require,"
    }
  };
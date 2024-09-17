// /** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://expenses-tracker_owner:nFk7fXqp1udJ@ep-restless-bar-a5v256m1.us-east-2.aws.neon.tech/expenses-tracker?sslmode=require',
    }
  } 
export default () => ({
  port: process.env.PORT,
  database: process.env.DB_CONNECTION_STRING,
  jwtSecret: process.env.JWT_SECRET,
  refreshSecret: process.env.REFRESH_SECRET,
  accessExpiryHours: 1,
  refreshExpiryHours: 24,
});

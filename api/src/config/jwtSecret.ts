export default () => ({
  jwtSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
  jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
});

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8085),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '9e6c3672861d765b7502ba0fa53c3aa2'),
    },
  },
});

export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express Swagger API',
      version: '1.0.0',
      description: 'A simple Express API with Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'], // path to route files for Swagger comments
};

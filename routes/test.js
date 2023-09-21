/// <reference path="../global.d.ts" />

/** @param {import('fastify').FastifyInstance} app */
export default async function (app) {
  app.get('/test', async (req, res) => {
    return { hello: 'world', hasDynamite: app.platformatic.config.dynamite }
  })
}

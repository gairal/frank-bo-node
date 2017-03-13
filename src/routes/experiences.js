import Router from 'koa-router'
import utils from '../services/utils'
const router = new Router({ prefix: '/experiences' })

/**
 * @swagger
 * /experiences:
 *   get:
 *     description: GET All experiences
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: array of Experience objects
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Experience'
 *     tags:
 *       - experience
 */
router.get('/', async ctx => {
  try {
    let result = await ctx.db.getAll('experience', true)
    ctx.body = result
  } catch (err) {
    utils.log(ctx, err)
  }
})

/**
 * @swagger
 * /experiences/{id}:
 *   get:
 *     description: GET an experience detail
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Experience id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: an Experience object
 *         schema:
 *           $ref: '#/definitions/Experience'
 *     tags:
 *       - experience
 */
router.get('/:id', async ctx => {
  const experience = ctx.params.id

  try {
    let result = await ctx.db.getById('experience', experience)
    ctx.body = result
  } catch (err) {
    utils.log(ctx, err)
  }
})

export default router

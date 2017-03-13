import Router from 'koa-router'
import utils from '../services/utils'
const router = new Router({ prefix: '/educations' })

/**
 * @swagger
 * /educations:
 *   get:
 *     description: GET All educations
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: array of Education objects
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Education'
 *     tags:
 *       - education
 */
router.get('/', async ctx => {
  try {
    let result = await ctx.db.getAll('education', true)
    ctx.body = result
  } catch (err) {
    utils.log(ctx, err)
  }
})

/**
 * @swagger
 * /educations/{id}:
 *   get:
 *     description: GET an education detail
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Education id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: an Education object
 *         schema:
 *           $ref: '#/definitions/Education'
 *     tags:
 *       - education
 */
router.get('/:id', async ctx => {
  const education = ctx.params.id

  try {
    let result = await ctx.db.getById('education', education, true)
    ctx.body = result
  } catch (err) {
    utils.log(ctx, err)
  }
})

export default router

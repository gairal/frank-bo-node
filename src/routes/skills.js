import Router from 'koa-router'
import utils from '../services/utils'
const router = new Router({ prefix: '/skills' })

/**
 * @swagger
 * /skills:
 *   get:
 *     description: GET All skills
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: array of Skill objects
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Skill'
 *     tags:
 *       - skill
 */
router.get('/', async ctx => {
  try {
    let result = await ctx.db.getAll('skill')
    ctx.body = result
  } catch (err) {
    utils.log(ctx, err)
  }
})

/**
 * @swagger
 * /skills/categories:
 *   get:
 *     description: Get the skills ordered by categories
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: an array of Categories
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/SkillsByCategory'
 *     tags:
 *       - skill
 */
router.get('/categories', async ctx => {
  try {
    let result = await ctx.db.getAllByCategory('skill')
    ctx.body = result
  } catch (err) {
    utils.log(ctx, err)
  }
})

/**
 * @swagger
 * /skills/{id}:
 *   get:
 *     description: GET a skill detail
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Skill id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: a Skill object
 *         schema:
 *           $ref: '#/definitions/Skill'
 *     tags:
 *       - skill
 */
router.get('/:id', async ctx => {
  const skill = ctx.params.id

  try {
    let result = await ctx.db.getById('skill', skill)
    ctx.body = result
  } catch (err) {
    utils.log(ctx, err)
  }
})

/**
 * @swagger
 * /skills/categories/{id}:
 *   get:
 *     description: Get the skills of one category
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: a Category
 *         schema:
 *           $ref: '#/definitions/SkillsByCategory'
 *     tags:
 *       - skill
 */
router.get('/categories/:id', async ctx => {
  const category = ctx.params.id

  try {
    let result = await ctx.db.getByCategory('skill', category)
    ctx.body = result
  } catch (err) {
    utils.log(ctx, err)
  }
})

export default router

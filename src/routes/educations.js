import Router from 'koa-router'
import utils from '../services/utils'
const router = new Router({ prefix: '/educations' })

/**
 * @swagger
 * resourcePath: /educations
 * description: All about Education
 */

/**
 * @swagger
 * path: /educations
 * operations:
 *   -  httpMethod: GET
 *      summary: GET All educations
 *      notes: Returns an array of educations
 *      responseClass: Education
 *      nickname: educations
 *      consumes:
 *        - text/html
 */
router.get('/', async ctx => {
  try {
    let result = await ctx.db.getAll('education')
    ctx.body = result
  } catch (err) {
    utils.log(ctx, err)
  }
})

/**
 * @swagger
 * path: /educations/{id}
 * operations:
 *   -  httpMethod: GET
 *      summary: GET an education detail
 *      notes: Returns one education object
 *      responseClass: Education
 *      nickname: education
 *      consumes:
 *        - text/html
 *      parameters:
 *        - name: id
 *          description: education id
 *          paramType: path
 *          required: true
 *          dataType: string
 */
router.get('/:id', async ctx => {
  const education = ctx.params.id

  try {
    let result = await ctx.db.getById('education', education)
    ctx.body = result
  } catch (err) {
    utils.log(ctx, err)
  }
})

/**
 * @swagger
 * models:
 *   Education:
 *     id: Education
 *     properties:
 *       id:
 *         type: String
 *       name:
 *         type: String
 *       short_descritpion:
 *         type: String
 *       diploma:
 *         type: String
 *       place:
 *         type: String
 *       year_in:
 *         type: String
 *       year_out:
 *         type: String
 *       website:
 *         type: String
 *       image_id:
 *         type: String
 */

export default router

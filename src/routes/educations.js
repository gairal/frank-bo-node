import Router from 'koa-router';
import utils from '../services/utils';

const router = new Router({ prefix: '/educations' });

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
router.get('/', async (ctx) => {
  try {
    const result = await ctx.db.getAll('education', true, 'year_in');
    ctx.body = result;
  } catch (err) {
    utils.log(ctx, err);
  }
});

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
router.get('/:id', async (ctx) => {
  try {
    const result = await ctx.db.getById('education', ctx.params.id);
    ctx.body = result;
  } catch (err) {
    utils.log(ctx, err);
  }
});

/**
 * @swagger
 * /educations/{id}/skills:
 *   get:
 *     description: GET Skills linked to an education experience
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
 *         description: an array of Skill objects
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Skill'
 *     tags:
 *       - work
 */
router.get('/:id/skills', async (ctx) => {
  try {
    const result = await ctx.db.getSkillsFromId('education', ctx.params.id);
    ctx.body = result;
  } catch (err) {
    utils.log(ctx, err);
  }
});

export default router;

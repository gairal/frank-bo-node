import Router from 'koa-router';
import utils from '../services/utils';

const router = new Router({ prefix: '/works' });

/**
 * @swagger
 * /works:
 *   get:
 *     description: GET All works
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: array of Work objects
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Work'
 *     tags:
 *       - work
 */
router.get('/', async (ctx) => {
  try {
    const result = await ctx.db.getAll('work', false);
    ctx.body = result;
  } catch (err) {
    utils.log(ctx, err);
  }
});

/**
 * @swagger
 * /works/{id}:
 *   get:
 *     description: GET an work detail
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Work id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: an Work object
 *         schema:
 *           $ref: '#/definitions/Work'
 *     tags:
 *       - work
 */
router.get('/:id', async (ctx) => {
  const work = ctx.params.id;

  try {
    const result = await ctx.db.getById('work', work);
    ctx.body = result;
  } catch (err) {
    utils.log(ctx, err);
  }
});

export default router;

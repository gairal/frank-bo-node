import Router from 'koa-router';
import utils from '../services/utils';

const router = new Router({ prefix: '/travels' });

/**
 * @swagger
 * /travels:
 *   get:
 *     description: GET All travels
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: array of Travel objects
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Travel'
 *     tags:
 *       - travel
 */
router.get('/', async (ctx) => {
  try {
    const result = await ctx.db.getAll('travel', false);
    ctx.body = result;
  } catch (err) {
    utils.log(ctx, err);
  }
});

/**
 * @swagger
 * /travels/{id}:
 *   get:
 *     description: GET a travel detail
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Travel id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: a Travel object
 *         schema:
 *           $ref: '#/definitions/Travel'
 *     tags:
 *       - travel
 */
router.get('/:id', async (ctx) => {
  const travel = ctx.params.id;

  try {
    const result = await ctx.db.getById('travel', travel);
    ctx.body = result;
  } catch (err) {
    utils.log(ctx, err);
  }
});

export default router;

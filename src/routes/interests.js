import Router from 'koa-router';
import utils from '../services/utils';

const router = new Router({ prefix: '/interests' });

/**
 * @swagger
 * /interests:
 *   get:
 *     description: GET All interests
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: array of Interest objects
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Interest'
 *     tags:
 *       - interest
 */
router.get('/', async (ctx) => {
  try {
    const result = await ctx.db.getAll('interest', false);
    ctx.body = result;
  } catch (err) {
    utils.log(ctx, err);
  }
});

/**
 * @swagger
 * /interests/{id}:
 *   get:
 *     description: GET an interest detail
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Interest id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: an Interest object
 *         schema:
 *           $ref: '#/definitions/Interest'
 *     tags:
 *       - interest
 */
router.get('/:id', async (ctx) => {
  const interest = ctx.params.id;

  try {
    const result = await ctx.db.getById('interest', interest);
    ctx.body = result;
  } catch (err) {
    utils.log(ctx, err);
  }
});

/**
 * @swagger
 * /interests/categories/{id}:
 *   get:
 *     description: Get the interests of one category
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: a Category
 *         schema:
 *           $ref: '#/definitions/Category'
 *     tags:
 *       - interest
 */
router.get('/categories/:id', async (ctx) => {
  const category = ctx.params.id;

  try {
    const result = await ctx.db.getByCategory('interest', category);
    ctx.body = result;
  } catch (err) {
    utils.log(ctx, err);
  }
});

export default router;

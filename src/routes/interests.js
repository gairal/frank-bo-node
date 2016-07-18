import Router from 'koa-router'
import utils from '../services/utils'
const router = new Router({ prefix: '/interests' })

router.get('/', async ctx => {
    try {
        let result = await ctx.db.getAll('interest');
        ctx.body = result;
    } catch(err) {
        utils.log (ctx, err);
    }
})

router.get('/:id', async ctx => {
    const interest = ctx.params.id

    try {
        let result = await ctx.db.getById('interest', interest);
        ctx.body = result;
    } catch(err) {
        utils.log (ctx, err);
    }
})

router.get('/categories/:id', async ctx => {
    const category = ctx.params.id

    try {
        let result = await ctx.db.getByCategory('interest', category);
        ctx.body = result;
    } catch(err) {
        utils.log (ctx, err);
    }
})

export default router
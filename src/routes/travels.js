import Router from 'koa-router'
import utils from '../services/utils'
const router = new Router({ prefix: '/travels' })

router.get('/', async ctx => {
    try {
        let result = await ctx.db.getAll('travel');
        ctx.body = result;
    } catch(err) {
        utils.log (ctx, err);
    }
})

router.get('/:id', async ctx => {
    const travel = ctx.params.id

    try {
        let result = await ctx.db.getById('travel', travel);
        ctx.body = result;
    } catch(err) {
        utils.log (ctx, err);
    }
})

export default router
import Router from 'koa-router'
import utils from '../services/utils'
const router = new Router({ prefix: '/skills' })

router.get('/', async ctx => {
    try {
        let result = await ctx.db.getAll('skill');
        ctx.body = result;
    } catch(err) {
        utils.log (ctx, err);
    }
})

router.get('/:id', async ctx => {
    const skill = ctx.params.id

    try {
        let result = await ctx.db.getById('skill',skill);
        ctx.body = result;
    } catch(err) {
        utils.log (ctx, err);
    }
})

export default router
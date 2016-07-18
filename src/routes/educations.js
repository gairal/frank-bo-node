import Router from 'koa-router'
import utils from '../services/utils'
const router = new Router({ prefix: '/educations' })

router.get('/', async ctx => {
    try {
        let result = await ctx.db.getAll('education');
        ctx.body = result;
    } catch(err) {
        utils.log (ctx, err);
    }
})

router.get('/:id', async ctx => {
    const education = ctx.params.id

    try {
        let result = await ctx.db.getById('education', education);
        ctx.body = result;
    } catch(err) {
        utils.log (ctx, err);
    }
})

export default router
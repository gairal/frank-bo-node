import Router from 'koa-router'
import utils from '../services/utils'
const router = new Router({ prefix: '/experiences' })

router.get('/', async ctx => {
  try {
    let result = await ctx.db.getAll('experience')
    ctx.body = result
  } catch (err) {
    utils.log(ctx, err)
  }
})

router.get('/:id', async ctx => {
  const experience = ctx.params.id

  try {
    let result = await ctx.db.getById('experience', experience)
    ctx.body = result
  } catch (err) {
    utils.log(ctx, err)
  }
})

export default router

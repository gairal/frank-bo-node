import Router from 'koa-router'
import swaggerJSDoc from 'swagger-jsdoc'
const router = new Router()

let options = {
  swaggerDefinition: {
    info: {
      title: 'frank.gairal.com API',
      version: '1.0.0'
    }
  },
  apis: [
    './src/routes/swagger.js',
    './src/routes/educations.js',
    './src/routes/experiences.js',
    './src/routes/interests.js',
    './src/routes/skills.js',
    './src/routes/travels.js'
  ]
}

router.get('/swagger.json', async ctx => {
  let swaggerSpec = await swaggerJSDoc(options)
  ctx.body = swaggerSpec
})

/**
 * @swagger
 * tags:
 *  - name: education
 *    description: Everything about Frank's education
 *  - name: experience
 *    description: Everything about Frank's experiences
 *  - name: skill
 *    description: Everything about Frank's skills
 *  - name: interest
 *    description: Everything about Frank's interests
 *  - name: travel
 *    description: Everything about Frank's travels
 * definitions:
 *   Education:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - short_description
 *       - diploma
 *       - place
 *       - year_in
 *       - year_out
 *       - website
 *       - image_id
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       short_description:
 *         type: string
 *       diploma:
 *         type: string
 *       place:
 *         type: string
 *       year_in:
 *         type: string
 *       year_out:
 *         type: string
 *       website:
 *         type: string
 *       image_id:
 *         type: string
 *       extra:
 *         type: string
 *   Experience:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - description
 *       - date_in
 *       - place
 *       - title
 *       - website
 *       - accomplishments
 *       - image_id
 *       - display
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       date_in:
 *         type: string
 *       date_out:
 *         type: string
 *       place:
 *         type: string
 *       title:
 *         type: string
 *       website:
 *         type: string
 *       accomplishments:
 *         type: string
 *       image_id:
 *         type: string
 *       display:
 *         type: integer
 *   Interest:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - category_id
 *       - display
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       category_id:
 *         type: string
 *       display:
 *         type: integer
 *   Skill:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - category_id
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       category_id:
 *         type: string
 *       level:
 *         type: integer
 *   Travel:
 *     type: object
 *     required:
 *       - id
 *       - place
 *       - lat
 *       - lng
 *       - order
 *     properties:
 *       id:
 *         type: string
 *       place:
 *         type: string
 *       lat:
 *         type: number
 *       lng:
 *         type: number
 *       order:
 *         type: integer
 *   Category:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - order
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       order:
 *         type: integer
 *   SkillsByCategory:
 *     allOf:
 *       - $ref: '#/definitions/Category'
 *       -
 *         type: object
 *         required:
 *           - skills
 *         properties:
 *           skills:
 *             type: array
 *             items:
 *               - $ref: Skill
 */

export default router

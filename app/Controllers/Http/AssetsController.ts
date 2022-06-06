import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AssetsController {
    public index = async (ctx: HttpContextContract) => {
        return 'GET assets'
    }

    public store = async ({ request, response }: HttpContextContract) => {
        response.status(201);

        return {
            message: 'POST asset',
            body: request.body()
        }
    }

    public show = async ({ params }: HttpContextContract) => {
        return `GET asset: ${params.id}`;
    }

    public update = async ({ params }: HttpContextContract) => {
        return `PUT asset ${params.id}`
    }

    public destroy = async ({ params }: HttpContextContract) => {
        return `DELETE asset ${params.id}`
    }
}

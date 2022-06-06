import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Asset from 'App/Models/Asset';

export default class AssetsController {
    public index = async (ctx: HttpContextContract) => {
        return Asset.all(); // SELECT * FROM mysql_db.assets
    }

    public store = async ({ request, response }: HttpContextContract) => {
        const body = request.body();
        const asset = await Asset.create(body); // create instance and save 

        response.status(201);

        return asset;
    }

    public show = async ({ params }: HttpContextContract) => {
        return Asset.findOrFail(params.id);
    }

    public update = async ({ params, request }: HttpContextContract) => {
        const body = request.body();
        const asset = await Asset.findOrFail(params.id);

        asset.value = body.value;

        return asset.save();
    }

    public destroy = async ({ params }: HttpContextContract) => {
        const asset = await Asset.findOrFail(params.id);
        return asset.delete();
    }
}

import BaseController from "../utils/BaseController.js";


export class ColoniesController extends BaseController {
    constructor() {
        super('api/colonies')
        this.router
            .get('', this.getColonies)
    }
    getColonies(request, response, next) {
        response.send('COLONIES API is working')//first step to verify connection


    }


}
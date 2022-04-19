import express = require('express');
import { getPopularRestaurants, getRestaurantByChef, getRestaurantById, getRestaurantByName } from '../Controller/restaurantsController';
import { getAll } from '../Service/restaurantsService';
export const restaurantsRoutes = express.Router();

restaurantsRoutes.route('/getRestaurantById/:resId')
    .get(async (req: express.Request, res: express.Response) => {
        const restaurantId = parseInt(req.params.resId);
        const allRes = await getRestaurantById(restaurantId);
        res.send(allRes);
    })

restaurantsRoutes.route('/getPopular')
    .get(async (req: express.Request, res: express.Response) => {
        const popRes = await getPopularRestaurants();

        res.send(popRes);
    })

restaurantsRoutes.route('/getByName/:resName')
    .get(async (req: express.Request, res: express.Response) => {
        const resName = req.params.resName;
        const popRes = await getRestaurantByName(resName);
        res.send(popRes);
    })

restaurantsRoutes.route('/getByChef/:chefId')
    .get(async (req: express.Request, res: express.Response) => {
        const chefId = parseInt(req.params.chefId);
        const popRes = await getRestaurantByChef(chefId);
        res.send(popRes);
    })

restaurantsRoutes.route('/')
    .get(async (req: express.Request, res: express.Response) => {
        const allRes = await getAll();
        res.send(allRes);
    })

module.exports = restaurantsRoutes;

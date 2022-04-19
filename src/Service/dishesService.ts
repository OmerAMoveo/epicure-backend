import { Dishes } from "./sqlService";

export const getAll = async () => {
    const res = await Dishes.findAll();
    return res;
}

export const getById = async (resId: number, name: string) => {
    const dish = await Dishes.findOne({
        where: {
            name: name,
            restaurant_id: resId,
        }
    })
    return dish;
}

export const getSignatureDishes = async () =>{
    const dish = await Dishes.findOne({
        where: {
            is_signature: true
        }
    })
    return dish;
}

export const getDishesByRestaurantId = async (resId: number) =>{
    const dishes = await Dishes.findAll({
        where: {
            restaurant_id: resId
        }
    })
    return dishes;
}
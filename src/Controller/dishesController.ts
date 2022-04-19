import { getAll, getById, getDishesByRestaurantId, getSignatureDishes } from '../Service/dishesService'


export const getAllDishes = async () => {
    const dishes = await getAll();
    return dishes;
}

export const getDishById = async(resId: number, name: string) =>{
    const dish = await getById(resId, name);
    return dish;
}

export const getSignature= async ()=>{
    const signatures = await getSignatureDishes();
    return signatures;
}

export const getByRestaurantId = async (resId: number) =>{
    const dishes = await getDishesByRestaurantId(resId);
    return dishes;
}
import { Restaurant } from "./sqlService";

export const getAll = async ()=>{
    const res = await Restaurant.findAll();
    return res;
}

export const getById = async (resId: number)=>{
    const res= await Restaurant.findOne({where: {
        id: resId
    }})
    return res;
}

export const getPopular = async ()=>{
    const res = await Restaurant.findAll({where: {
        is_popular: 1
    }})
    return res;
}

export const getByName = async (resName: string) => {
    const res = await Restaurant.findOne({where: {
        name: resName
    }})
    return res;
}

export const getByChef = async (chefId: number) => {
    const res = await Restaurant.findOne({where: {
        chef_id: chefId
    }})
    return res;
}
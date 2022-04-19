import { Sequelize, DataTypes } from "sequelize";

export const sequelize = new Sequelize('epicure-db','root','nuctucuxy1!',{
    host: 'localhost',
    dialect: 'mysql'
});

export const Restaurant = sequelize.define('restaurants',{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    opening_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    closing_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'not defined!',
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    chef_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cuisine: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
},
{timestamps: false});

//////////////////////////////////////////////////////////////////////////////////////////

export const Dishes = sequelize.define('dishes', {
    name: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
    },
    restaurant_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ingredients: {
        primaryKey: false,
        type: DataTypes.JSON,
        allowNull: true,
    },
    price: {
        primaryKey: false,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    is_breakfast: {
        primaryKey: false,
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    is_lunch: {
        primaryKey: false,
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    is_dinner: {
        primaryKey: false,
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    changes: {
        primaryKey: false,
        type: DataTypes.JSON,
        allowNull: true,
    },
    sides: {
        primaryKey: false,
        type: DataTypes.JSON,
        allowNull: true,
    },
    is_signature: {
        primaryKey: false,
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
     image: {
        primaryKey: false,
        type: DataTypes.STRING,
        allowNull: false,
     },
     comment: {
        primaryKey: false,
        type: DataTypes.INTEGER,
        allowNull: false,
     },

},
{timestamps: false})

//////////////////////////////////////////////////////////////////////////////////////////

export const Chefs = sequelize.define('chefs', {
    first_name: {
        primaryKey: false,
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        primaryKey: false,
        type: DataTypes.STRING,
        allowNull: false,
    },
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        primaryKey: false,
        type: DataTypes.STRING,
        allowNull: true,
    },
    image: {
        primaryKey: false,
        type: DataTypes.STRING,
        allowNull: true,
    }
},
{timestamps: false})

//////////////////////////////////////////////////////////////////////////////////////////

 const getAllDishes = async ()=>{
    const dish = await Dishes.findAll();
    return dish;
}


 const getAllChefs= async() => {
    const chefs = await Chefs.findAll();
    return chefs;
}

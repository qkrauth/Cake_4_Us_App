let bases = [
    {
        name: "White Cake"
    },
    {
        name: "Chocolate Cake"
    },
    {
        name: "Cheesecake"
    },
    {
        name: "Ice Cream Cake"
    },
    {
        name: "Marble Cake"
    },
    {
        name: "Red Velvet Cake"
    },
    {
        name: "Sponge Cake"
    }
];

let extras = [
    {
        name: "Vanilla Icing"
    },
    {
        name: "Chocolate Icing"
    },
    {
        name: "Creame Cheese Icing"
    },
    {
        name: "Strawberry Icing"
    },
    {
        name: "Chai Icing"
    },
    {
        name: "Whipped Cream"
    },
    {
        name: "Sprinkles"
    },
    {
        name: "Cookie Crumbles"
    },
    {
        name: "Ganache"
    },
    {
        name: "Marzipan"
    },
    {
        name: "Normal Candles"
    },
    {
        name: "Scented Candles"
    }
];

const seed = async () => {
    const {Base, Extra} = require("../util/models")
    await Base.bulkCreate(bases)
    await Extra.bulkCreate(extras)
    return
}

module.exports = seed;
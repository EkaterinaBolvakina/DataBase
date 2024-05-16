use("product_db")
//db.drinks.insertOne({type: 'Wein', sort: 'Grauer Burgunder', price: 7, strength: 14})
//db.drinks.insertOne({type: 'Bier', sort: 'Pilsener', price: 3, strength: 5})

/*
db.drinks.insertMany([{type: 'Cocktail', sort: 'Mojito', price: 8, strength: 10},
    {type: 'Wein', sort: 'Riesling', price: 6, strength: 12},
    {type: 'Whisky', sort: 'Single Malt', price: 15, strength: 40},
    {type: 'Champagner', sort: 'Brut', price: 25, strength: 12},
    {type: 'Wodka', sort: 'Standard', price: 12, strength: 37},
    {type: 'Whisky', sort: 'Bourbon', price: 18, strength: 45},
    {type: 'Wein', sort: 'Merlot', price: 10, strength: 13},
    {type: 'Bier', sort: 'Weizenbier', price: 4, strength: 5},
    {type: 'Wein', sort: 'Chardonnay', price: 8, strength: 13}
])
*/
//db.drinks.find().sort({type: -1})
//db.drinks.find().sort({type: -1 , sort: 1})

//db.drinks.findOne({sort: 'Merlot'})
/*
db.drinks.find({
    $or: [
        { sort: 'Merlot' },
        { type: 'Bier' }
    ]
}).sort({ type: 1 })
*/
db.drinks.find().sort({_id: -1}).limit(2)

//db.drinks.countDocuments({type: 'Wein'})
/*
db.drinks.updateOne(
    {sort: 'Merlot'}, 
    {$set: { price: 25}}
)
*/
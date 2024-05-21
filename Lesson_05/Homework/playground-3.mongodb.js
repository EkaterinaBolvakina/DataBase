use ("crud_transport_db")

//  1.CREATE:
/*
db.cars.insertOne({
    "brand": "Honda",
    "price": 20000,
    "model": "Civic",
    "year": 2017,
    "horsepower": 174
  })

db.cars.insertMany([
    {
      "brand": "BMW",
      "price": 20000,
      "model": "X5",
      "year": 2015,
      "horsepower": 300
    },
    {
      "brand": "BMW",
      "price": 18000,
      "model": "3 Series",
      "year": 2015,
      "horsepower": 240
    },
    {
      "brand": "Audi",
      "price": 22000,
      "model": "A4",
      "year": 2016,
      "horsepower": 252
    },
    {
      "brand": "Audi",
      "price": 25000,
      "model": "Q7",
      "year": 2017,
      "horsepower": 333
    },
    {
      "brand": "Mercedes-Benz",
      "price": 30000,
      "model": "C-Class",
      "year": 2015,
      "horsepower": 241
    },
    {
      "brand": "Mercedes-Benz",
      "price": 28000,
      "model": "E-Class",
      "year": 2018,
      "horsepower": 295
    },
    {
      "brand": "Toyota",
      "price": 15000,
      "model": "Camry",
      "year": 2017,
      "horsepower": 203
    },
    {
      "brand": "Toyota",
      "price": 17000,
      "model": "Corolla",
      "year": 2016,
      "horsepower": 132
    },
    {
      "brand": "Ford",
      "price": 16000,
      "model": "Mustang",
      "year": 2015,
      "horsepower": 310
    },
    {
      "brand": "Chevrolet",
      "price": 14000,
      "model": "Malibu",
      "year": 2016,
      "horsepower": 160
    }
  ])
  */
 // 2.READ:
 //db.cars.findOne({brand : "BMW"})
 //db.cars.find({brand : "BMW"}).sort({price: -1})

 // 3.UPDATE:
 //db.cars.updateOne({_id: ObjectId('664ccd3a8f36b05b715ebbfa')}, {$set: {price : 1000}})
 //db.cars.updateMany({brand: "Audi"}, {$set: {year: 2013}})
 //db.cars.updateOne({_id: ObjectId('664ccd3a8f36b05b715ebbfc')}, {$inc: {horsepower: -10}})

 // 4.DELETE:
 //db.cars.deleteOne({model: "Corolla"})
// db.cars.deleteMany({brand: "BMW"})

// nr.3: display and sort items via aggregator: output all items with price less than 20000, sort in reverse order
// * operators: $lt (<), $gt (>), $lte (<=), $gte (>=)
/*
db.cars.aggregate([
    {$match: {
      price: {$lt: 20000} 
    }},
    {$sort: {price: -1}}
])
*/
/* nr.4:create new collection categories with car's types:
db.categories.insertMany([
    {
      "category_id": 1,
      "category_name": "Sedan"
    },
    {
      "category_id": 2,
      "category_name": "Truck"
    },
    {
      "category_id": 3,
      "category_name": "SUV"
    },
    {
      "category_id": 4,
      "category_name": "Convertible"
    },
    {
      "category_id": 5,
      "category_name": "Pickup"
    }
  ])
  */
 //db.categories.deleteMany({})
 /*
 db.categories.insertMany([
    {
      "category_name": "Sedan"
    },
    {
      "category_name": "Truck"
    },
    {
      "category_name": "SUV"
    },
    {
      "category_name": "Convertible"
    },
    {
      "category_name": "Pickup"
    }
  ])
  */
 /*
  db.cars.updateOne(
    { _id: ObjectId('664ccd3a8f36b05b715ebbf9') },
    { $set: { category_id: ObjectId("664cf0f03bdcd8c459114b69") } }
)

db.cars.updateOne(
    { _id: ObjectId('664ccd3a8f36b05b715ebbfa') },
    { $set: { category_id: ObjectId("664cf0f03bdcd8c459114b69") } }
);

db.cars.updateOne(
    { _id: ObjectId('664ccd3a8f36b05b715ebbfb') },
    { $set: { category_id: ObjectId("64cf0f03bdcd8c459114b6c") } }
);

db.cars.updateOne(
    { _id: ObjectId('664ccd3a8f36b05b715ebbfc') },
    { $set: { category_id: ObjectId("664cf0f03bdcd8c459114b6b") } }
);

db.cars.updateOne(
    { _id: ObjectId('664ccd3a8f36b05b715ebbff') },
    { $set: { category_id: ObjectId("664cf0f03bdcd8c459114b6a") } }
);
*/
// nr.5: output values from related collections:
/*
db.cars.aggregate({$lookup: {
    from: 'categories',
    localField: "category_id",
    foreignField: "_id",
    as: "category_type"
}})
*/
// nr.6: show a random car (only one)
db.cars.aggregate([
    {$sample: {size:1}}
])
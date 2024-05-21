use("crud_db")
/*
db.animals.insertMany([
    {kind:'tiger', weight: 300, name: 'Barsik', predatory: true},
    {kind: 'moose', weight: 350, name: 'Arnold', predatory: false},
    {kind: 'chicken', weight: 5, name: 'Ryaba', predatory: false},
    {kind: 'shark', weight: 100, name: 'Sharp', predatory: true},
    {kind: 'cheetah', weight: 80, name: 'Chester', predatory: true}
]) */
/*
db.animals.insertOne({kind: 'shark', weight: 90, name: 'Jaws', predatory: true}) */

// * CRUD operations (Create, Read, Update, Delete)
// * $set, $inc, $rename, $push, $pull, $unset - Operators for changing/update
// * updateMany()

//db.animals.updateMany({kind: 'shark'}, {$set: {predatory: false}})
//db.animals.updateMany({kind: 'shark'}, {$set: {predatory: true}})

//db.animals.updateMany({}, {$inc: {weight: 3}})
//db.animals.find()
//db.animals.updateMany({}, {$inc: {weight: -3}})
//db.animals.find()

// * updateOne() - ändert das erste Dokument in der Kollektion, das der Bedinging entspricht
//db.animals.updateOne({_id: ObjectId('664c569afeaafc96e048be06')}, {$set: {weight: 3}})

// * operator $unset - entfernt die Eigenschaft aus dem Dokument:
//db.animals.updateOne({kind: 'moose'}, {$unset: {predatory: ''}})

// mit $set wieder zurück die Eigenschaft hinzufügen:
//db.animals.updateOne({kind: 'moose'}, {$set: {predatory: false}})

// * $push - fügt ein Array mit den Elements nach dem eingegebenen Schlüssel/Bedingung:
//db.animals.updateOne({kind: 'cheetah'}, {$push: {foods: 'chitos'}})

// * $pull - löscht das Element aus dem Array nach dem eingegebenen Schlüssel/Bedingung:
//db.animals.updateOne({kind: 'cheetah'}, {$pull: {foods: 'chitos'}})

// * $push mit $each - 
//db.animals.updateOne({kind: 'cheetah'}, {$push: {foods:{$each: ['meal', 'milk', 'cola']} }})

// * $rename - ändert den Namen der Eigenschaft:
//db.animals.updateMany({}, {$rename: {predatory: "is Predator"}})

/* 
* 1. CREATE: insertOne(), insertMany()
* 2. READ: findOne(), findMany()
* 3. UPDATE: updateOne(), updateMany()
* 4. DELETE: deleteOne(), deleteMany()
*/
//db.animals.deleteOne({_id: ObjectId('664c589677983e2dcf74a1a3')})
//db.animals.deleteOne({name: 'Sharp'})

// ? REFERENCES
/*
db.posts.insertOne({
    likes: 10,
    text: 'Hello, nice to see you here'
})
*/
/*
db.comments.insertMany([
    {email: "123@google.com", message: 'Hi!', post_id: ObjectId('664c725946635412e124e20b')},
    {email: "345@google.com", message: 'OHH! Nice to see you!', post_id:  ObjectId('664c725946635412e124e20b')},
    {email: "678@google.com", message: 'Hi! :-)', post_id:  ObjectId('664c725946635412e124e20b')}
])
*/

// ? AGGREGATE() - Methode zum Verbinden die Operationen in eine Pipeline
// * $lookup operator - analog JOIN aus dem PostgresSQL
// * from - mit welcher Kollektion wird verbunden
// * localField - Schlüssel aus der Kollektion 1
// * foreignField - Schlüssel aus der Kollektion 2, die wir hinzufügen
// * as - geben den neuen Namen in der Abfrage
// result wird nur hier angezeigt, nicht in Compas!
/*
use("crud_db")
db.comments.aggregate({$lookup: {
    from: 'posts',
    localField: "post_id",
    foreignField: "_id",
    as: "post_info"
}})
*/
use("crud_db")
//db.animals.updateMany({}, {$rename: {"is Predator": "isPredator"}})
// gib alle predators und sortiere nach dem Gewicht:

db.animals.aggregate([
    {$match: {isPredator: true }}, {$sort: {weight: 1}}
])


// alle predators aufzählen:
/*
 db.animals.aggregate([
    { $match: { isPredator: false}},
    {$count: "not_predators_numbers"}
 ])
*/

// * $sample - 
/*
db.animals.aggregate([
    {$sample: {isPredator: true}}
])
*/
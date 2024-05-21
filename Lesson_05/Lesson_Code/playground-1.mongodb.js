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

// * $sample - получение случайного элемента: в size передается кол-во случайных элементов
/*
db.animals.aggregate([
  {$sample: {size: 2}}
 ])
*/

// ================================== code from teacher: ==================
use('crud_db')

// * создает коллекцию со значениями

db.animals.insertMany([
  {kind: 'tiger', weight: 300, name: 'Barsik', predatory: true},
  {kind: 'moose', weight: 350, name: 'Arnold', predatory: false},
  {kind: 'chicken', weight: 5, name: 'Ryaba', predatory: false},
  {kind: 'shark', weight: 100, name: 'Sharp', predatory: true},
  {kind: 'cheetah', weight: 80, name: 'Chester', predatory: true}
])

// * добавляем новое значение

db.animals.insertOne({kind: 'shark', weight: 90, name: 'Jaws', predatory:true})

// ! CRUD операции (Create, Read, Update, Delete)

// ? updateOne(), updateMany()

// * $set, $unset, $inc, $rename, $push, $pull - операторы для изменения

db.animals.updateMany({kind: 'shark'}, {$set: {predatory: true}})

// изменение у все документов в коллекции

db.animals.updateMany({}, {$inc: {weight: -2}})

// * db.animals.find() - если хотите посмотреть все документы в коллекции

// * updateOne() - изменяет первый документ в коллекции, который удовлетворяет условию

// * если вы хотите найти элемент по id, то вы используете метод ObjectId(), в которую передаете строку с идентификатором

db.animals.updateOne({_id: ObjectId('664c568c749319d52b26efb3')},{$set:{weight: 5}})

// * оператор $unset удаляет свойство из документа

db.animals.updateOne({kind: 'moose'},{$unset:{predatory: ''}})

db.animals.updateOne({kind: 'moose'},{$set:{predatory: false}})

db.animals.updateOne({kind: 'cheetah'}, {$push: {foods: 'chitos'}})

// * $pull - удаляет элемент из  массива по указанному ключу

db.animals.updateOne({kind: 'cheetah'}, {$pull: {foods: 'chitos'}})

// * $push добавляет массив с элементами по указанному ключу

db.animals.updateOne({kind: 'cheetah'}, {$push: {foods: 'chips'}})

// * если вы хотите добавить сразу несколько элементов за раз в массиве используйте оператор $each

db.animals.updateOne(
  { kind: 'cheetah' },
  { $push: { foods: { $each: ['squid', 'hinkali'] } } }
);

// * $rename переименовывает имя свойства в документе или нескольких

db.animals.updateMany({}, {$rename: {predatory: "isPredator"}})

// * 1. CREATE: insertOne(), insertMany()
// * 2. READ: findOne(), findMany()
// * 3. UPDATE: updateOne(), updateMany()
// * 4. DELETE: deleteOne(), deleteMany()

// ? deleteOne(), deleteMany()

db.animals.deleteOne({_id: ObjectId('664c588f138aab90fb64a1b1')})

db.animals.deleteOne({name: "Sharp"})

// ? REFERENCES

db.posts.insertOne({
  likes: 10,
  text: 'Hello, nice to see you here!'
})

db.comments.insertMany([
  {email: "123@google.com", message: 'Hi!', post_id: ObjectId("664c724af3a5021dd4e95a5f")},
  {email: "345@google.com", message: 'Ohh! nice to see you', post_id: ObjectId("664c724af3a5021dd4e95a5f")},
  {email: "679@google.com", message: '🙆‍♂️', post_id: ObjectId("664c724af3a5021dd4e95a5f")}
])

// ? aggregate() - метод для связи операций в один pipeline

// * оператор $lookup - аналог join из postgres

// * from - c какой коллекцией объединяем
// * localField - ключ из коллекции, к которой обращаемся
// * foreignField - ключ из связной таблицы
// * as - псевдоним для отображения

db.comments.aggregate({$lookup: {
  from: 'posts',
  localField: "post_id",
  foreignField: "_id",
  as: "info_from_post"
}})

// получим всех хищных и отсортируем по весу

db.animals.aggregate([
  { $match: { isPredator: true } },
  { $sort: { weight: -1 } }
])

// посчитаем кол-во всех не хищников

db.animals.aggregate([
  { $match: { isPredator: false } },
  {$count: "not_predators_numbers"}
 ])

 // * $sample - получение случайного элемента: в size передается кол-во случайных элементов

 db.animals.aggregate([
  {$sample: {size: 2}}
 ])
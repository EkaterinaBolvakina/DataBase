use("student_db")

//db.students.insertOne({name: 'Ekaterina'})

//db.students.insertOne({ name: 'Donald', age: 35, adress: { country: 'Germany', city: 'Hamburg'}})

/*db.students.insertMany([
    {name: 'Alena', hobby: 'Travelling'},
    {name: 'Eugen', hobby: 'Wood working'}
])
*/
/*db.students.insertMany([
    {name: 'Alena', hobby: 'Travelling'},
    {name: 'Eugen', profession: 'Wood working'}
]) */
/*
db.students.insertOne({name: 'Harry',
hobby: ['Magic', 'Flying', 'Traveling', 'Battle with Evil']
})
*/
//db.students.find()

//db.students.find().limit(2)
//db.students.find().sort({name: 1}).limit(2)
//db.students.find().sort({_id: -1}).limit(2)
//db.students.findOne({hobby:"Travelling"})

//db.students.insertOne({name: 'Indiana Jones', hobby: 'Travelling'})
db.students.find({hobby:"Travelling"})
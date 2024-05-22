// создаст новую базу или вернет существующую базу в переменную db
/*
use('factory')
*/

// создаст коллекцию или вставит в существующую коллекцию элемент
/*
db.products.insertOne({
    name: 'test',
    article: '010203'
})
*/


// альтернативный способ создания базы данных и коллекций
const database = 'NEW_DATABASE_NAME';
const collection = 'NEW_COLLECTION_NAME';

// Create a new database.
use(database);
// Create a new collection.




// получит список коллекций
/*
db.getCollectionNames()
*/

// получит список всех документов
/*
db.products.find()
db.products.find({})
db.products.find().pretty()
*/


// CRUD operations

// CREATE
// insertOne(data, options)
// insertMany(data, options)
/*
   insertMany(
    [
        {
           key: "value",
           key1: "value1",
        },
        {
           key: "value",
           key1: "value1",
        }
    ]
   )
*/

// READ
// find(filter, options)
/*
   find({key: "value"})
   find({size: {$gt: 10}}) -больше чем 10
*/
// findOne(filter, options)

// UPDATE
// updateOne(filter, data, options)
/*
   updateOne(name: "Denis", {$set: {key: value}}) -обновит документ по фильтру
   updateMany({}, {$set: {key: value}})           -обновит все документы (если такого ключа <key> нет, то он будет добавлен)

   Оператор $set заменяет значение поля на указанное значение.
*/



// updateMany(filter, data, options)

//DELETE
// deleteOne(filter, options)
/*
   deleteOne({key: "value"})
*/

// deleteMany(filter, options)

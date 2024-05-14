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
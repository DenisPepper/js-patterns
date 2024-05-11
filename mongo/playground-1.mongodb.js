// создаст новую базу или вернет существующую базу в переменную db
use('factory')


// создаст коллекцию или вставит в существующую коллекцию элемент
/*
db.products.insertOne({
    name: 'test',
    article: '010203'
})
*/

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
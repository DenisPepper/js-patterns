const DATABASE = 'shop';
const PRODUCTS = 'products';

// Create a new database.
use(DATABASE);

//db.createCollection(PRODUCTS)


//db.products.insertOne({furnType: 'Комод', price: 12.99});
//db.products.insertOne({furnType: 'Кровать', price: null});

// Общий размер документа - 16 Мб

/* widespread data types:

ObjectId -в идентификатор объекта встроена сортировка, потому что он учитывает временную метку
text
boolean
Integer (int32)
NumberLong (int64)
NumberDecimal (12.99) 
ISODate
Timestamp
Enbedded Document
Array

*/

const dataTypesExample = {
    name: 'Denis 555',
    age: 42,
    salary: 123456789123456789123,
    salaryAsInt32: NumberInt(999999999),
    profession: { position: 'programmer', jobMode: 'remote-first' },
    isLearnMongoDB: true,
    characteristics: ['smart', 'cunning', 'ingenious', 'wise'],
    foundingDate: new Date(),
    insertedAt: new Timestamp(),
}

db.products.insertOne(dataTypesExample)
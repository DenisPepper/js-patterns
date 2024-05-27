const DATABASE = 'shop';
const PRODUCTS = 'products';

// Create a new database.
use(DATABASE);

//db.createCollection(PRODUCTS)


db.products.insertOne({furnType: 'Комод', price: 12.99});
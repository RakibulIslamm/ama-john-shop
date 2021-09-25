const addToDb = id => {
    const exists = getDb();
    let shopping_cart = {};
    if (!exists) {
        shopping_cart[id] = 1;
    }
    else {
        shopping_cart = JSON.parse(exists);
        if (shopping_cart[id]) {
            shopping_cart[id] += 1;
        }
        else {
            shopping_cart[id] = 1;
        }
    }
    updeteDb(shopping_cart);
}

// GET DB
const getDb = () => localStorage.getItem('shopping_cart');

const updeteDb = cart => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
}


// remove item 
const removeItem = id => {
    const exists = getDb();
    if (!exists) {

    }
    else {
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id];
        updeteDb(shopping_cart);
    }
}


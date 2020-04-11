function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName (firstName, lastName){
    let name = `${firstName} ${lastName}`
    return name;
}

function makeHalfPrice(price) {
    return price - (0.5 * price);
}

function countBooks(titles) {
return titles.length;
}

function isInStock(book) {
    return book.quantity >=1;
    }

function getTotalOrderPrice(price, quantity) {
        return (price * quantity) + ((price * 0.2) * quantity);
    }

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice

};
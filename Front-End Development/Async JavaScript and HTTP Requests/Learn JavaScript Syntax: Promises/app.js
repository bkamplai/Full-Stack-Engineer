const inventory = {
    // sunglasses: 1900,   // Promise { 'Sunglasses order processed.' }
    sunglasses: 0,      // Promise { <rejected> 'That item is sold out.' }
    pants: 1088,
    bags: 1344
};

// Write your code below:
function myExecutor(resolve, reject) {
    if (inventory.sunglasses > 0) resolve('Sunglasses order processed.');
    else reject('That item is sold out.');
}

function orderSunglasses() {
    return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();

console.log(orderPromise);
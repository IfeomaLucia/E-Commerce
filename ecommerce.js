
//E-Commerce application by Nwosu Ifeoma Lucia
//At Genesys tech hub, Tenece
//It checks for the items ordered by the customer
//against the items available in the store.

//declares the items in the store as an associative array
var store = [
    {name:"shoes", price:50, quantity:10},
    {name:"dress", price:30, quantity:5},
    {name:"trousers", price:20, quantity:7},
    {name:"caps", price:10, quantity:2}    
]
//declares the items ordered by one customer
var order = [
    {name:"dress", quantity:10},
    {name:"shoes", quantity:5}
]

//declares the items ordered by another customer
var order2 = [
    {name:"caps", quantity:1},
    {name:"trousers", quantity:4},
    {name:"shoes", quantity:1}
]

function buyProduct(store, order){
    //declares a new array which consists of the total price of items ordered
    //and the new array of items remaining in the store.
var newStore =[{totalPrice:0}, store];
var availableProduct = 0;
var quantityIsEnough = true;//quantity of the items is assumed to be enough
   
//loops through the arrays and compares the names and quantities
    for(var item of order){
        var availableItem = false;//assumes the items are not available.
        store.forEach(product => {//checks for items from the order in the store
            if(item.name == product.name){
                availableItem = true;//items are deemed to be available
                availableProduct++;
                if(item.quantity <= product.quantity){
                    newStore[0].totalPrice += item.quantity * product.price;//calculates total price of items bought
                    product.quantity -= item.quantity;//calculates for the remaining quantity
                }else{
                    quantityIsEnough = false;
                }
            }
        })
        if (!availableItem){
            break;
        }
    }
    //checks if  products available are the same length as the order array and 
    //if the quantity of items are enough
    if (availableProduct == order.length && quantityIsEnough == true ){
        console.log(newStore);
        output =newStore;
    }
    //checks if the products available is not equal to the length of the order array
    else if(availableProduct != order.length){
        output = "Item/s are not available";
        console.log(output);
    }
    //this executes when neither of the above conditions hold
    else{
        output = "Out of stock";
        console.log(output);
    }
    return output;
}
buyProduct(store, order);
buyProduct(store, order2);
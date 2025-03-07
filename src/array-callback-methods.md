## How the "Find" Method Works

The find method of array is used to find the first element of an array that fits what you are looking for. This could be a number, index, object, or other item in an array. 
```
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12   
```
 This shows an example of how it works with numbers

 #### Find with objects

```
 const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));
```

### The result of this code would be  
name: 'cherries', quantity: 5 

If you searched for an item that is not part of the array it will come up as undefined. For example if you used 
```
function isBlueberries(fruit) {
    return fruit.name === "blueberries";
}

console.log(inventory.find(isCherries));
```
You would receive an undefined message.

### Similarities to Map

Besides calling back parts of an array I don't see many similarities to map.
const backpackFullOfAmmo = [
    {item: 'energy cell', quantity: 10, priceEa: 0.2 },
    {item: 'bullets', quantity: 5, priceEa: 0.5 },
    {item: 'box of rockets', quantity: 5, priceEa: 25.0 },
    {item: 'box of shells', quantity: 8, priceEa: 1.0 }
    ]
    function calcOrderCost(order) {order.quantity * order.priceEa
    }
    const totalValue = backpackFullOfAmmo.map((ammo) => {
        console.log(ammo)
    })
    
    console.log(totalValue)

    function calcOrderCost(order) {order.quantity * order.priceEa
    }
    
    function doSomethingWithNumber(number, callbackFunction) {
      return callbackFunction(number)
    }
    
    function dividebyTwo(num) {
      return num / 2
    }
    
    function double(num) {
      return num * 2
    }
    
    function triple(num) {
      return num * 3
    }
    
    console.log(doSomethingWithNumber(10, dividebyTwo)) //5
    console.log(doSomethingWithNumber(10, double)) //20
    console.log(doSomethingWithNumber(10, triple)) //30

    const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = numbers.map((number) => number * 2)
console.log(doubledNumbers) // [2, 4, 6, 8, 10]

const tableRows = backpackFullOfAmmo.map((ammo) => {
    return `<tr>
        <td>${ammo.name}</td>
        <td>${ammo.quantity}</td>
        <td>${ammo.priceEa}</td>
    </tr>`
}).join('\n')

console.log(tableRows)

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  
  function isCherries(fruit) {
    return fruit.name === "blueberries";
  }
  
  console.log(inventory.find(isCherries));
  // { name: 'cherries', quantity: 5 }
  
  const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12  
    
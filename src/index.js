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
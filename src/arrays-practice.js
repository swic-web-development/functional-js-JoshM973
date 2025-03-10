const players = [
    { name: 'DoomGuy', frags: 25, deaths: 0},
    { name: 'Slayer', frags: 25, deaths: 1},
    { name: 'Marine', frags: 12, deaths: 15},
    { name: 'Noob', frags: 0, deaths: 25},
]

const playersWithMoreFragsThanDeaths = players.filter((player) => {
     console.log(`We are now looking at this player: ${player.name}`)
        return player.frags > player.deaths
    })

    console.log(playersWithMoreFragsThanDeaths)

    const totalFrags = players.reduce((total, player)=> {
        return total + player.frags
    }, 0)
    console.log(totalFrags)

    const firstPlayerWithMoreFragsThanDeaths =players.find((player) => player.frags > player.deaths)
    console.log(firstPlayerWithMoreFragsThanDeaths)

    const hasFrags = players.some((players) => players.frags)
    console.log(hasFrags)

    const everyPlayerHasMoreFragsThanDeaths = players.every((player) => player.frags > player.deaths)
    console.log(everyPlayerHasMoreFragsThanDeaths)

    const sortedPlayer = players.sort((a, b) => b.frags- a.frags)
    console.log(sortedPlayer)

    const backpackFullOfAmmo = [
        { name: 'bullets', quantity: 10, priceEa: 0.5 },
        { name: 'shotgun shells', quantity: 4, priceEa: 0.5 },
        { name: 'rockets', quantity: 1, priceEa: 5.0 },
        { name: 'energy cell units', quantity: 20, priceEa: 0.2 },
    ]
    const totalValue = backpackFullOfAmmo.reduce((total, backpackFullOfAmmo)=> {
        return total + (backpackFullOfAmmo.quantity * backpackFullOfAmmo.priceEa)
    }, 0)
    console.log(totalValue)

    const monsters = [
        // Deals 10-60 damage per bite
        { name: 'Cacodemon', health: 400, damage: 35 },
        
        // Deals 15-75 damage per claw/fireball
        { name: 'Baron of Hell', health: 1000, damage: 45 },
        
        // Deals 20-200 damage per rocket
        { name: 'Cyberdemon', health: 4000, damage: 125 },
        
        // Deals 5-50 damage per bite
        { name: 'Hell Knight', health: 800, damage: 25 },
        
        // Deals 10-100 damage per bite
        { name: 'Imp', health: 200, damage: 20 },
        
        // Deals 5-25 damage per bite
        { name: 'Lost Soul', health: 100, damage: 10 },
        
        // Deals 5-50 damage per bite
        { name: 'Pinky', health: 300, damage: 15 },
        
        // Deals 10-100 damage per bite
        { name: 'Revenant', health: 500, damage: 30 },
        
        // Deals 5-50 damage per bite
        { name: 'Spectre', health: 200, damage: 20 },
        
        // Deals 5-50 damage per bite
        { name: 'Spider Mastermind', health: 2000, damage: 50 },
        
        // Deals 5-50 damage per bite
        { name: 'Vile', health: 1000, damage: 40 },
        
        // Deals 5-50 damage per bite
        { name: 'Zombie', health: 100, damage: 5 },
        
        // Deals 5-50 damage per bite
        { name: 'Zombieman', health: 200, damage: 10 },
      ];

        const totalHealth = monsters.reduce((total, monster) => {
            return total + monster.health
        }, 0)
        console.log(totalHealth)

        const healthGreaterThan150 = monsters.filter((monster) => monster.health > 150)
        console.log(healthGreaterThan150)
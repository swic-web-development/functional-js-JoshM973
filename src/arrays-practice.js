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
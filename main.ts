scene.setBackgroundColor(1)
let car = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . 9 9 5 5 5 5 5 5 5 5 5 . . 
    . . 9 9 9 5 5 5 5 5 5 5 5 5 . . 
    . 1 5 5 5 5 5 5 5 5 5 5 5 2 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 1 . . 
    . 5 f f 5 5 5 5 5 5 5 f f 5 . . 
    . . f f . . . . . . . f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(car)
scene.cameraFollowSprite(car)
let inventory: color[] = []
let housesinfo: number[][] = [] //column, row, color ordered
let giftsinfo: number[][] = [] //column, row, color ordered
let winningScore = 0 // when the players score is equal to this number then the round ends
let currentLevel = 1

setLevel(currentLevel)

//hard coding of levels instead of random locations

function setLevel(level: number){
    info.setScore(0)
    if(level == 1){
        car.setPosition(64,44)
        tiles.setTilemap(tilemap`level1`)
        housesinfo[0] = [2,5,2]
        giftsinfo[0] = [5,4,2] // one gift
        winningScore = 1
    } else if(level == 2){
        currentLevel = 2
        tiles.placeOnTile(car,tiles.getTileLocation(5,5))
        tiles.setTilemap(tilemap`level2`)
        housesinfo[0] = [8, 9, 2] 
        housesinfo[1] = [2, 9, 5]
        giftsinfo[0] = [2, 6, 2] // two gifts
        giftsinfo[1] = [6, 13, 5]
        inventory = []
        winningScore = 2
    }
}


let surroundings: number[] = [] // stores if there is a house/gift, the color of it, and the index of it from 
game.onUpdate(function(){
    if (controller.A.isPressed()){
        surroundings = checkSurroundingTiles(car)
        if (surroundings[0] == 1) { // check for gifts
            inventory.push(surroundings[1])
            tiles.setTileAt(tiles.getTileLocation(giftsinfo[surroundings[2]][0], giftsinfo[surroundings[2]][1]), img`.`)
            giftsinfo[surroundings[2]] = [-10,-10]
        }
        if(surroundings[0] == 0){ // check for houses
            for (let i = 0; i < 3; i++) {
                if(inventory[i] == surroundings[1]){
                    inventory[i] = null
                    info.changeScoreBy(1)
                }
            }
        }
    }
    if(info.score() >= winningScore){
        game.splash("level " + currentLevel + " Complete!")
        setLevel(currentLevel + 1)
    }
})

function checkSurroundingTiles(sprite: Sprite){ // checks around sprite for gift or house
    //sequencing. has bias towards gifts because gifts dissapear. if bias to house then would never pick up gift
    for(let i = 0; i < giftsinfo.length; i++){
        if (sprite.tilemapLocation().column == giftsinfo[i][0] || sprite.tilemapLocation().column == giftsinfo[i][0] + 1 || sprite.tilemapLocation().column == giftsinfo[i][0] - 1) {
            if (sprite.tilemapLocation().row == giftsinfo[i][1] || sprite.tilemapLocation().row == giftsinfo[i][1] + 1 || sprite.tilemapLocation().row == giftsinfo[i][1] - 1) {
                return [1, giftsinfo[i][2], i] // only this needs the "i" because gifts get deleted from tilemap
            }
        }
        if (sprite.tilemapLocation().column == housesinfo[i][0] || sprite.tilemapLocation().column == housesinfo[i][0] + 1 || sprite.tilemapLocation().column == housesinfo[i][0] - 1) {
            if (sprite.tilemapLocation().row == housesinfo[i][1] || sprite.tilemapLocation().row == housesinfo[i][1] + 1 || sprite.tilemapLocation().row == housesinfo[i][1] - 1) {
                return [0, housesinfo[i][2]]
            }
        }
    }
    return [-1, 16] // 16 is the color-code for black
}
scene.createRenderable(scene.HUD_Z, function(target: Image, camera: scene.Camera){
    screen.fillRect(0,110,30,10,6)
    screen.fillRect(2,112,6,6,inventory[0])
    screen.fillRect(12, 112, 6, 6, inventory[1])
    screen.fillRect(22, 112, 6, 6, inventory[2])
})

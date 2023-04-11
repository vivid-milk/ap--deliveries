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
let housesinfo: number[][] = []
let giftsinfo: number[][] = []
let winningScore = 0 // when the players score is equal to this number then the round ends
let currentLevel = 1

setLevel(currentLevel)

//hard coding of levels instead of random locations
//column then row then color
function setLevel(level: number){
    info.setScore(0)
    if(level == 1){
        car.setPosition(64,44)
        tiles.setTilemap(tilemap`level1`)
        housesinfo[0] = [2,5,2]
        giftsinfo[0] = [5,4,2] // one gift
        winningScore = 1
    } else if(level == 2){
        tiles.placeOnTile(car,tiles.getTileLocation(5,5))
        tiles.setTilemap(tilemap`level2`)
        housesinfo[0] = [8, 9, 2] 
        housesinfo[1] = [2, 9, 5]
        giftsinfo[0] = [2, 6, 2] // two gifts
        giftsinfo[1] = [6, 13, 5]
        winningScore = 2
    }
}


let surroundings: number[] = [] // stores if there is a house/gift and then the color of it
game.onUpdate(function(){
    if (controller.A.isPressed()){
        surroundings = checkSurroundingTiles(car)
        if (surroundings[0] == 1) { // check for gifts
            inventory.push(surroundings[1])
            tiles.setTileAt(tiles.getTileLocation(giftsinfo[0][0], giftsinfo[0][1]), img`.`) // need to make dynamic
            giftsinfo[0] = [-10,-10]
        }
        if(surroundings[0] == 0){ // check for houses
            for (let i = 0; i < 3; i++) {
                if(inventory[i] == surroundings[1]){
                    inventory[0] = null
                    info.changeScoreBy(1)
                }
            }
        }
    }
    if(info.score() == winningScore){
        game.splash("level" + currentLevel + "Complete!")
        setLevel(currentLevel + 1)
    }
})

function checkSurroundingTiles(sprite: Sprite){ // checks around sprite for gift or house
    //sequencing. if was in other order would quit code when detected house so in this method detects gift then picks up gift then on next calling would detect house 
    if (sprite.tilemapLocation().column == giftsinfo[0][0] || sprite.tilemapLocation().column == giftsinfo[0][0] + 1 || sprite.tilemapLocation().column == giftsinfo[0][0] - 1) {
        if (sprite.tilemapLocation().row == giftsinfo[0][1] || sprite.tilemapLocation().row == giftsinfo[0][1] + 1 || sprite.tilemapLocation().row == giftsinfo[0][1] - 1) {
            return [1, giftsinfo[0][2]]
        }
    }
    if (sprite.tilemapLocation().column == housesinfo[0][0] || sprite.tilemapLocation().column == housesinfo[0][0] + 1 || sprite.tilemapLocation().column == housesinfo[0][0] - 1) {
        if (sprite.tilemapLocation().row == housesinfo[0][1] || sprite.tilemapLocation().row == housesinfo[0][1] + 1 || sprite.tilemapLocation().row == housesinfo[0][1] - 1) {
            return [0, housesinfo[0][2]]
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

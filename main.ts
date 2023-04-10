scene.setBackgroundColor(1)
tiles.setTilemap(tilemap`level1`)
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
    let inventory: color[] = []
controller.moveSprite(car)
scene.cameraFollowSprite(car)
tiles.placeOnTile(car, tiles.getTileLocation(4, 5))

//level 1 hard coding
let houseLocation: number[] = []
let giftLocation: number[] = []



game.onUpdate(function(){
    if (controller.A.isPressed()){
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(car.tilemapLocation().column + 1, car.tilemapLocation().row), img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f . . . . f f . . . . 
. . . f 1 1 f . . f 1 1 f . . . 
. . . f 1 1 1 f f 1 1 1 f . . . 
. . . f f 1 1 f f 1 1 f f . . . 
. . f 2 2 1 1 2 2 1 1 2 2 f . . 
. . f 2 2 1 1 2 2 1 1 2 2 f . . 
. . f 2 2 1 1 2 2 1 1 2 2 f . . 
. . f 2 2 1 1 2 2 1 1 2 2 f . . 
. . f 2 2 1 1 2 2 1 1 2 2 f . . 
. . f 2 2 1 1 2 2 1 1 2 2 f . . 
. . f 2 2 1 1 2 2 1 1 2 2 f . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
        `)) {
            inventory.push(2)
            tiles.setTileAt(tiles.getTileLocation(car.tilemapLocation().column + 1, car.tilemapLocation().row), img`.`)
        }
        if()
    }
})
scene.createRenderable(scene.HUD_Z, function(target: Image, camera: scene.Camera){
    screen.fillRect(0,110,30,10,6)
    screen.fillRect(2,112,6,6,inventory[0])
    screen.fillRect(12, 112, 6, 6, inventory[1])
    screen.fillRect(22, 112, 6, 6, inventory[1])
})

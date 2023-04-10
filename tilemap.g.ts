// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000000000000000000000000000000000000000000000000000000000000000000000040505060505050505050b000000000003000003000000000000030000000000030000030204050505050c000000000003010007050a0000000003000000000003000003000000000000030000000000030000030000000000000300000000000805050905050b00000003000000000000000000000003000000030000000000000000000000080505050a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . 2 2 2 2 
2 . 2 2 . 2 2 2 2 2 2 . 2 2 2 2 
2 . 2 2 . 2 . . . . . . 2 2 2 2 
2 . 2 2 . . . 2 2 2 2 . 2 2 2 2 
2 . 2 2 . 2 2 2 2 2 2 . 2 2 2 2 
2 . 2 2 . 2 2 2 2 2 2 . 2 2 2 2 
2 . . . . . . . 2 2 2 . 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 . 2 2 2 2 
2 2 2 2 2 2 2 . . . . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn1,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection2,sprites.vehicle.roadTurn3,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn2,sprites.vehicle.roadIntersection4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

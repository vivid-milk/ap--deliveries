// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

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
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002030303030a00000000000002030303040000000001000000000000010500000100000000010000000000000100000001000000000100000000000001000000010000000001000000000000010c000001000006000100000000000007030b030903030b0308000000000000000001000000000100000000000000000000070303030308000000000000000000000000000d0000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . . . . 2 2 2 2 2 
2 . . . . . 2 2 2 2 . 2 2 2 2 2 
2 . 2 2 2 . 2 2 2 2 . 2 2 2 2 2 
2 . 2 2 2 . 2 2 2 2 . 2 2 2 2 2 
2 . 2 2 2 . 2 2 2 2 . 2 2 2 2 2 
2 . 2 2 2 . 2 2 2 2 . 2 2 2 2 2 
2 . . . . . . . . . . 2 2 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 . . . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn1,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection4,myTiles.tile2,myTiles.tile1,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn4,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn2,sprites.vehicle.roadIntersection3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
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
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

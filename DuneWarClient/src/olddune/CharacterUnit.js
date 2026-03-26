import QuadUnit from "./quadUnit";

export default class CharacterUnit {
    tileFrom = [1, 1];
    tileTo = [1, 1];
    timeMoved = 0;
    dimension = [30, 30];
    position = [45, 45];
    delayMove = 7700;
    SpotX = 0;
    SpotY = 0;
    sprites = {};

    QUAD = new QuadUnit();

    placeAt =  (x, y, PrototypeHeroDemoObj)=> {
        PrototypeHeroDemoObj.tileFrom = [x, y];
        PrototypeHeroDemoObj.tileTo = [x, y];
        PrototypeHeroDemoObj.SpotX = x;
        PrototypeHeroDemoObj.SpotY = y;
        PrototypeHeroDemoObj.position = [32 / 2 + (x * this.QUAD.tileW), 32 / 2 + (y * this.QUAD.tileH)];

    };
    moveTrend = (PrototypeHeroDemoObj) => {
        return [PrototypeHeroDemoObj.tileTo[0] - PrototypeHeroDemoObj.tileFrom[0], PrototypeHeroDemoObj.tileTo[1] - PrototypeHeroDemoObj.tileFrom[1]];
    };
}
 
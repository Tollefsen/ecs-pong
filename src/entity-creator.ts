import * as PIXI from "pixi.js";
import { Entity, PixiEntity, Key } from "ecs";
import Controllable from "./components/Controllable";
import Velocity from "./components/Velocity";

export function box (x: number, y: number, up: Key, down: Key, stage: PIXI.Container): Entity {
    const g = new PIXI.Graphics();
    g.beginFill(0xcecece);
    g.drawRect(x, y, 40, 300);
    g.endFill();

    const entity = new PixiEntity();
    entity.addDisplayObject(g, stage);
    entity.add(new Controllable(up, down));
    entity.add(new Velocity(0, 0));
    return entity;
}

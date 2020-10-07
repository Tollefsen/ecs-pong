import * as PIXI from "pixi.js";
import { Entity, PixiEntity, Key, Position } from "ecs";
import Controllable from "./components/Controllable";
import Velocity from "./components/Velocity";
import Uncontrollable from "./components/Uncontrollable";
import Collidable from "./components/Collidable";

export function box (x: number, y: number, up: Key, down: Key, stage: PIXI.Container): Entity {
    const g = new PIXI.Graphics();
    g.beginFill(0xcecece);
    g.drawRect(0, 0, 40, 300);
    g.endFill();

    const entity = new PixiEntity();
    entity.addDisplayObject(g, stage);
    const position = entity.get(Position);
    position.x = x;
    position.y = y;
    entity.add(new Controllable(up, down));
    entity.add(new Velocity(0, 0));
    entity.add(new Collidable());
    return entity;
}

export function ball(worldWidth: number, worldHeight: number, stage: PIXI.Container): Entity {
    const g = new PIXI.Graphics();
    g.beginFill(0xcecece);
    g.drawRect(0, 0, 40, 40);
    g.endFill();

    const entity = new PixiEntity();
    entity.addDisplayObject(g, stage);
    const position = entity.get(Position);
    position.x = Math.round(worldWidth / 2);
    position.y = Math.round(Math.random() * worldHeight);
    entity.add(new Velocity(4, 8));
    entity.add(new Uncontrollable());
    entity.add(new Collidable());
    return entity;
}

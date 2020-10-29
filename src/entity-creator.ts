import * as PIXI from "pixi.js";
import { Entity, PixiEntity, Key, Position } from "ecs";
import Controllable from "./components/Controllable";
import Velocity from "./components/Velocity";
import Uncontrollable from "./components/Uncontrollable";
import Collidable from "./components/Collidable";
import Fading from "./components/Fading";
import Configurationable from "./components/Configurationable";
import TrailAnimation from "./components/TrailAnimation";
import Expanding from "./components/Expanding";

export function configuration(stage: PIXI.Container) {
    const entity = new Entity();
    entity.add(new Configurationable(stage));
    return entity;
}

export function box (x: number, y: number, up: Key, down: Key, stage: PIXI.Container): Entity {
    const g = new PIXI.Graphics();
    g.beginFill(0xffffff);
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
    entity.add(new TrailAnimation());
    return entity;
}

export function ball(worldWidth: number, worldHeight: number, stage: PIXI.Container): Entity {
    const g = new PIXI.Graphics();
    g.beginFill(0xffffff);
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
    entity.add(new TrailAnimation());
    return entity;
}

export function ballFadingTail(x: number, y: number, width: number, height: number, frames: number, stage: PIXI.Container) {
    const g = new PIXI.Graphics();
    g.beginFill(0xcecece);
    g.drawRect(0,0, width, height);
    g.endFill();
    g.zIndex = -1

    const entity = new PixiEntity();
    entity.addDisplayObject(g, stage);
    const position = entity.get(Position);
    position.x = x;
    position.y = y;
    entity.add(new Fading(frames))
    return entity;
}

export function ballCollitionAnimation(x: number, y: number, frames: number, stage: PIXI.Container) {
    const g = new PIXI.Graphics();
    g.beginFill(0xcecece);
    g.drawRect(0, 0, 40, 40);
    g.endFill();
    g.beginFill(0xADA7A6);
    g.drawRect(5, 5, 30, 30);
    g.endFill();
    g.beginFill(0x656464);
    g.drawRect(10, 10, 20, 20);
    g.endFill();
    g.pivot.x = 20;
    g.pivot.y = 20;

    const entity = new PixiEntity();
    entity.addDisplayObject(g, stage);
    const position = entity.get(Position);
    position.x = x;
    position.y = y;
    entity.add(new Fading(frames));
    entity.add(new Expanding(0.1));
    return entity;

}
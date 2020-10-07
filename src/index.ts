import * as PIXI from "pixi.js";
import { ball, box } from './entity-creator';
import input from "./systems/input";
import physics from "./systems/physics";
import render from "./systems/render";
import collision from './systems/collision';
import { World, Key } from "ecs";

const pixi = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  resolution: 1,
  antialias: false,
});

pixi.view.style.display = "block";

document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.appendChild(pixi.view);

const entities = [
  box(10, 0, Key.W, Key.S, pixi.stage), 
  box(pixi.screen.width - 60, 0, Key.Up, Key.Down, pixi.stage),
  ball(window.innerWidth, window.innerHeight, pixi.stage)
];

const world = new World(
  pixi.view,
  entities,
  [input, physics, collision],
  [render],
  { fps: 60, debug: false },
);

world.start();

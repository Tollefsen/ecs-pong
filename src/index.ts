import * as PIXI from "pixi.js";
import { box } from './entity-creator';
import input from "./systems/input";
import physics from "./systems/physics";
import render from "./systems/render";
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
  box(10, 14, Key.W, Key.S, pixi.stage), 
  box(pixi.screen.width - 60, 14, Key.Up, Key.Down, pixi.stage)
];

const world = new World(
  pixi.view,
  entities,
  [input, physics],
  [render],
  { fps: 60, debug: false },
);

world.start();

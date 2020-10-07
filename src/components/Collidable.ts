import { Component } from "ecs";

class Collidable implements Component {
    name = 'collidable';
    collidable: true;

    constructor() {
        this.collidable = true;
    }
}

export default Collidable;
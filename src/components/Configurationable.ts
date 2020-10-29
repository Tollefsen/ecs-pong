import { Component } from 'ecs';

class Configurationable implements Component {
    name = 'configurationable';

    stage: PIXI.Container

    constructor(stage: PIXI.Container) {
        this.stage = stage;
    }
}

export default Configurationable;
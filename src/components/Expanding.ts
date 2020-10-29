import { Component } from 'ecs';

class Expanding implements Component {
    name = 'expanding'
    scaleRate: number;

    constructor(scaleRate: number) {
        this.scaleRate = scaleRate;
    }
}

export default Expanding;
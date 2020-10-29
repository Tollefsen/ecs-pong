import { Component, Position } from 'ecs';

class TrailAnimation implements Component {
    name = 'trailAnimation'
    tail: true;

    constructor() {
        this.tail = true;
    }
}

export default TrailAnimation;
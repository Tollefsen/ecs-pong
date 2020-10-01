import { Component, Key } from 'ecs';

type KeyInput = Record<string, Key>;

class Controllable implements Component {
    name = 'controllable';
    controlled: true;
    up: Key;
    down: Key;

    constructor(up: Key, down: Key) {
        this.controlled = true;
        this.up = up;
        this.down = down;
    }
}

export default Controllable;
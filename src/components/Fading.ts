import { Component, Key } from 'ecs';

class Fading implements Component {
    name = 'fading';
    framesRemaining: number;

    constructor(framesUntilFade: number) {
        this.framesRemaining = framesUntilFade;
    }
}

export default Fading;
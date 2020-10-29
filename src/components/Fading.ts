import { Component, Key } from 'ecs';

class Fading implements Component {
    name = 'fading';
    framesRemaining: number;
    initialFrames: number;

    constructor(framesUntilFade: number) {
        this.framesRemaining = framesUntilFade;
        this.initialFrames = framesUntilFade;
    }
}

export default Fading;
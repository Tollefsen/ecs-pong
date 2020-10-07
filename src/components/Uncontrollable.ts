import { Component } from 'ecs';


class Uncontrollable implements Component {
    name = 'uncontrollable';
    uncontrolled: true;

    constructor() {
        this.uncontrolled = true;
    }
}

export default Uncontrollable;
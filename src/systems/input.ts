import { Entity, Key, logicSystem, World, Position } from "ecs";
import Controllable from '../components/Controllable';
import Velocity from '../components/Velocity';

export default logicSystem(
    [Position, Velocity, Controllable],
    (entities: Entity[], world: World) => {
        entities.forEach(entity => {
            const p = entity.get(Position);
            const velocity = entity.get(Velocity);
            velocity.y = 0;
            const { up, down } = entity.get(Controllable);

            if (world.keyboard.pressed(down)) {
                velocity.y = 5;
            }
            if (world.keyboard.pressed(up)) {
                velocity.y = -5;
            }
        });
});
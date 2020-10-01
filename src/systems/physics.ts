
import { Entity, logicSystem, World, Position } from "ecs";
import Velocity from "../components/Velocity";

export default logicSystem([Position, Velocity], (entities: Entity[], world: World) => {
    entities.forEach(entity => {
        const position = entity.get(Position);
        const velocity = entity.get(Velocity);
        //const width = world.canvas.width;
        //const height = world.canvas.height;)
        position.y += velocity.y;

    })
});

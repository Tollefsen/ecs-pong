
import { Entity, logicSystem, World, Position, Size } from "ecs";
import Controllable from "../components/Controllable";
import Uncontrollable from "../components/Uncontrollable";
import Velocity from "../components/Velocity";
import { Rect, rect } from "../primitives/rect";

export default logicSystem({ players: [Position, Velocity, Controllable], balls: [Position, Velocity, Uncontrollable] }, (entities, world: World) => {
    entities.balls.forEach(ball => {
        const position = ball.get(Position);
        const velocity = ball.get(Velocity);
        const size = ball.get(Size);

        if (position.y + size.height >= world.canvas.height) {
            velocity.y *= -1;
        }
        if (position.y <= 0) {
            velocity.y *= -1;
        }

        position.x += velocity.x;
        position.y += velocity.y;

        
    })
    
    entities.players.forEach(entity => {
        const position = entity.get(Position);
        const velocity = entity.get(Velocity);
        const size = entity.get(Size);
        //const width = world.canvas.width;
        //const height = world.canvas.height;)
        position.x += velocity.x;
        position.y += velocity.y;

        if (position.y + size.height >= world.canvas.height) {
            position.y -= velocity.y;
        }
        if (position.y <= 0) {
            position.y -= velocity.y;
        }

    })
});

function worldBox(world: World): Rect {
    const canvas = world.canvas;
    return rect(0, 0, canvas.width, canvas.height);
  }
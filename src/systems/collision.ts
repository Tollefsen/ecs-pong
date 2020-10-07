import { logicSystem, Position, Size, World } from "ecs";
import Collidable from "../components/Collidable";
import Controllable from "../components/Controllable";
import Uncontrollable from '../components/Uncontrollable'
import Velocity from "../components/Velocity";
import boundingBox from "../math/boundingbox";
import { boxIntersects } from "../math/intersect";

export default logicSystem({ players: [Controllable, Collidable], ball: [Uncontrollable, Collidable, Position, Size]}, 
    (entities, world: World) => {
        if (entities.ball.length === 0) {
            return;
        }
        const ball = entities.ball[0];
        const ballRect = boundingBox(ball.get(Position), ball.get(Size));


        entities.players.forEach(entity => {
            const entityRect = boundingBox(entity.get(Position), entity.get(Size));
            if(boxIntersects(ballRect, entityRect)) {
                console.log('collision!')
                const velocity = ball.get(Velocity);
                velocity.x *= -1.1;
            }
        })
})
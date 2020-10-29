import { logicSystem, Position, Size, World } from "ecs";
import Collidable from "../components/Collidable";
import Configurationable from "../components/Configurationable";
import Controllable from "../components/Controllable";
import Uncontrollable from '../components/Uncontrollable'
import Velocity from "../components/Velocity";
import { ballCollitionAnimation } from "../entity-creator";
import boundingBox from "../math/boundingbox";
import { boxIntersects } from "../math/intersect";

export default logicSystem(
    { 
    configurations: [Configurationable], 
    players: [Controllable, Collidable], 
    ball: [Uncontrollable, Collidable, Position, Size]
}, 
    (entities, world: World) => {
        if (entities.ball.length === 0) {
            return;
        }
        const ball = entities.ball[0];
        const ballRect = boundingBox(ball.get(Position), ball.get(Size));
        const stage = entities.configurations[0].get(Configurationable).stage

        entities.players.forEach(entity => {
            const entityRect = boundingBox(entity.get(Position), entity.get(Size));
            if(boxIntersects(ballRect, entityRect)) {
                console.log('collision!')
                const velocity = ball.get(Velocity);
                velocity.x *= -1.1;

                const position = ball.get(Position);
                const newEntity = ballCollitionAnimation(velocity.x >= 0 ? position.x + 40 : position.x, position.y + 20, 320, stage);
                world.addEntity(newEntity);
            }
        })
})
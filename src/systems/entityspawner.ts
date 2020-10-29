import { logicSystem, Position, Size, World } from "ecs";
import Configurationable from "../components/Configurationable";
import TrailAnimation from "../components/TrailAnimation";
import { ballFadingTail } from '../entity-creator';


export default logicSystem({ configurations: [Configurationable], withTrailAnimation: [TrailAnimation]}, (entities, world: World) => {
    const stage = entities.configurations[0].get(Configurationable).stage;
    entities.withTrailAnimation.forEach(entity => {
        const position = entity.get(Position);
        const size = entity.get(Size);
        const newEntity = ballFadingTail(position.x, position.y, size.width, size.height, 10, stage);
        world.addEntity(newEntity);
    })
})
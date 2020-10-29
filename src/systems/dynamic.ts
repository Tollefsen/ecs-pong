import { logicSystem, World } from "ecs";
import Expanding from "../components/Expanding";

export default logicSystem({ withExpandable : [Expanding]}, (entities, world: World) => {
    
})
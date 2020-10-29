import {
    World,
    renderSystem,
    Entity,
    Component,
    Displayable,
    Position, Size
  } from "ecs";
import Expanding from "../components/Expanding";
import Fading from "../components/Fading";

  export default renderSystem({ displayable: [Displayable]}, (entities, lag: number, world: World) => {
    
    entities.displayable.forEach(entity => {
        const { ref } = entity.get(Displayable);

        ifHas(entity, Position, position => {
          ref.x = position.x;
          ref.y = position.y;
        });

        ifHas(entity, Fading, fading => {
          fading.framesRemaining--;
          const size = entity.get(Size);

          ref.alpha -= 1 / fading.initialFrames;
          if (fading.framesRemaining === 0) {
            ref.parent.removeChild(ref)
            world.removeEntity(entity.id);

          }
        })

        ifHas(entity, Expanding, expanding => {
          ref.scale.x += expanding.scaleRate;
          ref.scale.y += expanding.scaleRate;
        })
    })
  });


  function ifHas<C extends Component>(
    entity: Entity,
    component: new (...args: any) => C,
    fn: (component: C) => void
  ) {
    if (entity.has(component)) {
      fn(entity.get(component));
    }
  }
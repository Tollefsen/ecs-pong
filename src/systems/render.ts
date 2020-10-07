import {
    World,
    renderSystem,
    Entity,
    Component,
    Displayable,
    Position,
  } from "ecs";

  export default renderSystem({ displayable: [Displayable]}, (entities, lag: number, world: World) => {
    entities.displayable.forEach(entity => {
        const { ref } = entity.get(Displayable);

        ifHas(entity, Position, position => {
          ref.x = position.x;
          ref.y = position.y;
        });
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